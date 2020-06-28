'use strict'

function cambiarColor(color)
{
    elemento.style.background = color;
};
/*modificando elementos a través del id */
var objeto = document.getElementById("elemento");
objeto.innerHTML="nuevo texto desde js";
objeto.style.background="blue";
objeto.style.padding="15px";
objeto.style.color="white";
objeto.className="Hola";




/* conseguir elemetos POR SU etiqueta*/
var divs = document.getElementsByTagName('div');

var seccion = document.querySelector("#miSeccion");
var hr = document.createElement("hr");

var valor;

for(valor in divs)
{
    if(typeof divs[valor].textContent=='string')
    {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(divs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}
seccion.append(hr);

