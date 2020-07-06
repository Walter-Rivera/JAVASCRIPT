'use strict'

window.addEventListener('load', ()=>
{
    //comprobar si el localstorage está disponible en el navegador
    if(typeof(Storage)!=='undefined')
    {
        console.log("local storage dispobible");
    }
    else
    {
        console.log("no disponible");
    }


    //guardar datos en el localstorage

    localStorage.setItem("TITULO", "CURSO DE JAVASCRIPT");
    
    //recuperar un elemento del localstorage y meterlo en la pagina html
    document.querySelector("#dato").innerHTML=localStorage.getItem("TITULO");

    //para guardar objetos de tipo JSON en el localstorage, debemos parsearlos a string,

    var usuario=
    {
        nombre: "Walter Giovanni",
        apellidos: "Rivera López",
        Edad: 25
    };

    //parseamos el objeto JSON para almacenarlo en el localstorage
    localStorage.setItem("usuario",JSON.stringify(usuario));

    //recuperar un elemento de tipado string proveniente del localstorage y convertirlo en JSON
    var usuarioJS= JSON.parse(localStorage.getItem("usuario"));
    console.log(usuarioJS);

    document.querySelector("#dato").append("  "+usuarioJS.nombre);

    //limpiar elementos del localstorage
    localStorage.removeItem("usuario");

    //limpiar el localstorage por completo
    localStorage.clear();
    

});