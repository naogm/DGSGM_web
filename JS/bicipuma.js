// Este archivo está listo para futuras interacciones JS si se requiere
console.log("Página Bicipuma cargada correctamente");



  function scrollCarousel(direction) {
    const container = document.getElementById('lineamientos-carousel');
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }



