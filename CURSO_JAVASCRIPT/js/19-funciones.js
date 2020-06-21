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


function calculadora(numero1,numero2,mostrar=false)
{
    if(mostrar==false)
    {
        console.log("la suma entre los  2 numeros es:    "+(numero1+numero2));
        console.log("la resta entre los 2 numeros es:    "+(numero1-numero2));
        console.log("la multiplicación entre los 2 números es:    "+(numero1*numero2));
        console.log("la division entre los 2 números es:   "+(numero1/numero2));

    }
    else
    {
        var resultados=`
        la suma entre los dos números es: ${numero1+numero2}
        la resta entre los dos números es: ${numero1-numero2}
        la multiplicación entre los dos números es: ${numero1*numero2}
        la division entre los dos números es: ${numero1/numero2}
        `;
        alert(resultados) ;
    };
    
};


var dato1 = parseFloat(prompt("ingrese el primer número",0));
var dato2= parseFloat(prompt("ingrese el segundo número",0));

while(isNaN(dato1)|| isNaN(dato2))
{
     dato1 = parseFloat(prompt("ingrese el primer número",0));
     dato2= parseFloat(prompt("ingrese el segundo número",0));

}
/* parámetros opcionales, podemos usar
esta clase de funciones en donde los booleanos actuan como flags,
en este caso sino enviamos el tercer parámetro, nos mostrará  por consola el resultado,
en otro caso si le enviamos parametro y este es verdadero, nos devolverá en un alert el resultado
*/

/*alert(calculadora(dato1,dato2,true));*/

var datos=calculadora(dato1,dato2);



