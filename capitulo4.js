// Métodos de cadenas

// Concat: Junta dos o mas cadenas y retorna una nueva
let cadena1 = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena1.concat(cadena2);
document.write(resultado);
document.write("<br>");

// StartsWith: Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
let cadena3 = "cadena de prueba";
let cadena4 = "cadena";

resultado = cadena3.startsWith(cadena4);
document.write(resultado);
document.write("<br>");

// EndsWith: Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
let cadena5 = "cadena de prueba";
let cadena6 = "prueba";

resultado = cadena5.endsWith(cadena6);
document.write(resultado);
document.write("<br>");

// Includes: Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
let cadena7 = "cadena de prueba";
let cadena8 = "de";

resultado = cadena7.includes(cadena8);
document.write(resultado);
document.write("<br>");

// IndexOf: Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
let cadena9 = "cadena de prueba";
// Si nos devuelve -1 es porque no lo encontro
let cadena10 = "prueba";

resultado = cadena9.indexOf(cadena10);
document.write(resultado);
document.write("<br>");

// LastIndexOf: Devuelve el indice del ultimo caracter de la cadena, si no existe, devuelve -1.
let cadena11 = "cadena de prueba prueba prueba";
// Si nos devuelve -1 es porque no lo encontro
let cadena12 = "prueba";

resultado = cadena11.lastIndexOf(cadena12);
document.write(resultado);
document.write("<br>");

// Otro ejemplo de LastIndexOf:
let cadena13 = "cadena de prueba prueba prueba";
let cadena14 = "prueba";

resultado = cadena13.lastIndexOf(cadena14);
document.write(cadena13[24] + cadena13[25] + cadena13[26] + cadena13[27] + cadena13[28] + cadena13[29]);
document.write("<br>");

// PadStart: (Propuesta de ECMA) Rellenar cadena al principio con los caracteres deseados.
let cadena15 = "abc";
let cadena16 = "";

// Me rellena tres caracteres "a" hasta formar seis con "abc".
resultado = cadena15.padStart(6, "a");
document.write(resultado);
document.write("<br>");

// PadEnd: (Propuesta de ECMA) Rellenar cadena al final con los caracteres deseados.
let cadena17 = "abc";
let cadena18 = "";

// Me rellena tres caracteres "a" hasta formar seis con "abc".
resultado = cadena17.padEnd(6, "a");
document.write(resultado);
document.write("<br>");

// Repeat: Devuelve la misma cadena pero repetida la cantidad.
let cadena19 = "abc ";
let cadena20 = "";

resultado = cadena19.repeat(2);
document.write(resultado);
document.write("<br>");

// Split: Divide la cadena como le pidamos.
let cadena21 = "Hola como estas";

resultado = cadena21.split("como");
document.write(resultado);
document.write("<br>");

// Substring: Nos devuelve lo que seleccionamos
let cadena22 = "ABCDEFG";

// Primer parametro es donde empieza y el segundo donde termina.
resultado = cadena22.substring(0,3);
document.write(resultado);
document.write("<br>");

// ToLowerCase: Convierte una cadena en minúscula.
let cadena23 = "ABCDEFG";

resultado = cadena23.toLowerCase();
document.write(resultado);
document.write("<br>");

// ToUpperCase: Convierte una cadena en mayúscula.
let cadena24 = "abcdefg";

resultado = cadena24.toUpperCase();
document.write(resultado.le);
document.write("<br>");

// ToString: Convierte una cadena en string.
let cadena25 = ["pedro","matias"];

resultado = cadena25.toString();
document.write(resultado[0]);
document.write("<br>");

// Trim: Elimina los espacios en blanco.
let cadena26 = "   pedro   ";

resultado = cadena26.trim();
// Propiedad length: Muestra la cantidad de caracteres.
document.write(resultado.length);
document.write("<br>");

// TrimEnd: Elimina los espacios en blanco al final de una cadena.
let cadena27 = "   pedro   ";

resultado = cadena27.trimEnd();
document.write(resultado.length);
document.write("<br>");

// TrimStart: Elimina los espacios en blanco al comienzo de una cadena.
let cadena28 = "   pedro   ";

resultado = cadena28.trimStart();
document.write(resultado.length);
document.write("<br>");