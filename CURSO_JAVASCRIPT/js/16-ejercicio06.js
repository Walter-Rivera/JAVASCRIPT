'use strict'
/*
hacer un programa que nos pida un número por pantalla, nos diga si es par o impar
sino es un número el dato ingresado, vuelve a pedir por consola
*/

var var1=parseInt(prompt("ingrese un número por favor"),0);

while(isNaN(var1))
{
    var1=parseInt(prompt("ingrese un número por favor 1"),0);
}
if(var1%2==0)
{
    document.write("<h3>"+"    el número   :  "+var1+"   es par"+"<h3>");
}
else
{
    document.write("<h3>"+"    el número   :  "+var1+"   es impar"+"<h3>");

}