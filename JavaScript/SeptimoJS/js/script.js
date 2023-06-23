/**
 * Concepto básico de funciones o métodos: 
 * Una función JavaScript es un bloque de código diseñado para realiar una tarea *particular.
 * Una función JavaScript se ejecuta cuando "algo" lo invoca (Lo llama).
 *
 * Las funciones pueden ser propias, como por ejemplo:
 *     Function guardarNombre(){
 *            ....Bloque de instrucciones
 * }
 * 
 * Para que ehecute ese bloque de instrucciones, la funcion tiene que ser invocada ya sea en un javascript o desde el html
 * guardarNombre():
 * o desde html .... onclick="guardadNombte()"
 * 
 * 
 * También existen funciones propias del lenguaje, que nos realizan algunas tareas de manera automática.
 * 
 * Ejemplo Funciones útiles para cadenas de texto
 */

// Funcion para conocer la longitud de una cadena
let cadena1="Hola, como estaís todos hoy?";
let nLetras=cadena1.length;
console.log(nLetras);

//Funcion que concatenar
let cadena2=" Bien, gracias!";
let cadena=cadena1.concat(cadena2); //es lo mismo cadena1+cadena2
console.log(cadena);

//Concatenar en un bucle
for (let i=1; i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena);

//Función para pasar a mayúsculas una cadena de texto

cadena1=cadena1.toUpperCase();
console.log(cadena1);

//Función para pasar a minusculas una cadena de texto

cadena1=cadena1.toLowerCase(); //toLocalLowerCase -> se refiere a idioma o configuración local, pero el resultado suele ser el mismo que toLowerCase
console.log(cadena1);

//Función para obtener el carácter qye se encuentra en la posición indicada

let letra=cadena1.charAt(0); //retorna h
console.log(letra);

//Funcion indexOf(letra) obtiene el carácter que se encuntra en la posición indicada, siempre mostrará la primera posicion 

let posicion=cadena1.indexOf('a')
console.log(posicion);

// lastIndexOf calcúla la última posición del carácter indicado, 
// tanto indexOf como lastIndexOf devuelve -1 si no encuentran ese carácter.

posicion=cadena1.lastIndexOf('a');
console.log(posicion);

posicion=cadena1.lastIndexOf('x');
console.log(posicion);

/**
 * Importante:
 * La función lastIndexOf() comienza su búscquieda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra
 * 
 */

// Función para extraer de una cadena

/**
 * substring(inicio), extrae una porción de una cadena de texto. El segundo parámetro es opcional. Si solo se indica el parámetro inicio, la función devuelve la parte de la cadena original correspondiente desde esa posición hasta el final
 */
let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);