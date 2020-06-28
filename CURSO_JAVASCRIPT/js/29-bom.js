'use strict'
/*BOM- Browser Object Model*/

function getBom()
{
    /*Para ver el tamaño de la pantalla (altura)*/
    console.log(window.innerHeight);
    /*Para ver el ancho de la pantalla*/
    console.log(window.innerWidth);
    /*obtener la url actual */
    console.log(window.location);
}

/*redireccionar a otra dirección url */
function redirectUrl(url)
{
    window.location.href=url;
};


/*Abrir en una nueva ventana la url nueva */
function openWindow(url)
{
    window.open(url,"","width=400", "height=400");
};



getBom();