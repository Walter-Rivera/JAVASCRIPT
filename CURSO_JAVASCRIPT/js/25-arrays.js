'use strict'

var nombres = ["nombre 1", "nombre 2", "nombre 3", "nombre N"];
var lenguajes = new Array("PHP","JAVA","C++","GO");

/*
var elemento= parseInt(prompt("Qué elemento del array desea ver?"));

if(elemento>=nombres.length)
{
    alert("introduce un número menor a :   "+nombres.length);

}
else
{
    alert(nombres[elemento]);
}
*/

/*recorrer un array*/

/*
for (var i =0;i<lenguajes.length;i++)
{
    document.write("<ul>");
        document.write("<li> "+lenguajes[i]+ " </li>");
        document.write("<br/>");
    document.write("</ul>");

} ;
*/


/*Ciclo FOR EACH */

lenguajes.forEach((elemento, indice,arreglo)=>
{
    document.write("<li> "+indice+"  "+elemento+ " </li>");

});


/*ciclo for in */

for (let lenguaje in lenguajes)
{
    document.write("<li> "+"  "+lenguajes[lenguaje]+ " </li>");

};

/*funciones de búsqueda */

/*
FORMA TRADICIONAL DE CALLBACK
var busqueda = lenguajes.find( function (lenguaje)
{
    return lenguaje =="PHP"
});
*/

/*Función tipo flecha (callback simplificado) */
var busqueda = lenguajes.find( lenguaje =>

     lenguaje == "PHP"
);

console.log("opcion de búsqueda    "+busqueda);

/*el método findIndex nos devuelve el número del índice en el cual
se encuentra ubicado del archivo*/

var busqueda2 = lenguajes.findIndex(variable =>
    variable=="GO"
    );

console.log("buscando el índice "  + busqueda2);

/*el método some regularmente se usa para saber
si dentro de un array hay valores según se indique en la función, nos
devuelve true o false,  por ejemplo */
var precios = [10,20,30,40,50,60,70,80,90,100];

var busqueda3 = precios.some(numero =>
    numero>=40
    );

console.log("metodo some:    "+busqueda3);    