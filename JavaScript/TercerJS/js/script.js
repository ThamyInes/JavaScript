/*
*Matrices o vectore -> Arrays (Arreglos)
*/

/*
*La decalarcuón de variables aisladas como por ejemplo los días de la semana
*/
let dia1="Lunes";
let dia2="Martes";

/* Aunque la declaración anterio es correcta, es más eficiente cuando tenemos una colección de datos que guardan relación, crear Arrays

* Sintaxis de un array
* Let nombte_array=[vaalor1, valor2, ...valorn]
*/

let dias=["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

/*
* Aspectos importantes para el uso de Array
* 1. Cada elemento tiene un índicce
* 2. Los índicies comienzan en 0
* 3. Para acceder a un elemento lo tenemos que llamar con el nombre del array y su índice -> dias[0] -> Lunes
* 4. Puedo conocer el número de elemento de un Array.
*/

document.getElementById("misalida").innerHTML=dias[0];
document.getElementById("misalida2").innerHTML=dias[6];

//Ejercicio: Realiza un array con los mese del año y muestra por pantalla al menos 3 meses de verano


let meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
document.getElementById("verano").innerHTML=meses[5] +" - "+meses[6]+" - "+meses[7];

/*
* A partir del siguiente array que se proporcion:
*/
let valores = [true, 5, false, "hola", "adios", 2];
/*
* Determinar cual de los dos elementos de numéricos es mayor.
* Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
* Determina el resultado de las cinco operaciones maremáticas realizadas con los dos elemnteos numéricos
*/

//1. Determinar cual de los dos elementos de texto es mayor
let resultado1=valores[1]>valores[5]? "El valor del índice 1 es mayor": "El valor del índice 5 es mayor";
document.getElementById("resultado1").innerHTML=resultado1;

// 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false

let resultado2=valores[0] || valores[2];
//true || false -> false
document.getElementById("resultado2").innerHTML=resultado2;
//resultado true
let resultado3=valores[0] && valores[2]
//true || false -> false
document.getElementById("resultado3").innerHTML=resultado3;
let suma=valores[1]+valores[5];
let resta=valores[1]-valores[5];
let multi=valores[1]*valores[5];
let div=valores[1]/valores[5];
let mod=valores[1]%valores[5];

document.getElementById("resultado4").innerHTML=
"El reusltado de las operaciones son: \nSuma:" +suma+ "\nResta:" +resta+ "\nMultiplicacion: "+multi + "\nDivisión: "+div+ "\nMódulo: "+mod;

/* REPASO DE OPERADORES DE INCREMENTO
++valores[1]->6
--valores[1]->5
valores[1]+=valores[5]->7

valores [1]=valores[1]+valores[5] ->7
*/
// CONDICIONAL IF-ELSE
let edad=12;
let nombre="Inés";
if(edad>=18)//Condición
{
    //grupo de instrucciones
    ++edad;
    let cumple="El año que viene tendrás" + edad; 
    let mensaje="Ya puedes ir a la Disco";
    document.getElementById("mensajes").innerHTML=cumple + "años y" +mensajes;
}else//si no cumple la condición
{
    let mensaje="Espera un poco"
    document.getElementById("mensajes").innerHTML=mensaje;
}


let mostrar=true

if (mostrar){ //mostrar==true
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es verdadero";
}
else{
    document.getElementById("mostrado").innerHTML="NO Entro al if, sino al Else porque mostrado es falso";
}
//Cuando necesitamos evaluar la negación de un booleano (True/false) utilizamos el simbolo ! antes de la variable

if (!mostrar){ //mostrar==false
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es falso";
}
else{
    document.getElementById("mostrado2").innerHTML="NO Entro al if, sino al Else porque mostrado es verdadero";
}

/*
let numero1 = 5;
let numero2 = 8;
if(...) {
    alert("numero1 no es mayor que numero 2")
}
if(...){
    alert("numero2 es positivo");
}
if(...){
    alert("numero1 es negativo o distinto de cero");
}
if(...){
    alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
*/
let numero1 = 5;
let numero2 = 8;

if(numero1 <= numero2) {
  alert(numero1+ " no es mayor que "+ numero2);
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

/*Existe la opcion de anigar if - else -if -else
* Si eres <12 años eres pequeño, si eres <19 eres adolescente
* Si eres <35 sigues siendo joven
* Sino..... "Cuídate mucho"
*/

let nEdad=15
let msnEdad;
if (nEdad<12) {
    msnEdad="Todavía eres muy pequeño"
}else if (nEdad<19){
    msnEdad="Eres Adolescente";
}else if (nEdad<35){
    msnEdad="Todavía eres joven";
}else{
    msnEdad="Cuídate mucho!"
}
document.getElementById("msnEdad").innerHTML=msnEdad;