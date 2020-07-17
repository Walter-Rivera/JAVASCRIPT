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
var divUsuario3 = document.querySelector("#profesor");
  
    
   /*luego adjuntamos una promesa, la cual tiene una función de callback */
   getUsuarios()
   .then(data=>data.json())
   .then(users=>{
        listadoUsuarios(users.data);
        return getInfo();
       
   })
   .then(data=> 
    {
        divUsuario3.innerHTML = data;
        return getUsuario2();
    })
   .then(data=>data.json())
   .then(user =>{
     mostraDatosUsuario(user.data);
   })
   /*creando método catch para el manejo de errores en una promesa */
   .catch
   ( error => 
    {
        alert("muchos errores en las peticiones ajax");
    }

   );

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
        var profesor_String=""; 
       /*vamos a crear el método para que se tarde un poco en el mostar los datos desde consola*/
        setTimeout(()=>
        {
             /*convertir la información en un JSON-STRING */
            profesor_String = JSON.stringify(profesor);
            /*Si no se obtiene de la conversión un objeto
            string, procedemos a rechazar la promesa con el método reject() o si esta viene vacía*/
            if(typeof (profesor_String)!='string' || profesor_String=='') return reject("error, no se obtuvo un ojeto correcto de la petición");
            /*si todo funciona correctamente, es decir, 
            si el tipo de datos obtenidosde la conversión del archivo
            json es la correcta, devolvemos ese objeto */
            
       return resolve(profesor_String);
       
        },2000);
    });     
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