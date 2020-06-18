'use strict'
/*las variables de tipo let solo funcionan
en un entorno local (funciones, clases, condicionales,etc),
mientras que las variables tipo var funcionan
a nivel global*/

//prueba con variable tipo var
var numero=40;
console.log(numero);//valor 40
if(true)
{
    var numero=50;
    console.log(numero); //valor 50
}
console.log(numero);//valor 50



//prueba con variable tipo let

let numero1=100;
console.log(numero1);//valor 100
if(true)
{
    let numero1=80;
    console.log(numero1);//valor 80
}
console.log(numero1);//valor  100



