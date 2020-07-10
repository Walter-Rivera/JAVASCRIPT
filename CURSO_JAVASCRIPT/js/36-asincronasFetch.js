'use strict'
window.addEventListener('load',()=>
{
    /*fetch (hace peticiones ajax) y peticiones a servicios / api rest 
        Fetch en el primer parámetro recibe la url de la ruta donde se va a solicitar / consumir
        el servicio
    */
/*escojo el div donde voy a colocar en el html los datos que recupere de la petición */
var divUusuario = document.querySelector("#usuarios");
var divUsuario2 = document.querySelector("#usuario2");
  
    
   /*luego adjuntamos una promesa, la cual tiene una función de callback */
   getUsuarios()
   .then(data=>data.json())
   .then(users=>{
        listadoUsuarios(users.data);
        return getUsuario2();
       
   })
   .then(data=>data.json())
   .then(user =>{
     mostraDatosUsuario(user.data);


   });

   function getUsuarios()
   {
       return fetch('https://reqres.in/api/users');
   }

   function getUsuario2()
   {
       return fetch('https://reqres.in/api/users/2');
   }

   /*como crear un promesa de terceros*/
   function getInfo()
   {
    var profesor =
    {
         nombre: 'fulano',
         apellidos: 'sutano',
         url: 'https://www.google.com/'
    };
    /*en esta instancia tenemos una función de callback */
    return new Promise((resolve,reject)=>
    {
        /*convertir la información en un JSON-STRING */
       var profesor_String = JSON.stringify(profesor);
       /*Si de la conversión no se obtiene  */
    })     
   }



   function listadoUsuarios(usuarios)
   {
        usuarios.map((user,i)=>
        {
            let nombresApellidos = document.createElement('h4');    
            nombresApellidos.innerHTML= i+user.id+"     "+user.first_name+" "+user.last_name;
            divUusuario.append(nombresApellidos);
            /*al cargar los datos en el dom, eliminamos el mensaje de cargando del div, accedemos a él */
            document.querySelector(".loading").style.display='none';
        });
   };


   function mostraDatosUsuario(user)
   {
        
        let nombresApellidos = document.createElement('h4');  
        let imagen = document.createElement('img');  
        nombresApellidos.innerHTML= user.id+"     "+user.first_name+" "+user.last_name;
        imagen.src=user.avatar;
        imagen.width='100';
        divUsuario2.append(nombresApellidos);
        divUsuario2.append(imagen);
        /*al cargar los datos en el dom, eliminamos el mensaje de cargando del div, accedemos a él */
        document.querySelector("#usuario2 .loading").style.display='none';
   };


});