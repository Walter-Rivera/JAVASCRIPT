'use strict'

/*programa que pida dos numeros y determine el mayor, menor o si son iguales*/
/*funcion adicional: Si alguno de los dos datos no es numérico y si están por debajo de 0, se pidan 
nuevamente los datos al usuario*/


do{
    var val1 = parseFloat(prompt("ingrese primer numero",0));
    var val2 = parseFloat(prompt("ingrese segundo numero",0));
    if(val1<0 ||val2<0)
    {   
        alert("uno de los dos números que ingresó es menor a 0, por favor intente de nuevo");
    }
    else if(val1>val2)
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
}while(val1<0 || val2<0||isNaN(val1)|| isNaN(val2));    