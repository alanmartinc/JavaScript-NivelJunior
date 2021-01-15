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

// Required
const octavoInput = document.querySelector(".octavo-input");
octavoInput.required = "required";

// Style: Contiene declaraciones de estilo CSS para ser aplicadas al elemento.
const titulo6 = document.querySelector(".titulo6");
titulo6.style.color = "white";
titulo6.style.backgroundColor = "black";
titulo6.style.padding = "30px";

/*
Clases, ClassList y Metodos de ClassList:
*/

// Add: Añade una clase.
const titulo7 = document.querySelector(".titulo7");
titulo7.classList.add("grande");

// Remove: Remueve una clase.
const titulo8 = document.querySelector(".titulo8");
titulo8.classList.remove("grande");

// Item: Devuelve la clase del indice especificado.
const titulo9 = document.querySelector(".titulo9");
// Nos muestra el segundo elemento (Clase: grande).
let valor1 = titulo9.classList.item(1);
document.write(valor1);
document.write("<br><br>");

// Contains: Verifica si ese elemento posee o no, la clase especificada.
const titulo10 = document.querySelector(".titulo10");
// Si tiene la clase grande devuelve TRUE, sino devuelve FALSE.
let valor2 = titulo10.classList.contains("grande");
document.write(valor2);
document.write("<br><br>");

// Replace: Reemplaza una clase por otra.
const titulo11 = document.querySelector(".titulo11");
let valor3 = titulo11.classList.replace("grande","chico");
document.write(valor3);
document.write("<br><br>");

// Toggle: Si no tiene la clase especificada, la agrega, si ya la tiene, la elimina.
const titulo12 = document.querySelector(".titulo12");
// Si la clase existe nos muestra TRUE, sino nos muestra FALSE.
let valor4 = titulo12.classList.toggle("grande", false);
document.write(valor4);
document.write("<br><br>");

/*
Obtención y Modificación de Elementos:
*/

// TextContent: Devuelve el texto de cualquier nodo.
const titulo13 = document.querySelector(".titulo13");
let valor5 = titulo13.textContent;
document.write(valor5);
document.write("<br><br>");

// InnerText: Devuelve el texto visible de un nodo element (YA NO SE USA).
const titulo14 = document.querySelector(".titulo14");
let valor6 = titulo14.innerText;
document.write(valor6);
document.write("<br><br>");

// OuterText: Devuelve el texto que se encuentra en las etiquetas HTML incluidas las etiquetas. (YA NO SE USA).
const titulo15 = document.querySelector(".titulo15");
let valor7 = titulo15.outerText;
document.write(valor7);
document.write("<br><br>");

// InnerHtml: Devuelve el contenido HTML de un elemento.
const titulo16 = document.querySelector(".titulo16");
let valor8 = titulo16.innerHTML;
document.write(valor8);

// OuterHtml: Devuelve el codigo HTML completo del elemento.
const titulo17 = document.querySelector(".titulo17");
let valor9 = titulo17.outerHTML;
document.write(valor9);

// EJEMPLO
alert(valor5);
alert(valor8);
alert(valor9);

/*
Creación de Elementos:
*/

// CreateElements: Reconoce a los elementos en Mayúsculas.
const contenedor = document.querySelector(".contenedor");
const item1 = document.createElement("LI");
console.log(item1);

// CreateTextNode: 
const textoDelItem = document.createTextNode("Este es un item de la lista");
const textoDelParrafo = document.createTextNode("Este es un parrafo");
console.log(textoDelItem);

// AppendChild:
const item2 = document.createElement("P");
item2.appendChild(textoDelParrafo);
console.log(item2);

// CreateDocumentFragment:
const fragmento = document.createDocumentFragment();

for(i=0; i<20; i++){
    const item3 = document.createElement("LI");
    item3.innerHTML = "Este es un item de la lista";
    fragmento.appendChild(item3);
}

contenedor.appendChild(fragmento);

/*
Obtención y modificación de childs (hijos):
*/

// FirstChild: Obtiene el primer hijo.
const contenedor2 = document.querySelector(".contenedor2");
const primerHijo = contenedor2.firstChild;
console.log(primerHijo);

// LastChild: Obtiene el último hijo.
const contenedor3 = document.querySelector(".contenedor3");
const ultimoHijo = contenedor3.lastChild;
console.log(ultimoHijo);

// FirstElementChild: Obtiene el primer elemento hijo.
const contenedor4 = document.querySelector(".contenedor4");
const primerElementoHijo = contenedor4.firstElementChild;
console.log(primerElementoHijo);

// LastElementChild: Obtiene el último elemento hijo.
const contenedor5 = document.querySelector(".contenedor5");
const segundoElementoHijo = contenedor5.lastElementChild;
console.log(segundoElementoHijo);

// ChildNodes: Nos devuelve todos los nodos hijos.
const contenedor6 = document.querySelector(".contenedor6");
const hijos1 = contenedor6.childNodes;
console.log(hijos1);

hijos1.forEach(hijo => console.log(hijo));

// Children: Nos devuelve las etiquetas HTML.
const contenedor7 = document.querySelector(".contenedor7");
const hijos2 = contenedor7.children;
console.log(hijos2);

// In: indice | Of: valor.
for(hijo of hijos2){
    console.log(hijo);
}

/*
Metodos de Childs (hijos):
*/

// ReplaceChild:
const contenedor8 = document.querySelector(".contenedor8");
const parrafo1 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo1 = document.createElement("H2");
h2_nuevo1.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");
contenedor8.replaceChild(h2_nuevo1,h2_antiguo);

// RemoveChild:
const contenedor9 = document.querySelector(".contenedor9");
const parrafo2 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo2 = document.createElement("H2");
h2_nuevo2.innerHTML = "Titulo";

h2_antiguo2 = document.querySelector(".h2");
contenedor9.removeChild(h2_antiguo2);

// HasChildNodes:
const contenedor10 = document.querySelector(".contenedor10");
const parrafo3 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo3 = document.createElement("H2");
h2_nuevo3.innerHTML = "Titulo";

const h2_antiguo3 = document.querySelector(".h2");

let respuesta1 = contenedor10.hasChildNodes();

if(respuesta1){
    document.write("El elemento tiene hijos");
} else {
    document.write("El elemento no tiene hijos");
}

/*
Propiedades de parents (padres):
*/

// ParentElement: Selecciona el padre elemento de un elemento (Busca una etiqueta HTML padre).
const contenedor11 = document.querySelector(".contenedor11");
const parrafo4 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo4 = document.createElement("H2");
h2_nuevo4.innerHTML = "Titulo";

const h2_antiguo4 = document.querySelector(".h2");

console.log(h2_antiguo4.parentElement);

// ParentNode: Selecciona el padre de un elemento (Busca un nodo padre).
const contenedor12 = document.querySelector(".contenedor12");
const parrafo5 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo5 = document.createElement("H2");
h2_nuevo5.innerHTML = "Titulo";

const h2_antiguo5 = document.querySelector(".h2");

console.log(h2_antiguo5.parentNode);

/*
Propiedades de siblings (Hermanos):
*/

// NextSibling:
const contenedor13 = document.querySelector(".contenedor13");
const parrafo6 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo6 = document.createElement("H2");
h2_nuevo6.innerHTML = "Titulo";

const h2_antiguo6 = document.querySelector(".h2");

console.log(h2_antiguo6.nextSibling);

// PreviousSibling:
const contenedor14 = document.querySelector(".contenedor14");
const parrafo7 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo7 = document.createElement("H2");
h2_nuevo7.innerHTML = "Titulo";

const h2_antiguo7 = document.querySelector(".h2");

console.log(h2_antiguo7.previousSibling);

// NextElementSibling:
const contenedor15 = document.querySelector(".contenedor15");
const parrafo8 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo8 = document.createElement("H2");
h2_nuevo8.innerHTML = "Titulo";

const h2_antiguo8 = document.querySelector(".h2");

console.log(h2_antiguo8.nextElementSibling);

// PreviousElementSibling:
const contenedor16 = document.querySelector(".contenedor16");
const parrafo9 = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo9 = document.createElement("H2");
h2_nuevo9.innerHTML = "Titulo";

const h2_antiguo9 = document.querySelector(".h2");

console.log(h2_antiguo9.previousElementSibling);

/*
Nodos - Extras:
*/

// Closest: Seleccionar elemento ascendente más cercano que coincida con nuestro selector.
const div = document.querySelector(".div-3");
console.log(div.closest(".div"));