'use strict'
window.addEventListener('load',()=>
{
    try
    {
        var anio= 2020;
        alert(anio);
        /*decodificar una url */
        console.log(decodeURIComponent("www.google.com.gt"));
    }
    catch(error)
    {
        /*mandamos a consola el error */
        console.log(error);
        alert("error desconocido");

    }



});