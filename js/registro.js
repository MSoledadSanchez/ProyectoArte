/*
En este archivo vamos a definir el comportamiento del
formulario , vamos a extraer los valores de los campos 
(texto y númerico)
Y por último vamos a mostrar un mensaje debajo del form
*/

//declaramos variables para almacenar los datos de cada campo
let txtUsuario = document.getElementById('usuario').value;
var txtContra = document.getElementById('pass').value;
var txtRepContra = document.getElementById('newpass').value;

console.log (txtUsuario, txtContra, txtRepContra)
// let edad = document.getElementById('edad').value;

// let mensajeUsuario = document.getElementById('mensajeUsuario').value;

//declaramos una variable y la vinculamos al botón Enviar
let btnCrear = document.getElementById('crear');

let btnLimpiar = document.getElementById('limpiar');

btnLimpiar.addEventListener('click', limpiarForm);

//Aplicamos al botón el evento/método addEventListener()
btnCrear.addEventListener('click', mostrarMensaje);

//Función
//En esta función creamos un mensaje y le agregamos los valores
//extraidos de los campos del formulario
//Y por último hacemos una validación de edad y mostramos un mensaje.
function mostrarMensaje(evt) {

  evt.preventDefault();

  document.getElementById('mensaje').innerText = 
  "Bienvenido/a "  + (txtUsuario)   //.concat(txtNombre + ", " + txtApellido).concat(", usted ");

  if(txtContra.value == txtRepContra.value) {
    document.getElementById('mensaje').innerText +=  " es mayor , mensaje: " + (txtContra) + "-" + txtRepContra
  } else {
    document.getElementById('mensaje').innerText += "La contraseña no concuerdan" ;
  }
}

//
function limpiarForm(evt) {
  evt.preventDefault();
  document.getElementById('formulario').reset();
  document.getElementById('mensaje').innerText = ""
}