'use strict'
/*mostar los números impares que esten el rango ingresado por teclado */

var numero1 = parseInt(prompt("ingrese el primer numero",0));
var numero2 = parseInt(prompt("ingrese el segundo número",0));


if(numero1>numero2)
{
    document.write("<h2>     "+numero2+ "al      "+numero1+"    </h2>");
    for(var i = numero2;i<=numero1;i++)
    {
        if(i%2!=0)
        {
            document.write(i+"  <br>");

        }
        
    };

}
else if(numero2>numero1)
{
    document.write("<h2>     "+numero1+ "al      "+numero2+"    </h2>");
    for(var i = numero1;i<=numero2;i++)
    {
        if(i%2!=0)
        {
            document.write(i+"  <br>");

        }
        
    };

}

else
{
    alert("está ingresando un caracter incorrecto o números iguales, intente de nuevo");
}