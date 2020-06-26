'use strict'

var Categoria =["Liga nacional", "Primera Disión", "Segunda División", "tercera División"];
var Equipos=["Comunicaciones", "Municipal", "Quiché", "Marquense", "Xinabajul", "USAC", "Carchá", "SEAN.SA"];

var ligas=[Categoria,Equipos];

/*console.log(ligas[0][3]);*/

/*para agregarle un elemento a un array */
Equipos.push("AMICELCO S.A.");
Equipos.push("Droguería");

console.log(Equipos);
/*Retirar elementos de un arrray (el que está al final) */
Equipos.pop();
console.log("luego de retirar datos");
console.log(Equipos);


/*El método splice() cambia el 
contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. */


/*el método join separa los elementos de un array y los convierte a  string */
var nuevo = Equipos.join();
console.log(nuevo);

/*Convertir un array a string, esto lo hacemos con el método split */
var datos = "datos1, datos2, datos3, datos4, datos5, datosN";
var nuevo_Array=datos.split(", ");
console.log(nuevo_Array);

/*para ordenar un array por orden alfabético acorde a la inicial o numero del elemento */
console.log("función  sort:   "+Equipos.sort());

/*para invertir el orden del array tenemos el método reverse */
console.log("función reverse:   "+Equipos.reverse());