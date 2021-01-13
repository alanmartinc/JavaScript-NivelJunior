/* 
DOM: document object model
Es una interfaz que contiene todos los objetos estandares que nos permiten representar un documento html,xml o xhtml.
*/ 

// Nodo: Un nodo en el DOM es cualquier etiqueta del cuerpo, como un párrafo, el mismo body o incluso las etiquetas de una lista.
// Document: El nodo document es el nodo raiz, a partir del cual derivan el resto de nodos.
// Element: Nodos definidos por etiquetas HTML.
// Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
// Attribute: Los atributos de las etiquetas definen nodos, (En JavaScript no los veremos como nodos, sino como información asociada al nodo de tipo element).
// Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos HTML generan nodos.

/*
Document: Metodos de Selección de elementos.
*/

// document.getElementById: Selecciona un elemento por ID.
// getElementsByTagname: Selecciona todos los elementos que coincidan con el nombre de la etiqueta especifica.
// querySelector: Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// querySelectorAll: Devuelve todos los elementos que coincidan con el grupo especificado de selectores.

primero = document.getElementById("#primero");
document.write(primero);
document.write("<br><br>");

segundo = document.getElementsByTagName("p");
// Devuelve lista de elementos - Collection
document.write(segundo);
document.write("<br><br>");

tercero = document.querySelector(".tercero");
document.write(tercero);
document.write("<br><br>");

cuarto = document.querySelectorAll(".cuarto");
document.write(cuarto[0]);
document.write("<br><br>");

/*
Metodos para Definir, Obtener y Eliminar valores de atributos.
*/

// setAttribute: Modifica el valor de un atributo.
const rangoEtario = document.querySelector(".rangoEtario");
// Primer parametro: Lo que queremos modificar.
// Segundo parametro: Nuevo valor.
rangoEtario.setAttribute("type", "text");

// getAttribute: Obtiene el valor de un atributo.
valorDelAtributo = rangoEtario.getAttribute("type");
document.write(valorDelAtributo);
document.write("<br><br>");

// removeAttribute: Remueve el valor de un atributo.
valorDelAtributo = rangoEtario.removeAttribute("type");
document.write(valorDelAtributo);

/*
Atributos Globales:
*/

// ContentEditable: Indica si el elemento puede ser moficable por el usuario (bool).
const titulo1 = document.querySelector(".titulo1");
titulo1.setAttribute("contentEditable","true");

// Dir: Indica la direccionalidad del texto.
const titulo2 = document.querySelector(".titulo2");
titulo2.setAttribute("dir","rtl");

// Hidden: Indica si el elemento aún no es, o ya no es, relevante.
const titulo3 = document.querySelector(".titulo3");
titulo3.removeAttribute("hidden");

// TabIndex: Indica si el elemento puede obtener un focus de input.
const titulo4 = document.querySelector(".titulo4");
titulo4.setAttribute("tabindex","0");

// Title: Contiene un texto con información relacionada al elemento al que pertenece.
const titulo5 = document.querySelector(".titulo5");
titulo5.setAttribute("title","jajajaja xD");

/*
Atributos de Inputs:
*/

// ClassName
const primerInput = document.querySelector(".primer-input");
document.write("<br><br>");
document.write(primerInput.className);

// Value
const segundoInput = document.querySelector(".segundo-input");
document.write("<br><br>");
document.write(segundoInput.value);

// Type
const tercerInput = document.querySelector(".tercer-input");
document.write("<br><br>");
document.write(tercerInput.type = "range");

// Accept
const cuartoInput = document.querySelector(".cuarto-input");
document.write("<br><br>");
document.write(cuartoInput.accept = "image/png");

// Minlenght
const sextoInput = document.querySelector(".sexto-input");
sextoInput.minLength = 4;
document.write("<br><br>");

// PlaceHolder
const septimoInput = document.querySelector(".septimo-input");
septimoInput.placeholder = "Hola";
document.write("<br><br>");

// Required
const octavoInput = document.querySelector(".octavo-input");
octavoInput.required = "required";
document.write("<br><br>");

// Style: Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
const titulo6 = document.querySelector(".titulo6");
titulo6.style.color = "white";
titulo6.style.backgroundColor = "black";
titulo6.style.padding = "30px";
document.write("<br><br>");
