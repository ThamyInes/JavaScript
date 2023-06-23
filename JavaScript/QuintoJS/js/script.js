/*
· If - else -> también existe otra esctructura de control de flujo switch-case
· Su funcion es. según el parametro o valor que contenga, puede realizar una serie de opciones: Ej:
- switch(expression) {
    case x:
        //code block
        break; //para salir del switch y no seguir evaluando los siguientes casos 
    case y:
        // code block
        break;
        // code block
}

Así es como funciona:

· La expresión de cambio se evalúa una vez.
·El valor de la expresión se compara con los valores de cada caso.
· Si hay una coincidencia, se ejecuta elcloque de códico asocido.
· Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado (default)


*/
// Ejemplo sencillo
// let dia=new Date.().getDay();
let dia=7
console.log(dia);
let diaS;//Declaramos una variable donde guardamos el nombre del día
switch(dia){//5
    case 1:
        diaS="Lunes";
        break; //salga del switch
     case 2:
        diaS="Martes";
        break;
     case 3:
        diaS="Miécoles";
        break;
     case 4:
        diaS="Jueves";
        break;
     case 5:
        diaS="Viernes";
        break;
     case 6,7:
        diaS="FIN DE SEMANA"
        break;
     
    default: 
        diaS="Este día no existe" 
}
document.getElementById("dia").innerHTML=diaS;

/*
· Ejercicio:
· En base a la puntación númerica de los alumnos.
· indicamos que el O al 4 -> Insuficiente
                   5 al 6 -> Bien
                   7 al 8 -> Notable
                   9 al 10 -> Sobresaliente
*/
/*
Ejercicio:
De la base de la puntución numérica de los alumnos, indicamos que del 0 al 1 -> Insuficiente
        5 al 6 -> Bien
        7 al 8 -> Notable
        9 al 10 -> Sobresaliente
*/
function calcNota(){
    let nota=parseInt(document.getElementById("nota").value);
    let notaAlumno;
    switch(nota){
        case 0:
            notaAlumno="INSUFICIENTE";
            break;
        case 1:
            notaAlumno="INSUFICIENTE";
            break;
        case 2:
            notaAlumno=" INSUFICIENTE";
            break;
        case 3:
            notaAlumno=" INSUFICIENTE";
            break;
        case 4:
            notaAlumno=" INSUFICIENTE";
            break;
        case 5:
            notaAlumno=" SUFICIENTE";
            break;
        case 6:
            notaAlumno=" BIEN";
            break;
        case 7:
            notaAlumno=" NOTABLE";
            break;
        case 8:
            notaAlumno=" NOTABLE";
            break;
        case 9:
            notaAlumno=" SOBRESALIENTE";
            break;
        case 10:
            notaAlumno=" SOBRESALIENTE";
            break;
        default:
            notaAlumno="este nota no existe"
    }
    document.getElementById("Calcular").innerHTML=notaAlumno;
    }

    // Ejercicio: Mostrar en consola los números del 1 al 20 de mayor a menor.

    // for (let i=20;| i>0;i--)

    for (let i= 20; i>= 1;i--){
        console.log(i)
    }

    // bucle for each->
    // 0 1 2 3

    function cambiarColor(){


        let colores=["#f2f2f2", "#001100","red", "orange", "#014b6d", "green"];

        let indice=parseInt(document.getElementById("numero").value);
        --indice;
        for (let i=0;i<colores.length; i++){
            if(i==indice){
                //cambiar el color a el div caja 
                document.getElementById("caja").style.backgroundColor=colores[i];
            }
        }


    }