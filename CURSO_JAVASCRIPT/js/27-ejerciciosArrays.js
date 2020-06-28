'use strict'
/*
1.- pida  números por pantalla y los meta en un array
2.- mostar el array del punto anterior en el html y por consola
3.- ordenar el array y mostarlo.
4.- invertir el orden del array y mostrarlo.
5.- mostar cuantos elementos tiene el array.
6.- buscar un valor introducido por un usuario, si lo encuentra debe indicarlo y además el número
del ìndice de la posición.
*/


/*1.- pedimos los numeros */

var arrayNumeros=[];
var contador = 0;
do{
    contador+=1;
    var numero = parseInt(prompt("ingrese su   "+contador+ "  numero:   ",0));
    if(!isNaN(numero))
    {
        arrayNumeros.push(numero);

    }

}while(!isNaN(numero));

/*2.- mostrando los elementos en el html y consola*/
document.write("<h2>"+ "   mostrando elementos del array  "+"</h2>");
document.write("<ul>");
arrayNumeros.forEach(element => {
    document.write("<li>"+"  "+element+"</li>");
    document.write("<br/>");
});
document.write("</ul>");

console.log(arrayNumeros);

/*3.- Ordenar el array y mostarlo */
var nuevo = arrayNumeros.sort();
console.log("3.- ordenar el array y mostrarlo :  "+nuevo);

/*4.- invertir el orden del array y mostarlo */

var invertir = arrayNumeros.reverse();
console.log("4.- orden inverso del array:    "+invertir);


/*5.- mostar cuantos elementos tiene el array. */
var mostrar = arrayNumeros.length;
console.log("5.- tamaño del array  "+mostrar);


/*
6.- buscar un valor introducido por un usuario, 
si lo encuentra debe indicarlo y además el número
del ìndice de la posición.
*/

var busqueda = parseInt(prompt("introduzca el dato que busca",0));

var respuesta = arrayNumeros.find(
    dato=>dato==busqueda
    );
    
/*buscando la posicion del elemento  */
var indice = arrayNumeros.findIndex(
    numero=>numero==busqueda
);

console.log("el resultado de la búsqueda es:    "+respuesta);

console.log("la posición del elemento es :    "+indice);




