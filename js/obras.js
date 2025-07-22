

let seccionProducto = document.getElementById('seccion_productos');

//creo un contenedor individual para cada producto
let contenedorProductos = document.createElement('div');

//agrego una clase/estilo CSS al contenedor de los productos
contenedorProductos.classList.add('card-tendencia');


const urlParams = new URLSearchParams(window.location.search);
const categoria = urlParams.get('category');

let titulo = document.getElementById('seleccion');
if (categoria == "Todos") {
    titulo.innerText = "Todas las Obras";
}   
else {
    titulo.innerText = categoria + "s";
};


console.log(categoria);

async function cargarJSON() {
  try {
    //a response le asigno lo que me devuelve la consulta a la API que pide todos los productos
    const response = await fetch('../js/obras.json');
    //a data le asigno todos los productos en formato .json
    const data = await response.json();
    // Limpio el contenedor antes de agregar productos
    seccionProducto.innerHTML = '';
    
   
    //console.log(response);

    data.forEach(obra => {
      
      /*
                <div class="card">
                    <img src="../media/pintura1.png" alt="Pintura 1" title="Pintura" itemprop="image" width="100%" height="100%"> 
                    <div  class="cardmolecula"> 
                        <p> <img src="../media/Juliana.png" alt="Juliana" width="42" height="42" style="vertical-align:top">  </p>  
                        <div class="text-container">
                            <p class="line1">Juliana</p>
                            <p class="line2">Fuego en Colores</p>
                        </div>
                        <button class="favorite-button" data-is-favorite="false">
                            <span class="icon">&#9825;</span>  <!-- Icono de estrella vacía por defecto -->
                        </button>
                    </div> 
                </div>

     */      


      if (obra.category == categoria || categoria == "Todos") {
        // Crear la tarjeta del producto
        let card = document.createElement('div');
        card.classList.add('card');
        // Imagen
        let img = document.createElement('img');

        img.id = obra.id;
        img.className = 'obra';
        img.src = obra.image;
        img.alt = obra.titulo;
        img.title = obra.category
        img.width = 300;
        img.height = 300;
        card.appendChild(img);

        //console.log(img)

        // Nombre
        let divMolecula = document.createElement('div');
        divMolecula.classList.add('cardmolecula');

        divMolecula.id = 'nombre';
        divMolecula.setAttribute('name', 'nombre');
        divMolecula.className = 'cardmolecula';
        divMolecula.textContent = obra.name;
        card.appendChild(divMolecula);

        // Creo el p con la imagen del artista
        let elemp = document.createElement('p');

        // Imagen Artista
        let imgArt = document.createElement('img');

        imgArt.id = 'imagen';
        imgArt.className = 'imagen';
        imgArt.src = obra.imagenArt;
        imgArt.alt = obra.artista;
        imgArt.width = 42;
        imgArt.height = 42;
        imgArt.style = "vertical-align:top"

        elemp.appendChild(imgArt);

        

        let divTexto = document.createElement('div');

        divTexto.className = 'text-container'

        let line1 = document.createElement('p')
        line1.className = "line1"
        line1.textContent = obra.artista

        let line2 = document.createElement('p')
        line2.className = "line2"
        line2.textContent = obra.titulo

        divTexto.appendChild(line1)
        divTexto.appendChild(line2)
    

        divMolecula.appendChild(elemp);
        divMolecula.appendChild(divTexto);


        contenedorProductos.appendChild(card);

      //console.log("agregue 1")

     }

    });
    // Agrego el contenedor de productos a la sección principal
    seccionProducto.appendChild(contenedorProductos);

  } catch (error) {
    seccionProducto.innerHTML = '<p class="error">No se pudieron cargar los productos.</p>';
    console.error("Error al obtener productos:", error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cargarJSON();
  // mostrarWishList();
});