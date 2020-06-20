'use strict'

/*funciones en js*/


/*
function mostrar_texto()
{
    return "esta es la función";

};

console.log(mostrar_texto());
*/

/*funcion para hacer una calculadora dinámica */


function calculadora(numero1,numero2)
{
    var resultados=`la suma entre los dos números es: ${numero1+numero2}
        la resta entre los dos números es: ${numero1-numero2}
        la multiplicación entre los dos números es: ${numero1*numero2}
        la division entre los dos números es: ${numero1/numero2}
    `;
    return resultados;
}


var dato1 = parseFloat(prompt("ingrese el primer número",0));
var dato2= parseFloat(prompt("ingrese el segundo número",0));

while(isNaN(dato1)|| isNaN(dato2))
{
     dato1 = parseFloat(prompt("ingrese el primer número",0));
     dato2= parseFloat(prompt("ingrese el segundo número",0));

}
alert(calculadora(dato1,dato2));


