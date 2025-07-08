/*
En este archivo vamos a definir el comportamiento del
formulario , vamos a extraer los valores de los campos 
(texto y númerico)
Y por último vamos a mostrar un mensaje debajo del form
*/

//declaramos variables para almacenar los datos de cada campo
let txtNombre = document.getElementById('nombre').value;
let txtApellido = document.getElementById('apellido').value;
let edad = document.getElementById('edad').value;

let mensajeUsuario = document.getElementById('mensajeUsuario').value;

//declaramos una variable y la vinculamos al botón Enviar
let btn = document.getElementById('enviar');

let btnLimpiar = document.getElementById('limpiar');

btnLimpiar.addEventListener('click', limpiarForm);

//Aplicamos al botón el evento/método addEventListener()
btn.addEventListener('click', mostrarMensaje);

//Función
//En esta función creamos un mensaje y le agregamos los valores
//extraidos de los campos del formulario
//Y por último hacemos una validación de edad y mostramos un mensaje.
function mostrarMensaje(evt) {
  evt.preventDefault();
  document.getElementById('mensaje').innerText = 
  "Bienvenido/a ".concat(txtNombre + ", " + txtApellido).concat(", usted ");
  if(edad > 17) {
    document.getElementById('mensaje').innerText +=  " es mayor , mensaje: " + mensajeUsuario;
  } else {
    document.getElementById('mensaje').innerText += " es menor , mensaje: " + mensajeUsuario;
  }
}

//
function limpiarForm(evt) {
  evt.preventDefault();
  document.getElementById('formulario').reset();
}