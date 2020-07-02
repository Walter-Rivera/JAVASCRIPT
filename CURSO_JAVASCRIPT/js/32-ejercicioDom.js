'use strict'

window.addEventListener('load',()=>
{
        var formulario = document.querySelector("#formulario");
        /*antes que se ejecute el evento, vamos a esconder el segundo cuadro
         */
        var box_dashed = document.querySelector(".dashed");
        box_dashed.style.display="none";
      
        formulario.addEventListener('submit',()=>
        {
            let nombres = document.querySelector("#idNombres").value;
            let apellidos = document.querySelector("#idApellidos").value;
            let edad = document.querySelector("#idEdad").value;


            /*mostramos el segundo cuadro que creamos con html */
            box_dashed.style.display="block";   

            var infoUsuario = [nombres,apellidos,edad];

            for(var indice in infoUsuario)
            {
                var parrafo = document.createElement("p");
                parrafo.append(infoUsuario[indice]);
                box_dashed.append(parrafo);
            };
          
        });



});