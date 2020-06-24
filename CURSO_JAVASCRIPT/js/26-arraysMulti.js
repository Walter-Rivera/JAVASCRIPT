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
