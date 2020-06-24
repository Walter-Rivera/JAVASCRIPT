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

