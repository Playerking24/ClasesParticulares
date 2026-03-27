let gameSequence = [];
let userSequence = [];

const colors = ["rojo", "azul", "verde", "amarillo"];
let level = 0;
let highScore = localStorage.getItem("highScore")
const btn = document.getElementById("btn");
const status = document.getElementById("status");

function game() {
    btn.classList.add("invisible");
    status.classList.add("invisible");
    gameSequence = [];
    level = 0;
    nextLevel();
}

nextLevel = () => {
    userSequence = [];
    level++;
    document.getElementById("level").innerText = `Nivel ${level}`;

    const randomcolor = colors[Math.floor(Math.random() * 4)];
    gameSequence.push(randomcolor);
    playSequence();
}

async function playSequence() {
    for (let color of gameSequence) {
        await flashcolor (color);
    }
    
}

function flashcolor(color) {
return new Promise ((resolve) => {
    const e = document.querySelector (`.${color}`);
    e.classList.add("on");
    setTimeout(() => {
        e.classList.remove("on");
        setTimeout(resolve,250);
    }, 500);
});
}

function playerclick(color) {
    userSequence.push(color);
    flashcolor(color)
    const currentStep = userSequence.length - 1;

    if (userSequence [currentStep] !== gameSequence[currentStep]){
        gameover();
        return;

    }

    if (userSequence.length === gameSequence.length){
        setTimeout(nextLevel,250);
    }
}

function gameover() {
    alert("¡Perdiste! Intenta de nuevo");
    btn.classList.remove("invisible");
}

alert('Hola nick');