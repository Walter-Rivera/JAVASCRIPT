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
            let edad = parseInt(document.querySelector("#idEdad").value);


            if(nombres.trim()==null || nombres.trim().length==0)
            {
                alert("Nombre(s) incorrectos");
                return false;
            }

            if(apellidos.trim()==null || apellidos.trim().length==0)
            {
                alert("apellidos incorrectos");
                return false;
            }

            if(edad==null || edad<=0 ||isNaN(edad)==true)
            {
                alert("la edad no es válida");
                return false;
            }




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