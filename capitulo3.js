// POO - Programación Orientada a Objetos

/* 
Clases: Crean objetos.
Objetos: Resultado de las clases.
Atributo: Particularidad, propiedades, caracteristica que tiene nuestro objeto.
Metodo: Cosas que puede hacer nuestro objeto.
Constructor: Función obligatoria, nos contruye las propiedades del objeto.
Instanciación: Finalizamos todo.
*/

class animal {
    constructor(especie,edad,color){
        // This = Objeto
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
    // Polimorfismo:
    ladrar() {
        if(this.especie == "perro") {
            document.write("¡Waw!" + "<br>");
        } else {
            document.write("No puede ladrar, ya que es un " + this.especie + "<br>");
        }
    }
}

const perro = new animal("perro",5,"negro");
const gato = new animal("gato",8,"gris");
const conejo = new animal("conejo",3,"blanco");

// document.write(perro.info + "<br>");
// document.write(gato.info + "<br>");
// document.write(conejo.info + "<br>");

perro.verInfo();
perro.ladrar();

document.write("<br>");

gato.verInfo();
gato.ladrar();

document.write("<br>");

conejo.verInfo();
conejo.ladrar();

/* 
Abstracción: Reduce lo menos posible al objeto.
Modularidad: Capacidad de resolver un problema grande separandolo por partes.
Encapsulamiento: Consiste en hacer que todos los datos esten privados.
Polimorfismo: Consiste en ver como el objeto se comporta de manera distinta ante el mismo metodo.

Herencia: Se utiliza la palabra reservada extends.
Metodos estaticos: Se utiliza la palabra reservada static.
Metodos accesores: Se utiliza la palabra reservada Getters, Setters.
*/

document.write("<br>");

// Herencia:
class Insectos {
    constructor(especie,tamaño,color){
        // This = Objeto
        this.especie = especie;
        this.tamaño = tamaño;
        this.color = color;
        this.info = `Soy una ${this.especie}, mido ${this.tamaño} Cms y soy de color ${this.color}`;
    }
    verInfo() {
        document.write(this.info + "<br>");
    }
}

class Araña extends Insectos {
    constructor(especie,tamaño,color,patas) {
        super(especie,tamaño,color);
        this.patas = null;
    }

    // Metodo estatico: no necesita que la clase se defina para ser creado.
    static ojos() {
        document.write("¡Tengo Ojos!" + "<br>");
    }

    // Metodo Setters: Modifica o define un valor.
    set setPatas(nuevoValor){
        this.patas = nuevoValor;
    }

    // Metodo Getters: Obtiene un valor.
    get getPatas() {
        return this.patas;
    }
}

const araña = new Araña("araña",6,"rojo","8");
const oruga = new Insectos("oruga",4,"verde");
const hormiga = new Insectos("hormiga",2,"negro");


araña.verInfo();
Araña.ojos();
oruga.verInfo();
hormiga.verInfo();
araña.setPatas = 8;

document.write(araña.patas);
document.write("<br>");
document.write(araña.getPatas);
document.write("<br>");
document.write("<br>");

// Historia de Cofla 3 - Soluciones
class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        } else {
            alert("el celular está apagado");
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b></br>
        Memoria Ram: <b>${this.ram}</b></br>
        `;
    }
}

class celularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce) {
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolución de camara extra: ${this.resolucionDeCamaraExtra}`;
    }
}

celular1 = new Celular("rojo","150g","5'","hd","1GB");
celular2 = new Celular("negro","160g","5.1'","full hd","2GB");
celular3 = new Celular("blanco","170g","5.2'","full hd","3GB");

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`);


celular1 = new celularAltaGama("amarillo","180g","5.3","4k","4GB","full hd");
celular2 = new celularAltaGama("gris","190g","5.4","4k","5GB","hd");

document.write(`
    ${celular1.infoAltaGama()} <br><br>
    ${celular2.infoAltaGama()} <br><br>
`);

class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuación: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("18.000","4 estrellas","800mb");
app3 = new App("20.000","5 estrellas","700mb");
app4 = new App("22.000","4 estrellas","600mb");
app5 = new App("24.000","5 estrellas","500mb");
app6 = new App("26.000","4 estrellas","400mb");
app7 = new App("28.000","5 estrellas","300mb");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()}
`);