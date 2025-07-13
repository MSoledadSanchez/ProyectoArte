// en la pagina principal mostramos el nombre del usuario

  //añadimos un listener para que se ejecute la función
  document.addEventListener("DOMContentLoaded", mostrarUsuario);

  function mostrarUsuario(evt) {
    
    const storeUsu = localStorage.getItem("UsuarioActual");

    console.log(storeUsu);

    if (storeUsu) {
        document.getElementById('nombreusu').innerText = "Hola " +  storeUsu + " !";
        }
    else {
        document.getElementById('nombreusu').innerText = "Ingresante como invitado";

    }

    }

    // Cuando se cierra la sesion limpiamos el usuario

    let clickCerrar = document.getElementById('cerrarSesion');

    clickCerrar.addEventListener('click', limpiarUsuario);

    function limpiarUsuario(evt) {

        localStorage.removeItem("UsuarioActual");

    }
    


  
