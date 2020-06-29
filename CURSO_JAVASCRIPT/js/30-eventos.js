'use strict'

/*evento load, permite cargar todo el js después que todo el
html se haya cargado, para que no nos dé problemas al no existir los objetos que
estamos definiendo en este archivo .js */

window.addEventListener('load',()=>
{

    /*eventos con el ratón */
    function cambiarColor()
    {
        var bg = boton.style.background;
        if(bg=="green")
        {
            boton.style.background="red";
        }
        else
        {
            boton.style.background="green";
        }
        boton.style.padding="10px";
        boton.style.border="1px solid #ccc";
        return true;
    }

    var boton = document.querySelector("#boton");


    /*evento click */
    boton.addEventListener('click',function()
    {
        cambiarColor();
    });

    /*evento al pasar encima del elemento del dom (botón) */
    boton.addEventListener('mouseover',function()
    {
        boton.style.background="#ccc";

    });

    /*al salir del botón*/
    boton.addEventListener('mouseout',function()
    {
        boton.style.background="gold";
    });

    /*focus*/
    boton.addEventListener('focus', function()
    {
        boton.innerHTML="cambiando texto";

    });

    //blur
    boton.addEventListener('blur',function()
    {
        boton.innerHTML="Presionar";
    });


    var cuadroTexto = document.querySelector("#campo_nombre");


    //keydown
    cuadroTexto.addEventListener('keydown', function(e)
    {
        console.log("pulsando la tecla:   "+String.fromCharCode(e.keyCode));
    });

    // Keypress
    cuadroTexto.addEventListener('keypress', function(e)
    {
        console.log("presionó la tecla:   "+String.fromCharCode(e.keyCode))
    });
    
    //keyup
    cuadroTexto.addEventListener('keyup', function(e)
    {
        console.log("ha soltado la tecla:   "+String.fromCharCode(e.keyCode));

    });

});
