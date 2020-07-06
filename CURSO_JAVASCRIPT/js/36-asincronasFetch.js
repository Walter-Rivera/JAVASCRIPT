'use strict'
window.addEventListener('load',()=>
{
    /*fetch (hace peticiones ajax) y peticiones a servicios / api rest 
        Fetch en el primer parámetro recibe la url de la ruta donde se va a solicitar / consumir
        el servicio
    */
/*escojo el div donde voy a colocar en el html los datos que recupere de la petición */
var divUusuario = document.querySelector("#usuarios");
  
    fetch('https://reqres.in/api/users')
   /*luego adjuntamos una promesa, la cual tiene una función de callback */
   .then(data=>data.json())
   .then(users=>{
        listadoUsuarios(users.data);
       
   });

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

});