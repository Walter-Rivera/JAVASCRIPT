'use strict'
/*mini calculadora
tiene que ser con relación a dos números solicitados por pantalla
si se ingresa uno incorrectamente, se vuelven a pedir
mostar el resultado en el cuerpo de la pagina html y en una alerta*/

var numero1 = parseFloat(prompt("ingrese el 1er. número: ",0));
var numero2 = parseFloat(prompt("ingrese el 2do. número: ",0));

while(isNaN(numero1)|| isNaN(numero2))
{
     numero1 = parseFloat(prompt("ingrese el 1er. número: ",0));
     numero2 = parseFloat(prompt("ingrese el 2do. número: ",0));
}

var resultado= "la suma entre los dos números es:    "+(numero1+numero2)+"<br/>"+
                "la resta entre los dos números es:  "+(numero1-numero2)+"<br/>"+
                "la multiplicación entre los dos números es:   "+(numero1*numero2)+"<br/>"+
                "la división entre los dos números es:   "+(numero1/numero2)+"<br/>";
/*nuestro el resultado en el documento html*/
document.write(resultado);

/*mandar a un alert el resultado, cree un template para hacerlo más "sencillo y estético"*/
var respuesta= `la suma entre los dos números es:    ${numero1 + numero2} 
la resta entre los dos números es:  ${numero1 - numero2} 
la multiplicación entre los dos números es:   ${numero1 * numero2} 
la división entre los dos números es:   ${numero1 / numero2} 
`;
alert(respuesta);