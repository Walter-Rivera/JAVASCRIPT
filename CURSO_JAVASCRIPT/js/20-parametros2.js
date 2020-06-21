'use strict'
/*Parámetros REST y SPREAD */
/*funcion con parametro tipo rest, es cuando no sabemos 
la cantidad exacta de parámtros que han de llegar*/
function listadoFrutas(fruta1,fruta2,...restoFrutas)
{
    console.log(fruta1);
    console.log(fruta2);
    console.log("resto de frutas:   "+restoFrutas);
}

//listadoFrutas("naranja","melón", "sandía","coco","papaya","manzana");
/*parámetros tipo spread*/
var frutas=["piña","fresa"];
listadoFrutas(frutas,"melón", "sandía","coco","papaya","manzana");