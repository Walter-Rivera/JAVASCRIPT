'use strict'

var nombres = prompt("ingrese sus nombres");
var apellidos = prompt("ingrese sus apellidos");
var texto = `
<h2> Bienvenido  </h2>
<br/>
<h3>${nombres} ${apellidos}</h3>

`;

document.write(texto);