// Declarar variables
/* 
var: Alcance global.
let: Nos limita el alcance del bloque.
const: No puede cambiar su valor (Se debe declarar e inicializar en la misma linea).
*/

// Variable
recipiente = "papel";
alert(recipiente);

// Tipos de datos
string = "cadena de texto";
number = 24;
booleano = true;

// Casos especiales de datos
/* 
undefined: Existe el valor en el programa pero no esta definido.
null: Existe el valor en el programa y esta definida.
NaN: Not a number.
*/

// Tipos de variables
let numero1, numero2, numero3;

numero1 = 2;
numero2 = 4;
numero3 = 6;

console.log(numero1, numero2, numero3);

// Pedir datos con prompt
let nombre = prompt("¿Cual es tu nombre?");
let edad = prompt("¿Cual es tu edad?");

console.log(nombre + " tiene " + edad + " años");

// Operadores de asignación y aritméticos 
let numero4 = 10;

numero4 += 5;

document.write(numero4);

// Decremento
numero5 = 10;

numero5--

console.log(numero5);

// Exponenciación
numero6 = 2;
numero7 = 4;

resultado = numero6**numero7;

console.log(resultado);

// Concatenación
saludo = "¡Hola Alan!";
pregunta = "¿Como es tu nombre?";

frase = ("<br>") + saludo + " " + pregunta;

document.write(frase);

// Concat (Funciona para cadenas de textos / string)
saludo1 = "¡Hola Lucas!";
pregunta1 = "¿Como es tu apellido?";

frase1 = ("<br>") + saludo1.concat(pregunta1);

document.write(frase1);

// Backticks
saludo2 = "Alan";
pregunta2 = 24;

frase2 = ("<br>") + `${saludo2} Tiene ${pregunta2} años`;

document.write(frase2);

// Operadores intermedios (Lógicos - Comparación)
/* 
== Iguales
=== Estrictamente iguales
*/
let numero8 = 1;
let numero9 = 2;
let texto = "texto 1";
let texto2 = "1";

console.log(numero8 != numero9);
console.log(texto2 === numero8);

let numero10 = 1;
let numero11 = 2;

console.log(numero10 < numero11);

// Si cualquiera de las dos es falsa entonces todo es falso
num1 = 12;
num2 = 24;

afirmacion1 = num1 > num2;
afirmacion2 = num1 != num2;

console.log(afirmacion1 && afirmacion2);

// Si cualquiera de las dos es verdadera entonces todo es verdadero
num3 = 12;
num4 = 24;

afirmacion3 = num3 > num4;
afirmacion4 = num3 != num4;

console.log(afirmacion3 || afirmacion4);

// Me devuelve lo contrario (!)
num5 = 12;
num6 = 24;

afirmacion5 = num5 < num6;
afirmacion6 = num5 != num6;

console.log(!afirmacion5);

// Condicionales
nombre = "alan";
apellido = "cabot";

if (nombre == "lucas") {
    console.log("Hola " + nombre);
} else if (apellido === "henriquez") {
    console.log("Hola " + apellido);
} else {
    console.log("El nombre no coincide");
}

// Historia de Cofla 1 - Soluciones
dineroCofla = prompt("cuanto dinero tienes cofla?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert("Comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert("Comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert("Comprate el helado de heladix");
    alert("y te sobran " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert("Comprate el helado de heladovich");
    alert("y te sobran " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert("Comprate el helado de helardo");
    alert("y te sobran " + (dineroCofla - 1.8));
} else if(dineroCofla >= 2.9) {
    alert("Helado de confites");
    alert("y te sobran " + (dineroCofla - 2.9));
} else {
    alert("Lo siento, no te alcanza");
}