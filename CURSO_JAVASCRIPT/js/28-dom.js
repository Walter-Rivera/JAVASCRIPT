'use strict'

function cambiarColor(color)
{
    elemento.style.background = color;
};



var objeto = document.getElementById("elemento");
objeto.innerHTML="nuevo texto desde js";
objeto.style.background="blue";
objeto.style.padding="15px";
objeto.style.color="white";
objeto.className="Hola";

console.log(objeto);
