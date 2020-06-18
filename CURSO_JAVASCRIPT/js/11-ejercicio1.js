'use strict'

/*programa que pida dos numeros y determine el mayor, menor o si son iguales*/

var val1 = parseFloat(prompt("ingrese primer numero",0));
var val2 = parseFloat(prompt("ingrese segundo numero",0));

    if(val1>val2)
    {
        alert("el numero    "+val1+"    es el mayor");
    
    }
    else if(val1<val2)
    {
        alert("el numero    "+val2+"    es el mayor");
    }
    else if(val1==val2)
    {
        alert("ambos números tienen el mismo valor:    "+val1);
    }
    else
    {
        alert("ingresó un dato que no es numérico");
    };