// Métodos de cadenas

// Concat: Junta dos o mas cadenas y retorna una nueva
let cadena1 = "cadena de prueba";
let cadena2 = " cadena 2";

resultado = cadena1.concat(cadena2);
document.write(resultado);
document.write("<br><br>");

// StartsWith: Si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
let cadena3 = "cadena de prueba";
let cadena4 = "cadena";

resultado = cadena3.startsWith(cadena4);
document.write(resultado);
document.write("<br><br>");

// EndsWith: Si una cadena termina con los caracteres de otra cadena, devuelve true, sino devuelve false.
let cadena5 = "cadena de prueba";
let cadena6 = "prueba";

resultado = cadena5.endsWith(cadena6);
document.write(resultado);
document.write("<br><br>");

// Includes: Si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.
let cadena7 = "cadena de prueba";
let cadena8 = "de";

resultado = cadena7.includes(cadena8);
document.write(resultado);
document.write("<br><br>");

// IndexOf: Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1.
let cadena9 = "cadena de prueba";
// Si nos devuelve -1 es porque no lo encontro
let cadena10 = "prueba";

resultado = cadena9.indexOf(cadena10);
document.write(resultado);
document.write("<br><br>");

// LastIndexOf: Devuelve el indice del ultimo caracter de la cadena, si no existe, devuelve -1.
let cadena11 = "cadena de prueba prueba prueba";
// Si nos devuelve -1 es porque no lo encontro
let cadena12 = "prueba";

resultado = cadena11.lastIndexOf(cadena12);
document.write(resultado);
document.write("<br><br>");

// Otro ejemplo de LastIndexOf:
let cadena13 = "cadena de prueba prueba prueba";
let cadena14 = "prueba";

resultado = cadena13.lastIndexOf(cadena14);
document.write(cadena13[24] + cadena13[25] + cadena13[26] + cadena13[27] + cadena13[28] + cadena13[29]);
document.write("<br><br>");

// PadStart: (Propuesta de ECMA) Rellenar cadena al principio con los caracteres deseados.
let cadena15 = "abc";
let cadena16 = "";

// Me rellena tres caracteres "a" hasta formar seis con "abc".
resultado = cadena15.padStart(6, "a");
document.write(resultado);
document.write("<br><br>");

// PadEnd: (Propuesta de ECMA) Rellenar cadena al final con los caracteres deseados.
let cadena17 = "abc";
let cadena18 = "";

// Me rellena tres caracteres "a" hasta formar seis con "abc".
resultado = cadena17.padEnd(6, "a");
document.write(resultado);
document.write("<br><br>");

// Repeat: Devuelve la misma cadena pero repetida la cantidad.
let cadena19 = "abc ";
let cadena20 = "";

resultado = cadena19.repeat(2);
document.write(resultado);
document.write("<br><br>");

// Split: Divide la cadena como le pidamos.
let cadena21 = "Hola como estas";

resultado = cadena21.split("como");
document.write(resultado);
document.write("<br><br>");

// Substring: Nos devuelve lo que seleccionamos
let cadena22 = "ABCDEFG";

// Primer parametro es donde empieza y el segundo donde termina.
resultado = cadena22.substring(0,3);
document.write(resultado);
document.write("<br><br>");

// ToLowerCase: Convierte una cadena en minúscula.
let cadena23 = "ABCDEFG";

resultado = cadena23.toLowerCase();
document.write(resultado);
document.write("<br><br>");

// ToUpperCase: Convierte una cadena en mayúscula.
let cadena24 = "abcdefg";

resultado = cadena24.toUpperCase();
document.write(resultado.le);
document.write("<br><br>");

// ToString: Convierte una cadena en string.
let cadena25 = ["pedro","matias"];

resultado = cadena25.toString();
document.write(resultado[0]);
document.write("<br><br>");

// Trim: Elimina los espacios en blanco.
let cadena26 = "   pedro   ";

resultado = cadena26.trim();
// Propiedad length: Muestra la cantidad de caracteres.
document.write(resultado.length);
document.write("<br><br>");

// TrimEnd: Elimina los espacios en blanco al final de una cadena.
let cadena27 = "   pedro   ";

resultado = cadena27.trimEnd();
document.write(resultado.length);
document.write("<br><br>");

// TrimStart: Elimina los espacios en blanco al comienzo de una cadena.
let cadena28 = "   pedro   ";

resultado = cadena28.trimStart();
document.write(resultado.length);
document.write("<br><br>");

// Metodos de Arrays - Transformadores:

// Pop: Elimina el último elemento de un array y lo devuelve.
let nombres1 = ["pedro","maria","jorge"];

document.write("Array Original: <b>" + nombres1 + "</b><br>");

// Te mostra cual fue el ultimo elemento eliminado.
let respuesta1 = nombres1.pop();

document.write("Elemento removido: <b style='color:red'>" + respuesta1 + "</b><br>");
document.write("Resultado: <b>" + nombres1 + "</b>");
document.write("<br><br>");

// Shift: Elimina el primer elemento de un array y lo devuelve.
let nombres2 = ["pedro","maria","jorge"];

document.write("Array Original: <b>" + nombres2 + "</b><br>");

// Te mostra cual fue el primer elemento eliminado.
let respuesta2 = nombres2.shift();

document.write("Elemento removido: <b style='color:red'>" + respuesta2 + "</b><br>");
document.write("Resultado: <b>" + nombres2 + "</b>");
document.write("<br><br>");

// Push: Agrega un elemento al array al final de la lista.
let nombres3 = ["pedro","maria","jorge"];

document.write(nombres3 + "<br>");

let respuesta3 = nombres3.push("juancito","robert");

document.write(nombres3 + "<br>");
document.write(respuesta3);
document.write("<br><br>");

// Reverse: Invierte el orden de los elementos de un array.
let numeros1 = [1,2,3,4,5];

document.write(numeros1 + "<br>");

numeros1.reverse();

document.write(numeros1);
document.write("<br><br>");

// Unshift: Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array.
let numeros2 = [3,4,5];

document.write(numeros2 + "<br>");

// Agrega el 0,1 y 2.
numeros2.unshift(0,1,2);

document.write(numeros2);
document.write("<br><br>");

// Sort: Ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.
let numeros3 = [1,3,2,4,6,5,7,9,8];

document.write(numeros3 + "<br>");

numeros3.sort();

document.write(numeros3);
document.write("<br><br>");

// Splice: Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
let numeros4 = ["Hola","como","estas","Alan","?"];

document.write(numeros4 + "<br>");

// Empieza en la posición 1, elimina 3 elementos y se puede agregar nuevos elementos.
// Para agregar al principio hay que poner 0 en la posición y para agregar al final -1.
numeros4.splice(1,3,"bien","y vos");

document.write(numeros4);
document.write("<br><br>");

// Metodos de Arrays - Accesores:

// Join: Une todos los elementos de una matriz (u objetivo similar) en una cadena y la devuelve.
let numeros5 = ["manzana","pera","frutilla","naranja"];

document.write(numeros5 + "<br>");

// Podemos utilizar el separador que queramos 
let respuesta4 = numeros5.join(" - ");

// Cadena de texto
document.write(respuesta4);
document.write("<br><br>");

// Slice: Devuelve una parte del array dentro de un nuevo array empezando de inicio hasta fin (fin no incluido).
let numeros6 = ["manzana","pera","frutilla","naranja"];

document.write(numeros6 + "<br>");

// Desde la posición 0 hasta el 2 y el ultimo no se incluye (Posición - Cantidad).
// Si seleccionamos -1 nos muestra todos menos el último.
// Si seleccionamos -2 nos saca los dos últimos.
let respuesta5 = numeros6.slice(0,2);

document.write(respuesta5);
document.write("<br><br>");

// Metodos de Arrays - Repetición:

// Filter: Crea un nuevo array con todos los elementos que cumplan la condición.
let numeros7 = ["manzana","frutilla","naranja","pomelo","banana"];

// Si tiene más de 6 caracteres los agrega.
respuesta6 = numeros7.filter(numero => numero.length > 6);

document.write(respuesta6);
document.write("<br><br>");

// Objeto Math - Básico - Metodos:

// sqrt: Devuelve la raíz cuadrada positiva de un número.
numero1 = Math.sqrt(25);

document.write(numero1);
document.write("<br><br>");

// Cbrt: Devuelve la raíz cúbica de un número.
numero2 = Math.cbrt(27);

document.write(numero2);
document.write("<br><br>");

// Max: Devuelve el mayor.
numero3 = Math.max(4,1,6,12,63,243,90);

document.write(numero3);
document.write("<br><br>");

// Min: Devuelve el menor.
numero4 = Math.min(4,1,6,12,63,243,90);

document.write(numero4);
document.write("<br><br>");

// Random: Devuelve un número pseudo-aleatorio entre 0 y 1.
// Si queremos tener numeros entre 0 y 100:
numero5 = Math.random()*100;
numero5 = numero5.toString();
num = numero5[0] + numero5[1];

if(numeros5[1] == "."){
    num = numero[0];
}

document.write(num);
document.write("<br><br>");

// Round: Devuelve el valor de un número redondeado al número entero más cercano.
let numero6 = Math.random()*100;
numero6 = Math.round(numero6)

document.write(numero6);
document.write("<br><br>");

// Floor: Devuelve el mayor entero menor que o igual a un número.
let numero7 = Math.random()*99;

// Siempre redondea para abajo.
// Mostrar los numeros del 1 al 99
numero7 = Math.floor(numero7 + 1)

document.write(numero7);
document.write("<br><br>");

// Fround: Devuelve la representación flotante de precisión simple más cercana de un número.
// Siempre redondea a 15.
let numero8 = Math.fround(9.4565656323532656419699999);

document.write(numero8);
document.write("<br><br>");

// Trunc: Devuelve la parte entero del número x, la eliminación de los dígitos fraccionarios.
// Elimina los decimales.
let numero9 = Math.trunc(9.9);

document.write(numero9);
document.write("<br><br>");

// Objeto Math - Básico - Propiedades:

// PI: Ratio de la circunferencia de un circulo respecto a su diámetro, aproximadamente 3.14159.
// Toma la representación flotante de precisión simple más cercana de un número.
let numero10 = Math.PI;

document.write(numero10);
document.write("<br><br>");

// SQRT1_2: Raiz cuadrada de 1/2; equivalente, 1 sobre la raiz.
// Toma la representación flotante de precisión simple más cercana de un número.
let numero11 = Math.SQRT1_2;

document.write(numero11);
document.write("<br><br>");

// SQRT2: Raiz cuadrada de 2, aproximadamente 1.414.
// Toma la representación flotante de precisión simple más cercana de un número.
let numero12 = Math.SQRT2;

document.write(numero12);
document.write("<br><br>");

// E: Constante de Euler, la base de los logaritmos naturales, aproximadamente 2.718.
let numero13 = Math.E;

document.write(numero13);
document.write("<br><br>");

// LN2: Logaritmo natural de 2, aproximadamente 0.693.
let numero14 = Math.LN2;

document.write(numero14);
document.write("<br><br>");

// LN10: Logaritmo natural de 10, aproximadamente 2.303.
let numero15 = Math.LN10;

document.write(numero15);
document.write("<br><br>");

// LOG2E: Logaritmo de E con base 2, aproximadamente 1.443.
let numero16 = Math.LOG2E;

document.write(numero16);
document.write("<br><br>");

// LOG10E: Logatirmo de E con base 10, aproximadamente 0.434.
let numero17 = Math.LOG10E;

document.write(numero17);
document.write("<br><br>");

// Historia de Cofla 4 - Soluciones
class Calculadora {
    constructor(){

    }
    sumar (num1,num2) {
        return parseInt(num1) + parseInt(num2);
    }
    restar (num1,num2) {
        return parseInt(num1) - parseInt(num2);
    }
    dividir (num1,num2) {
        return parseInt(num1) / parseInt(num2);
    }
    multiplicar (num1,num2) {
        return parseInt(num1) * parseInt(num2);
    }
    potenciar(num,exp){
        let numero = num;
        for(var i = 1; i < exp; i++) {
            numero = numero * num;
        }
        return numero;
    }
    raizCuadrada(num){
        return Math.sqrt(num);
    }
    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: Potenciación, 6: Raíz cuadrada, 7: Raíz cúbica");

if(operacion == 1) {
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 5) {
    let numero1 = prompt("Primer numero a potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 6) {
    let numero1 = prompt("Conocer la raíz cuadrada de:");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`Tu resultado es ${resultado}`);
} else if(operacion == 7) {
    let numero1 = prompt("Conocer la raíz cúbica de:");
    resultado = calculadora.raizCubica(numero1);
    alert(`Tu resultado es ${resultado}`);
} else {
    alert("No se ha encontrado la operación")
}

const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    }
    if(materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){
        let profesor = informacion[0][0];
        alumnos = informacion[0];
        alumnos.shift();
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
                        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
                    `);
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if(informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push(" " + info);
        }
    }
    return `<b style='color:blue'>${alumno}</b> está en <b>${cantidadTotal} clases:</b><b style='color:green'>${clasesPresentes}</b><br></br>
            `;
}

const inscribir = (alumno, materia)=>{
    personas = materias[materia];
    if(personas.length >= 21){
        document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas<br><br>`);
    } else {
        personas.push(alumno);
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
            }
        } else if (materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
            }
        } else if (materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
            }
        }
        document.write(`¡Felicidades ${alumno}! te has inscripto a ${materia} correctamente.<br><br>`)
    }
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("pedro"));

document.write(materias['fisica'] + "<br>");

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("Lucas","fisica");
inscribir("Ramiro","fisica");
inscribir("Nicolas","fisica");
inscribir("Emanuel","fisica");
inscribir("Mauricio","fisica");
inscribir("Alan","fisica");
inscribir("Tobias","fisica");
inscribir("Lautaro","fisica");
inscribir("Bruno","fisica");
inscribir("Thomas","fisica");
inscribir("Fede","fisica");
inscribir("Gastón","fisica");
inscribir("Emiliano","fisica");
inscribir("Martín","fisica");
inscribir("Jorge","fisica");
inscribir("José","fisica");

document.write("<br>" + materias['fisica']);