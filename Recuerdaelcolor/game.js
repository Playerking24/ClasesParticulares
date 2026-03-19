let gameSequence = [];
let userSequence = [];

const colors = ["rojo", "azul", "verde", "amarillo"];
let level = 0;
const btn = document.getElementById("btn");

function game() {
    btn.classList.add("invisible");
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

function playerclick (color) {
    userSequence.push(color)
    const currentStep = userSequence.length - 1;

    if (userSequence [currentStep] !== gameSequence[currentStep]){

    }

    if (currentStep.length === gameSequence.length){
        setTimeout(nextLevel,1000);
    }
}