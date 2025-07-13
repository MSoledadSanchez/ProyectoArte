//declaras un objeto para los datos de registro
var usuObs = new Object();


//declaramos una variable y la vinculamos al botón Enviar
let btnCrear = document.getElementById('crear');

let btnLimpiar = document.getElementById('limpiar');

btnLimpiar.addEventListener('click', limpiarForm);

btnCrear.addEventListener('click', validarDatos);

//Función para validar los datos ingresados y mostrar mensaje

function validarDatos(evt) {

  //declaramos variables para almacenar los datos de cada campo
  let txtApellido = document.getElementById('apellido').value;
  let txtNombre = document.getElementById('nombre').value;


  let txtUsuario = document.getElementById('usuario').value;
  let txtContra = document.getElementById('pass').value;
  let txtRepContra = document.getElementById('newpass').value;

  console.log("mensaje '" + txtUsuario + "'");

  evt.preventDefault();

  if (txtApellido == "") {
    document.getElementById('mensaje').innerText = "Los campos son obligatorios";
    return
  }
 
  if (txtUsuario.length < 6 ) {
    document.getElementById('mensaje').innerText = "El Usuario debe tener al menos 6 caracteres";
    return
  }

  if(txtContra === txtRepContra) {

    document.getElementById('mensaje').innerText = "Bienvenido/a "  + (txtNombre) + " " + (txtApellido);
  } else {
    document.getElementById('mensaje').innerText += "Las contraseñas que ingreso no concuerdan" ;
    return
  }

  //Si pasa las validaciones llamamos a una función para guardar en el LocalStorage
  usuObs = {usu: txtUsuario,
            con: txtContra,
            ape: txtApellido,
            nom: txtNombre  }


  if (guardarLocalS(usuObs) == true) {
    document.getElementById('mensaje').innerText = "Bienvenido/a "  + (txtNombre) + " " + (txtApellido) + ", puede inciar Seción";
  }

}

//
function limpiarForm(evt) {
  evt.preventDefault();
  document.getElementById('formulario').reset();
  document.getElementById('mensaje').innerText = ""
}


function guardarLocalS(objetoUser) {

  console.log(objetoUser);

  //LocalStorage
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(objetoUser.usu, JSON.stringify(objetoUser));
    return true
  } else {
  return false; }
}

