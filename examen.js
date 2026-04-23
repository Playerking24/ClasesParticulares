// declarame variable de tipo numero, 
// dos variables, luego crea una tercera y 
// haz suma, resta, multiplicacion y division 
// con las dos primeras variables, 
// luego muestra el resultado en consola.

let one = 1;
let six = 6;

let resultado = one + six;
console.log("Suma: " + resultado);
resultado = six - one;
console.log("Resta: " + resultado);
resultado = six * one;
console.log("Multiplicacion: " + resultado);
resultado = six / one;
console.log("Division: " + resultado);

/* declarar una variable de tipo string, 
luego crea una segunda variable y haz una 
concatenacion de las dos variables, luego 
muestra el resultado en consola. */
let saludo = "Hola, buenas tardes, bienvenidos a el curso de ";
let nombreCurso = "Informatica";
console.log(saludo + nombreCurso);

let num = 5;
let tipoString = "Son palabras o mensajes";
let verOFal = true;
let numDeci = 2.14;

let nombres = ["nick", "pablo", "juan", "carlos"];
let personaje = {
    name: "Kris",
    genero: "Masculino",
    altura: 175
}

let matriz = [[],[],[]][[],[],[]];

// Actividad de hoy 23/04/2026
/*
crear un saludo personalizado, declarando dos variables.
la primera variable debe ser un string con el saludo,
la segunda variable debe ser un string con el nombre de la persona a saludar,
luego haz una concatenacion de las dos variables y muestra el resultado en consola.
*/

let saludos = "Hola"; // correcto
let nombre_persona = " Kris"; // correcto, sugerencia con el nombbre de la variable, no usar guion bajo, usar camelCase, ejemplo: nombrePersona.
console.log(saludos + nombre_persona);

/*
Contar una historia, declarando 5 variables.
declara la variables historia, "Habia una vez un [sustantivo], que vivia en un [adjetivo]
[lugar]. Un día decidió salir a [verbo] el bosque cercano a su casa. Allí encontró un [sustantivo2] 
mágico que le concedió un deseo. El [sustantivo] pidió ser el ser más [adjetivo2] del mundo."
declara las variables sustantivo, adjetivo, lugar, verbo, sustantivo2, adjetivo2 y asignales un valor.
concatena las variables en la variable historia y luego imprime por consola la variable historia.
*/