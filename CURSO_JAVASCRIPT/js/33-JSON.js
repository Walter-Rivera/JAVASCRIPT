'use strict'

window.addEventListener('load',()=>
{
    var pelicula =
    {
        titulo: "Avengers Endgame",
        anio: 2019,
        país: "Guatemala"
    };

    var arrayPeliculas=
    [
        {
            titulo: "Avengers Infinity War", anio: 2018, país: "Costa Rica"
        },pelicula
    ];

   /*seleccionamos el div al que le vamos a enviar a escribir los datos */

   var cajaPeliculas = document.querySelector("#peliculas");
   
    for (var indice in arrayPeliculas)
    {
        var p = document.createElement("p");
        p.append(arrayPeliculas[indice].titulo+" - "+arrayPeliculas[indice].anio);
        cajaPeliculas.append(p);
    }
});