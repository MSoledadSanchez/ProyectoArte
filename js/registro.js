
//declaramos una variable y la vinculamos al botón Enviar
let btnCrear = document.getElementById('crear');

let btnLimpiar = document.getElementById('limpiar');

btnLimpiar.addEventListener('click', limpiarForm);

btnCrear.addEventListener('click', mostrarMensaje);

//Función para validar los datos ingresados y mostrar mensaje

function mostrarMensaje(evt) {

  //declaramos variables para almacenar los datos de cada campo
  let txtApellido = document.getElementById('apellido').value;
  let txtNombre = document.getElementById('nombre').value;


  let txtUsuario = document.getElementById('usuario').value;
  let txtContra = document.getElementById('pass').value;
  let txtRepContra = document.getElementById('newpass').value;

  evt.preventDefault();

  if(txtContra === txtRepContra) {

    document.getElementById('mensaje').innerText = "Bienvenido/a "  + (txtNombre) + " " + (txtApellido);
    
  } else {
  
    document.getElementById('mensaje').innerText += "Las contraseñas que ingreso no concuerdan" ;
  
  }
}

//
function limpiarForm(evt) {
  evt.preventDefault();
  document.getElementById('formulario').reset();
  document.getElementById('mensaje').innerText = ""
}