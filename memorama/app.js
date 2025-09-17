const tablero = document.querySelector('.tablero');
const iniciarBtn = document.getElementById('iniciar-btn');
const reiniciarBtn = document.getElementById('reiniciar-btn');

const iconos = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
let cartas = [];

let cartaVolteada = false;
let bloqueoTablero = false;
let primeraCarta, segundaCarta;

function crearTablero() {
    // Mezcla las cartas y vacía el tablero
    cartas.sort(() => 0.5 - Math.random());
    tablero.innerHTML = '';

    cartas.forEach(icono => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.emoji = icono;

        const caraDelantera = document.createElement('div');
        caraDelantera.classList.add('cara-delantera');
        caraDelantera.textContent = icono;

        const caraTrasera = document.createElement('div');
        caraTrasera.classList.add('cara-trasera');

        carta.appendChild(caraDelantera);
        carta.appendChild(caraTrasera);

        carta.addEventListener('click', voltearCarta);
        tablero.appendChild(carta);
    });
}

function iniciarJuego() {
    cartas = [...iconos, ...iconos];
    crearTablero();
    iniciarBtn.style.display = 'none';
    reiniciarBtn.style.display = 'inline-block';
}

function reiniciarJuego() {
    bloqueoTablero = true;
    tablero.innerHTML = '';
    iniciarJuego();
}

function voltearCarta() {
    if (bloqueoTablero) return;
    if (this === primeraCarta) return;

    this.classList.add('volteada');

    if (!cartaVolteada) {
        cartaVolteada = true;
        primeraCarta = this;
    } else {
        segundaCarta = this;
        comprobarPareja();
    }
}

function comprobarPareja() {
    let esPareja = primeraCarta.dataset.emoji === segundaCarta.dataset.emoji;
    esPareja ? deshabilitarCartas() : desvoltearCartas();
}

function deshabilitarCartas() {
    primeraCarta.removeEventListener('click', voltearCarta);
    segundaCarta.removeEventListener('click', voltearCarta);
    resetearTurno();
}

function desvoltearCartas() {
    bloqueoTablero = true;
    setTimeout(() => {
        primeraCarta.classList.remove('volteada');
        segundaCarta.classList.remove('volteada');
        resetearTurno();
    }, 1000);
}

function resetearTurno() {
    [cartaVolteada, bloqueoTablero] = [false, false];
    [primeraCarta, segundaCarta] = [null, null];
}

iniciarBtn.addEventListener('click', iniciarJuego);
reiniciarBtn.addEventListener('click', reiniciarJuego);