const button = document.querySelector('.favorite-button');

button.addEventListener('click', () => {
  const isFavorite = button.dataset.isFavorite === 'true';
  const icon = button.querySelector('.icon');

  if (isFavorite) {
    // Quitar de favoritos
    button.classList.remove('favorited');
    button.dataset.isFavorite = 'false';
    icon.textContent = '♡'   //'☆'; // Estrella vacía
    localStorage.removeItem('favorito'); // Eliminar del almacenamiento local
  } else {
    // Añadir a favoritos
    button.classList.add('favorited');
    button.dataset.isFavorite = 'true';
    icon.textContent = '♥'   //'★'; // Estrella llena
    localStorage.setItem('favorito', 'true'); // Guardar en almacenamiento local
  }
});

// Restaurar el estado del botón al cargar la página
window.addEventListener('load', () => {
    const isFavorite = localStorage.getItem('favorito') === 'true';
    if (isFavorite) {
        button.classList.add('favorited');
        button.dataset.isFavorite = 'true'; 
        button.querySelector('.icon').textContent = '♥'  // '★';
    }
});