function abrirLightbox(imagen) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = imagen.src;
  lightbox.style.display = 'flex';
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
