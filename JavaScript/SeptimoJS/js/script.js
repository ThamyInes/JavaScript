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

/**
 * Cuando se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la posición inicial y la inmediata anterior a la posición final (es decir, la posición inicio está incluida y la posición final no)
 */
/* Otro Ejemplo, si se le pasa la posición inicial mayor a la final, se asume que es la posicion menor es desde donde comienza y la mayor donde termina
 */

subcadena1=cadena1.substring(10,6);
console.log(subcadena1);

/** Convertir una cadena a un array con la función split, se debe indicar el carácter separador 
 */
let cadena3="Los alumnos son 15 y son muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

//Con split también puedo extraer todas las letras de una cadena indicando el separador vacio " "
let array2Cadena3=cadena3.split("  ");
console.log(array2Cadena3);

//FUNCIONES ÚTILES PARA ARRAYS

//Conocer la longitud de un array

let miArray=[1,2,3,4,5,6,7,8,9];
//Explicacion en la linea 150
let micopiaArray=miArray;
console.log(micopiaArray);
let numElementos=miArray.length;
console.log(numElementos);

// Funcion para unir o concatenar dos arrays

let array3=array2Cadena3.concat(miArray);
console.log(array3);

// Funcion join que es lo inverso a split en las cadenas, convierte una Array en una cadena

let deArrayAcadena=arrayCadena3.join(" "); 
console.log(deArrayAcadena);

let miArrayAcadena=miArray.join(" - ");
console.log(miArrayAcadena);

//Funcion pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.

let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

//Funcio push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemnto a la vez)

miArray.push("Thamy");
console.log(miArray);

//Función shift(), elimina el primer elemento de array y lo devuelve. El array originalse va modificando y su longitud disminuida en 1 elemento

let primero=miArray.shift();
console.log(primero);
console.log(miArray);

// Función unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)

let otroValor=5;
miArray.unshift(otroValor);
console.log(miArray);

//Función reverse(), modifica un array colocando sus elementos en el orden inverso a su posición original

miArray.reverse();
console.log(miArray);

//Es usual realizar operaciones con array, s es necesario para el flujo del programa que el array origina se mantenga, debemos realizar una copia del array, porque estos métodos modifican directamente el array.




// Funciones con número
/**
 * Funcion NaN, (del inglés, "Not a Number") JavaScript emplea el valor NaN para indicar un valor numérico no definido (por ejemplo, la división 0/0)
 */

let numero1=10,numero2=5;
let operacion=numero1/numero2;
console.log(numero1/numero2); //NaN

if (isNaN(operacion)){ // True
    console.log("resultado indefinido");
}else{
    console.log("El resultado es -> " + numero1/numero2);
}

//Números infinitos
//Infinity hace referencia a un valor numérico infinito y positivo (también existe el valor - Infinity para los infinitos negativos )
let numero3=0;
console.log(numero1/numero3);

//si necesitamos limitar los decimales y redondearlos, utilizamos la funcion toFixed

let decimales=35982.659874255455;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed(4));
console.log(decimales.toFixed());

//Ejercicio: lee un numero decimal y devuelvelo convertido el . en ,

function cambiar(){
    let numero=document.getElementById("numero").value;
    console.log(numero);
    let elementos=numero.split(".");
    console.log(elementos);

    //Concatenando
    let cadenaNumero=elementos[0] + "," +elementos[1];
    //con el metodo join
    
    let cadenaNumero2=elementos.join(",");
    console.log(cadenaNumero);
    console.log(cadenaNumero2);
    document.getElementById("numeroDev").innerHTML=cadenaNumero;

}