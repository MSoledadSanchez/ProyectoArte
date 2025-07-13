
//declaramos una variable y la vinculamos al botón Iniciar
let btnIniciar = document.getElementById('iniciar');

btnIniciar.addEventListener('click', recLocalS);

function recLocalS(evt) {

  let txtUsuario = document.getElementById('usuarior').value;

  const storeData = localStorage.getItem(txtUsuario);

  // console.log(storeData);

  evt.preventDefault();

  if (storeData) {
      const storeUser = JSON.parse(storeData);
      let txtContra = document.getElementById('passr').value;

      console.log(storeUser["con"], txtContra);

      if (txtContra == storeUser["con"]) {
        console.log("esta el usuario");

        //guardo el Apellido y Nombre para que se vea en la pagina

        localStorage.setItem("UsuarioActual",storeUser["nom"] + " " + storeUser["ape"] );
        window.location.href = "../index.html";
      }
  
  } else {
    console.log('No existe el usuario');
    document.getElementById('mensajer').innerText = "Usuario no registrado"
  }


}
