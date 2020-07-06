'use strict'

window.addEventListener('load',()=>
{
   crearLista();
   recorrerLocalStorage();
   borrarPeliculaLocalStorage();
});


function crearLista()
{
     /*Seleccionamos nuestro formulario */
     var formu=document.querySelector("#formulario");
     formu.addEventListener('submit',()=>
     {
         /*capturamos el contenido del input donde nos ingresan el nombre de la película,
         luego que nos presionan el botón de enviar */
         var titulo = document.querySelector("#tituloPelicula").value;
         /*almacenamos ese valor en el localstorage, validamos que no venga vacío*/
         if(titulo.length>=1)
         {
            localStorage.setItem(titulo,titulo);
         }
         else
         {
            alert("No ingresó ningún dato, intente de nuevo");            
         }
     });

};


function recorrerLocalStorage()
{
    /*recorremos el contenido del localstorage y mostramos su contenido*/
    var listaOrdenadahtml=document.querySelector("#ordenListado");
    for(var i in localStorage)
    {
        if(typeof localStorage[i]=='string')
        {
            var elementoLista=document.createElement("li");
            elementoLista.append(localStorage[i]);
            listaOrdenadahtml.append(elementoLista);
        }
    }

};

function borrarPeliculaLocalStorage()
{
    var datoBorrar = document.querySelector("#borrarPelicula");
    datoBorrar.addEventListener('submit',()=>
    {
         var titulo = document.querySelector("#borrartituloPelicula").value;
         console.log(titulo);
         if(titulo.length>=1)
         {
             localStorage.removeItem(titulo);            
         }
         else
         {
             alert("no existe una película con el nombre asociado");
         }

    });
}