'use strict'


/*funciones anónimas y de callback*/

function sumar(numero1,numero2,sumaYmuestra,sumaPorDos)
{
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
    return sumar;


};

sumar(5,7,
    function(dato)
    {
        console.log("la suma de los 2 numeros es:   "+dato);

    },
    function(dato)
    {
        console.log("la multiplicación x 2 es:    "+(dato*2));
    }

    );