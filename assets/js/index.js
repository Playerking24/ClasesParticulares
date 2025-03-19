let box = 2;// inicializar variable
let box2 = 1;
let box3 = 4;
let box4 = 3;
let suma = box + box3;
let resta = box2 - box;
let multiplicar = box * box4;
let dividir = box3 / box4;
console.log(box,box2,box3,box4);
console.log(suma);
console.log(resta);
console.log(multiplicar);
console.log(dividir);

// let numero = 7; tipo de dato numerico
// let frase ="hola"; tipo de dato string
// let hola; tipo de dato undifine
// let verdadero = true o false; tipo de dato booleano
// let nulo = null;
// let opcion = parseInt(prompt("Quieres:\n 1: Sumar \n 2: Restar \n 3: Multiplicar \n 4: Dividir"));
// let num1 = parseInt(prompt("ingresa el primer numero"));
// let num2 = parseInt(prompt("ingresa el segundo numero"));
// let resultado; //declarar variable

/* if (opcion === 1) {
    resultado = num1 + num2;
} else if (opcion === 2) {
    resultado = num1 - num2;
} else if (opcion === 3) {
    resultado = num1 * num2;
} else if (opcion === 4) {
    resultado = num1 / num2;
} else {
    console.log("dato ingresado incorrecto");
} */

/* switch (opcion) {
    case 1:
        resultado = num1 + num2; // suma
        break;
    case 2:
        resultado = num1 - num2; // resta
        break;
    case 3:
        resultado = num1 * num2; // multiplicar
        break;
    case 4:
        resultado = num1 / num2; // dividir
        break;
    default:
        console.log("dato ingresado incorrecto");11
        break;
}
console.log(resultado); */
// Piedra Papel y Tijera
/* let nombres = ["piedra", "papel", "tijeras"];
console.log(nombres);
console.log(nombres[0]);

let adversario = Math.floor(Math.random() * 3) + 1;
console.log(adversario);

let usuario = parseInt(prompt("Elige:\n 1: piedra \n 2: Tijera \n 3: Papel"));

if (usuario == adversario) {
    alert("empate")
}

if (usuario ) {

} */

function adivina() {
    let intentos = 0;
    let maquina = Math.floor(Math.random() * 10) + 1;
    let dificultad = prompt("Elige la dificultad \n facil \n normal \n dificil");
    let cantidadIntentos;

    if (dificultad == "facil") {
        cantidadIntentos = 7;
    };

    if (dificultad == "normal") {
        cantidadIntentos = 5;
    }

    if (dificultad == "dificil") {
        cantidadIntentos = 3;
    }
     
    
    while (intentos < cantidadIntentos) {
        let usuario = parseInt(prompt("Adivina el numero que esta pensando la maquina. Entre 1 y 10"));
        intentos += 1;
        if (usuario == maquina) {
            alert("Haz adivinado el numero, " + maquina + " en " + intentos + " intentos");
            break;
        };
    }

    alert("El juego a terminado")
};

const charmander = {
    name:"charmander",
    pista1: "es pequeño",
    pista2: "es un pokemon de Ash",
    pista3: "es un pokemon de fuego"
};

const squirtle = {
    name:"squirtle",
    pista1: "es pequeño",
    pista2: "es un pokemon de Ash",
    pista3: "es un pokemon de agua"
};

const bulbasaur = {
    name:"bulbasaur",
    pista1: "es pequeño",
    pista2: "es un pokemon de Ash",
    pista3: "es un pokemon de planta"
};

const Pikachu = {
    name:"Pikachu",
    pista1: "es pequeño",
    pista2: "es un pokemon de Ash",
    pista3: "es un pokemon de electrizidad"
};

const auto = {
    ventanas: 7,
    puerta: 3,
    ruedas: 4,
}

let infoObjetos = auto.ventanas;

console.log(infoObjetos);
// los array arrancan desde 0
let pokemon = [charmander,bulbasaur,squirtle,Pikachu];

function adivinaElPokemon() {
    //aca asignamos un numero al azar
    let indice = Math.floor(Math.random() * 4); 
    //aca le decimos que indice del array eligio 
    let pokemonSecreto = pokemon[indice];
    //se lanza la primera pista
    alert(pokemonSecreto.pista1)
    //La  pregunta al usuario y tambien se obtiene la respuesta
    let nombrepokemon = prompt ("cual Pokemon es")
    // validamos se respuesta con el pokemon 
    if (nombrepokemon == pokemonSecreto.name) {
        alert ("Haz Adivinado el pokemon");
        return;
    } else {
        alert ("No haz adivinado, te doy otra pista");
        alert(pokemonSecreto.pista2);
        nombrepokemon = prompt ("cual Pokemon es")
        if (nombrepokemon == pokemonSecreto.name) {
            alert("Haz adivinado el Pokemon");
            return;
        } else {
            alert(" no adivinaste, te dare otra pista"); 
            alert (pokemonSecreto.pista3);
            nombrepokemon = prompt("Cual Pokemon es");
            if (nombrepokemon == pokemonSecreto.name) {
                alert("Haz adivinado el pokemon");
                return;
            }else {
                alert ("no haz adivinado el Pokemon");
                return;

            }
            
        }
    };
   
}
