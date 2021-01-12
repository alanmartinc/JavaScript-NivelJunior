// Funciones de Registro:

// Clear: Limpia la consola.
console.clear();

// Assert: Aparece un mensaje de error en la consola si la afirmación es falta. Si la afirmación es verdadera, no aparecerá nada. (NO ESTANDAR).
console.assert(5<4);

// Error: Muestra un mensaje de error en la consola web.
console.error("Che capo ¿Que hiciste?");

// Info: Emite un mensaje informativo a la consola web. En firefox y Chrome, se muestra un pequeño icono "i" junto a estos elementos en el registro de la consola web.
console.info("Este es un mensaje informativo");

// Log: Muestra un mensaje en la consola web (o del intérprete JavaScript).
console.log("Este es un mensaje de depuración");

// Table: Esta función toma argumento obligatorio: data, que debe ser un array o un objeto, y un parámetro adicional: colums y nos muestra una tabla en consola.
console.table([1,2,3,4,5,6,7,8,9]);

// Warn: Imprime un mensaje de advertecnia en la consola wbe.
console.warn("Che capo, venis bien, pero cuídado porque...");

// Dir: Despliega una lista interactiva de las propiedades del objeto JavaScript especificado. (NO ESTANDAR).
console.dir([1,2,3,4,5,6,7,8,9]);

// Funciones de Conteo:

// Count: Registra un número de veces que se llama a count(). Esta función toma como argumento opcional una etiqueta.
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();
console.count();

// CountReset: Resetea el contador console.count().
console.countReset();

// Funciones de Agrupación:

// Group: Crea un nuevo grupo en línea en el registro de la consola web.
console.group("bienvenida");
console.log("Hola");
console.group("despedida");
console.log("Chau");

// GrupEnd: Remueve un grupo en linea en el registro de la consola web.
console.groupEnd();
console.groupEnd();

// GroupCollapsed: Crea un grupo en linea pero contraido, el usuario debe expandirlo para verlo.
console.groupCollapsed("bienvenida");
console.groupEnd();

// Funciones de Temporización:

// Time: Inicia un temporizado.
console.time();

// TimeEnd: Registra el valor actual de un temporizado.
console.timeEnd();

// TimeLog: Detiene un temporizador.
console.timeLog();

// Historia de Cofla 5 - Soluciones
const materias = {
    // Porcentaje de asistencia, promedio, cantidad de trabajos practicos.
    fisica: [90,6,3,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencia = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencia >= 90){
            console.log("%c Asistencias en orden","color:green");
        } else {
            console.log("%c Falta de asistencias","color:red");
        }

        if(promedio >= 7){
            console.log("%c Promedio en orden","color:green");
        } else {
            console.log("%c Promedio desaprobado","color:red");
        }

        if(trabajos >= 3){
            console.log("%c Trabajos practicos en orden","color:green");
        } else {
            console.log("%c Faltan trabajos practicos","color:red");
        }
    }
}

aprobo();

let trabajo = "240 minutos de trabajo";
let descanso = "10 minutos de descanso";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos";
let homework = "30 minutos tareas de la casa";


console.log("TAREAS");

for(var i=0; i<14; i++){
    if(i == 0){
        console.group("Semana 1");
    }

    console.groupCollapsed("dia" + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();

    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }  
}

console.groupEnd();
console.groupEnd();