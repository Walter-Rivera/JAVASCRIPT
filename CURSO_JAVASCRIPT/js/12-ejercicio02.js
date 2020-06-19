'use strict'

/*utilizando un bucle, mostrar la suma y la media de los números introducidos,
hasta agregar un numero negativo y ahi mostrar el resultado*/

var suma = 0;
var contador=0;
do{
    var numero=parseInt(prompt('introduce un número, para salir inserta un negativo',0));
    if(isNaN(numero)){
        numero=0;
    }
    else if(numero>=0)
    {
        suma+=numero;
        contador++;
    }
    console.log(suma);
    console.log(numero);
}while(numero>0);

alert("la suma de todos los numeros es :    "+suma);
alert("la media de todos los números es    "+(suma/contador));