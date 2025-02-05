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
let opcion = parseInt(prompt("Quieres:\n 1: Sumar \n 2: Restar \n 3: Multiplicar \n 4: Dividir"));
let num1 = parseInt(prompt("ingresa el primer numero"));
let num2 = parseInt(prompt("ingresa el segundo numero"));
let resultado; //declarar variable

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

switch (opcion) {
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
console.log(resultado);

while () {
    
}