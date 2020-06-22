'use strict'
var numero=12;
var texto="variable global";

function hola(texto)
{
    var hola_mundo="texto dentro de la funcion";
    console.log(texto);
    console.log(hola_mundo);
    console.log(numero.toString());
}
hola(texto);