'use strict'
var mensaje= "ingresa una cantidad";
var numero =prompt(mensaje,0);
var resultado="";
var numero_final=parseInt(numero);
console.log(numero_final);

switch(numero_final)
{
    case numero_final=1:
    resultado="edad de un menor";
    break;
    case numero_final=18:
    resultado="acaba de cumplir la mayoria de edad";
    break;
    default:
        resultado="numero incorrecto";
    break;
};
alert(resultado+numero_final);

