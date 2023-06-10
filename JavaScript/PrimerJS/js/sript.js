/* 
*Este script enseña
1. Comentarios
2. Insertar codigo en el HTML con document.getElementById.innerHTML
3. Leer codigo desde el HTML con document.getElementBy.Id.value
4. Declarar Variables - Tipos de variables
5. Asignar valores a variables
6. Mostrar en la consola del navegador salidas ->console.log
7. Crear operaciones matemáticas básicas
8. Declara una función
9. Llamar una función desde HTML / llamar una funcion desde el mismo javascript -> miFuncion()
10. Convertir una valor cadena a uno entero con parseInt
11. Incremento y decremento de valores con ++ --
12. Declarar constantes
13. Caracteres de escape en cadena de caracteres
14. Alertas
*/
//comentarios de línea
/*
Comentarios de Bloque
*/
alert("Hola Mundo de Desarrollo Web");

//acceder a los elementos por id del html
//1. Crear una variable-> un lugar en memoria donde se almacena un valor
//1.1 declarar la variable indicando un nombre -(comenzar: letras, no número, caractéres especiales)
//Debe ser en minúscula o camello-> nombreDe1Usuarui
//No debe contener espacios (no-> nombre del Usuario)
//se puede utilizar barra baja_ tanto en el comienzo como en el contenido del nombre, una buena practica es comenzar con letras o con $


let nombre="Thamy Carretero"; //las comillas indican que es una cadena de caractéres
//Declarramos una variable llamada parrafo que se enlaza con id del HTML

let parrafo=document.getElementById("parrafo"); 
//le indicamos a esa varible que inserte el valor de la otra variable nombre
parrafo.innerHTML=nombre;
//console.log-> es una instrucción que se muestra en la consola del navegator;
console.log(nombre);
document.getElementById("demo").innerHTML="Hello JavaScript";


//Variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido=" Navarro";
//reemplazo el valor de nombte concatenando el apellido
nombre=nombre+" "+apellido; //concatenar cadenas de caractéres
console.log(nombre);
document.getElementById("nuevonombre").innerHTML=nombre;
//características de javaScript... no declara el tipo de dato

numero1="uno";
suma=numero1+" "+numero2;
console.log(suma);// es una manera de visualizar una salida en javascript

//crear mi primera funcion-> una serie de instrucciones quese ejecutaran cuando sea llamada

//La siguiente funcion muestra una alerta e inserta un párrafo en el lugar donde se identifica id=parrafo2

function mostrarAlerta(){
    alert("Hola Chicas")
    document.getElementById("parrafo2").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet esse animi quam inventore optio, quidem, soluta aliquam maiores praesentium illum suscipit laudantium corporis fugit iure facere est? Iure, nemo";
}
//Otra manera de llamarlo
//document.getElementById("boton1").onclick = function(){

//}


//Paso de parámetros a una función

function sumar2(){
    //leemos del formulario los valores que se ingresan
    //casting-> cambiar de un tipo a otro... caracteres->numeros
    let x= parseInt(document.getElementById("numero1").value);
    let y= parseInt(document.getElementById("numero2").value);
    document.getElementById("suma2").innerHTML="El valor de x es "+ x + "El valor de y es " + y + "y la suma de estos dos valores es" + (x+y) ;
}

document.getElementById("suma").innerHTML=sumar(45,34);
function sumar(a,b){
    return a+b;
}

//existe otra manera de declarar las variables <2015
var nombreAlumno="Thamy Carretero";
// diferencia entre var y let
var nombreAlumno="Ines Carretero";
console.log(nombreAlumno);
//ejemplo con let
let nombrePadre="Nacho Carretero";
console.log(nombrePadre);
//no se puede declarar de nuevo una variable con let en el mismo bloque
function otroNombre(){
    let nombrePadre="Ignacio Baidez";
    console.log("Dentro de la funcion->" + nombrePadre);
}
otroNombre();//llamamos la funcion para que se ejecute
console.log("Fuera de la funcion->"+nombrePadre);
//en la declaracion de las variables se puede declarar una o mas variables en la misma linea
//var nombreMadre; declaración->indicando que nombreMadre es una variable
let nombreMadre="Ines Navarro", nombreNiña="Gaia Carretero", colegio="Los Padres";
//las variables no estas obligado a declararlas, pero es importante y buena práctica
edad=15;// tipo de numeros enteros...
console.log(edad);
precio=5.8;//decimal 
edad=18;//remplaza el valor
console.log(edad);
nombreMadre="Gaia Navarro";//le asigno a la variable nombteMadre el valor de Gaia Carretero
console.log(nombreMadre);
//lo que guarda en una variable
/*tipos ->  numeros (5, 4, 5.97, etc)
            cadena de carcteres ("cadena de caracteres")
            booleanos (true, false) ->verdadero, falso)
*/
let miBooleano=true; //on off - 0 /1
//Las cadenas de carcateres existe la limitante de utilizar "" dentro de una cadena
//para ello exite caracteres de escape en cadenas de texto
let cadena="esta es una cadena muy importante de javaScript";
console.log(cadena);
//puedes combinar las dobles comillas con las comillas simples

let cadena2='esta es la segunda cadena "muy importante"';
console.log(cadena2)
;
cadena="esta es una cadena 'muy importante'de JavaScript";
//salto de linea con caracteres de escape \n
cadena="esta es una cadena 'muy importante'\nde JavaScript";
console.log(cadena);

/* Operaciones Matematicas
+ - * / -> operaciones básicas
% -> módulo o resto de dos números */
x=10;
y=2;
let modulo=10%2; //da como resultado el resto de la división
console.log("El módulo entre 10/2 es" + modulo);
console.log(operacion);
/* 
Operadores de asignación
= asigna
+= incrementa el numero -> x=x+2
-=
/=
*=
*/
x+=2 //x=12
console.log(x);
x-=2; //x=10
console.log(x);
x*=2; //20
console.log(x);
x/=2;//10
console.log(x);

// se puede utilizar el operador de asignación += en las cadenas de carcteres
cadena+=cadena2;
console.log(cadena);

//operador de exponente
x=y**10;
console.log(x);
//operador incremento
++y;
console.log(y);
//operador decremento
--y;
//salidaen pantalla directamente insertando el texto en la ultima linea disponible
document.write("el valor de y es" +y);

/* 
    - Constantes -
    No cambia en el resto del programa, se declara con la "palabra reservada" const y se debe asignar su valor cuando es declarada  

    Pañabras reservadas= propias del lenguaje
    let, var, const...
*/

const PI=3.141618; //Las constantes se declaran en mayusculas
const RUEDACOCHE=4;
const MONEDA=5;
//área de un circulo area=r**2xPI
let area=(50**2)*PI;

console.log("El area de una circunferencia de radio 50 es" + area);