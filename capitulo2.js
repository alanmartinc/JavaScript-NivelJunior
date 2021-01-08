// Arrays
let frutas = ["banana", "manzana", "frutilla", "naranja"];
document.write(frutas[3] + "<br>");

document.write("<br>");

// Arrays asociativos
let pc1 = {
    nombre: "Alan PC",
    procesador: "Ryzen 5",
    ram: "16GB",
    disco: "1TB"
}

document.write(pc1["nombre"] + "<br>");

document.write("<br>");

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let disco = pc1["disco"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
         el procesador es: <b>${procesador}</b> <br>
         la memoria ram es: <b>${ram}</b> <br>
         el espacio en disco es de: <b>${disco}</b> <br>`

document.write(frase);

document.write("<br>");

// Bucles e iteración
let numeroUno = 0;

// IF = Pregunta una sola vez y ejectuta
if(numeroUno < 10) {
    numeroUno++;
    document.write(numeroUno + "<br>");
}

document.write("<br>");

let numeroDos = 0;

// WHILE = Pregunta y ejectuta siempre
while(numeroDos < 6) {
    numeroDos++;
    document.write(numeroDos + "<br>");
}

document.write("<br>");

let numeroTres = 0;

// DO WHILE = Primero ejecuta el código y después pregunta
do {
    numeroTres++;
    document.write(numeroTres + "<br>");
} while(numeroTres < 6) 

document.write("<br>");

let numeroCuatro = 0;

// Break = Ejecuta el break y termina el bucle
while(numeroCuatro < 1000) {
    numeroCuatro++;
    document.write(numeroCuatro + "<br>");
    if(numeroCuatro == 10) {
        break;
    }
}

document.write("Fin" + "<br>");

document.write("<br>");

// FOR - Declararación e inicialización, condición, aumento / decremento
for(let i=0; i < 6; i++) {
    document.write(i + "<br>");
    if(i == 3) {
        break;
    }
}

document.write("<br>");

for(let x=0; x < 10; x++) {
    if(x == 5) {
        // Salta la iteración y pasa a la siguiente
        continue;
    }
    document.write(x + "<br>");
}

document.write("<br>");

// For In y of
let animales = ["gato", "perro", "conejo"];
animales.edad = 15;

// in nos devuelve la posición en las que esta los elementos
for (animal in animales){
    // Entra al buble animales del elemento animal
    document.write(animal + "<br>");
}

document.write("<br>");

// of nos muestra el valor de los elementos
for (animal of animales){
    document.write(animal + "<br>");
}

document.write(animales.edad + "<br>");

document.write("<br>");

// Label: nos permite asociar un buble a un nombre
array1 = ["Daniela", "María", "Agustina"];
array2 = ["pedro", "Marcelo", array1, "Alan"];

for(array in array2) {
    if(array == 2) {
        for(let array of array1) {
            document.write(array + "<br>");
        }
    } else {
        document.write(array2[array] + "<br>");
    }
}

document.write("<br>");

// Funciones: Agarramos el código de nuestro programa para reutilizarlo nuevamente
function saludar(){
    respuesta = prompt("¡Hola Alan! ¿Como fue tu día?");
    if(respuesta == "bien") {
        alert("Me alegro!");
    } else {
        alert("Una pena");
    }
}

saludar();

// Funciones asignandolas en variables
saludar = function() {
        respuesta = prompt("¡Hola Alan! ¿Como fue tu día?");
        if(respuesta == "bien") {
            alert("Me alegro!");
        } else {
            alert("Una pena");
        }
}

saludar();

// Return: Finaliza la función
function bienvenido(){
    alert("hola");
    return "La función se ejecutó correctamente" + "<br>";
}

let saludo = bienvenido();

document.write(saludo);

document.write("<br>");

// Parametros
function suma(num1, num2) {
    let res = num1 + num2;
    document.write(res);
}

suma(2,3);

document.write("<br>");

suma(5,5);

document.write("<br>");
document.write("<br>");

// Funcion común
function saludando(nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estás?`;
    document.write(frase);
    document.write("<br>");
}

saludando("Alan");

// Funcion con Const
const saludito = function(nombre) {
    let frase = `¡Hola ${nombre}! ¿Como estás?`;
    document.write(frase);
    document.write("<br>");
}

saludito("Lucas");

// Funcion con flecha: Si tiene un solo parametro se le pueden sacar los parentesis y las llaves
const saludardo = nombre => document.write(`¡Hola ${nombre}! ¿Como estás?`);

saludardo("Daniel");