'use strict'

window.addEventListener('load',()=>
{
    //timers (set interval)
    /*setTimeout se ejecuta una sola vez, mientras setInterval
    se ejecuta por varias veces */
    function Intervalo()
    {
            var tiempo = setInterval(()=>
        {
            var encabezado = document.querySelector("h1");
            console.log("set interval ejecutado");
            if(encabezado.style.fontSize=="50px")
            {
                encabezado.style.fontSize="30px";
            }
            else
            {
                encabezado.style.fontSize="50px";
            }
        },
        2000);
        return tiempo;
    };
    
    var tiempo=Intervalo();

    /*parar el setInterval */
    var parar = document.querySelector("#stop");

    parar.addEventListener("click",()=>
    {
        clearInterval(tiempo);
    });

    /*iniciar / reiniciar el setInterval */
    var iniciar = document.querySelector("#start");

    iniciar.addEventListener("click",()=>
    {
        Intervalo();
    });



});