const text = document.getElementsByClassName('texto');

function saludo() {
    let nombre = prompt("Cual es tu nombre??");
    alert(`Hola ${nombre}, bienvenido al juego`);
    return nombre;
}

function pistaA() {
    text.textContent = `Hola ${nombre}, te hemos contactado para resolver un crimen`;
}