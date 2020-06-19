'use strict'
/*muestre todos los numeros divisores de un número introducido en prompt*/

var numero = parseInt(prompt("ingrese el numero",0));

var contador=0;
document.write("<h2>     "+"    numeros divisores de "+ numero+"</h2>");
for(var i =0;i<numero;i++)
{
    if(numero%i==0){
        document.write(i);
        document.write("<br/>");
    }

}