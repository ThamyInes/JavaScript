for(let i=0;i<10;i++){
    console.log(i);

}

// La idea del funcionamiento de un bucle for es la siguiente: "mientras la condicion indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las varibles que se utilizan en la condición"

// Ejemplo de un bucle con los diferentes <hX> de html


for(let i=1;i<6;i++){
    document.write("<h"+i+">"+"Encabezado de nivel " +i + "</h"+i+">");

}

/*Ejemplo: 
Ejercicio : El factorialde un numero entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... 1. Así, el factorialde 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero*/

function calFact(){
    let numero=document.getElementById("numero").value;
   //borrar el contenido de esos selectores
    document.getElementById("msnError").innerHTML="";
     document.getElementById("resultado").innerHTML="";
     //verificar que lee correctamente el numero
     console.log(numero);

    if (isNaN(numero)){//si no es un    numero //ha cometido un error al introducir el numero
        let msnError="Indica un número, no letras!!";
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        //hacemos el bucle factorial
        for(let i=1; i<=numero; i++){
            resultado*=i;//resultado =resultado* i;
        }
        document.getElementById("resultadoFact").innerHTML=resultado;
    }

}

/* 
*Una estructura de control derivada de for es la estructura for... in. Su definición exacta implica el uso de objtos, que es un elemnto de programación avanzada.
* estructura for...in adaptada a su uso en ARRAYS
*
*/
function mostrarDias(){
    let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    for(i in dias){
        etiqueta="etiqueta"+i;
        document.getElementById(etiqueta).innerHTML=dias[i];
    }
}