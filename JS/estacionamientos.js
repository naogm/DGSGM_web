// Si en el futuro deseas animaciones u otras interacciones, puedes añadirlas aquí.
document.addEventListener('DOMContentLoaded', () => {
  console.log("Estacionamientos page loaded.");
});




document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll('.card');
        cards.forEach(card => card.style.animationPlayState = 'running');
        observer.unobserve(entry.target); // Solo animar una vez
      }
    });
  }, { threshold: 0.3 });

  const infoGrid = document.querySelector('.info-grid');
  if (infoGrid) {
    observer.observe(infoGrid);
  }
});
