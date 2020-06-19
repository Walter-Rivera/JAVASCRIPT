'use strict'
/*hacer un programa que nos pida dos números y nos imprima 
los existentes en ese rango es decir, por ejemplo si el usuario manda un 5 y un 10
debemos imprimir los números del 6 al 9 */




var numero1=parseInt(prompt("ingrese el primer numero",0));
var numero2=parseInt(prompt("ingrese el segundo numero",0));

if(numero1>numero2)
{
    for(var i = numero2;i<=numero1;i++){

        console.log(i);
    }

}else if(numero2>numero1)
{

    document.write("<h2> De     "+numero1 + "   a   "+numero2+"    Están estos números </h2>");
    for(var i = numero1;i<=numero2;i++)
    {
        /*para escribir datos en el html*/ 
        document.write(i);
        document.write(" <br>");

    };

}
else
{
    alert("no puede ingresar numeros iguales, al menos uno tiene que ser diferente al otro");
}

;

