'use strict'

//transformando texto
var numero=100;
var texto1="Bienvenido al curso de curso";
var texto2= "de Javascript, Angular, Node JS";

/*algunas funciones*/
/*convertir a string*/
var dato = numero.toString();
/*pasar todo el texto a mayúscula */
console.log(texto1.toUpperCase());
/*Para pasar el texto a minúscula */
console.log(texto2.toLowerCase());

/*longitud de un string*/
console.log(texto1.length); 


/*concatenar texto*/
var mensaje=texto1.concat("   "+texto2);
console.log(mensaje);


/*método para buscar coincidencia de una palabra,
el indexOf o search, nos permite encontrar la primer coincidencia de busqueda 
entre un texto con otro, devuelve el número del indice donde se ubica
la primer coincidencia */
var busqueda = texto1.indexOf("curso");
/*var busqueda = texto1.search("curso"); */
console.log(busqueda);

/*el método lastIndexOf nos permite encontrar la última  coincidencia 
de texto dentro de la búsqueda */
var busqueda2=texto2.lastIndexOf("de");
console.log(busqueda2);

/*la función match, nos devuelve un arreglo con el conjunto de coincidencias del texto
que estamos buscando por ejemplo: */
var texto4=texto1.concat(" de desarollo we del curso de JS");

var busqueda3=texto4.match(/curso/g);
console.log(busqueda3);

/*la funcion substring (substr(n,m)) extrae la cantidad de caracteres
a partir de la posición descrita, el primer parámetro es la posición inicial
y el segundo la cantidad de caracteres a abstraer*/ 
var busqueda4=texto1.substr(3,6);
console.log("metodo substring    "+busqueda4);


/*el método chartAt(n) permite extraer un caracter en específico de la cadena de caracteres
(string)*/
var busqueda5=texto1.charAt(11);
console.log("MÉTODO charAt "+busqueda5);



/*El método string.startsWith("n"), nos devuelve true o false
si encuentra  coincidencia del texto a buscar al inicio de la cadena
que estamos analizando */
var busqueda6= texto1.startsWith("Bienvenido");
console.log("metodo startsWith   :"+busqueda6);


/*El método string.endsWith("n"), nos devuelve true o false
si encuentra  coincidencia del texto a buscar al final de la cadena
que estamos analizando */
var busqueda7=texto2.endsWith("Node JS");
console.log("metodo endsWith   "+busqueda7);


/*el metodo includes("palabra"), nos devuelve true o false
*/
var busqueda8=texto2.includes("Angular");
console.log("metodo includes   "+busqueda8);