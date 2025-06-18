document.addEventListener("DOMContentLoaded", () => {
  // === Animación de entrada ===
  const secciones = document.querySelectorAll("main section");

  secciones.forEach((seccion, index) => {
    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(20px)";
    seccion.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    setTimeout(() => {
      seccion.style.opacity = "1";
      seccion.style.transform = "translateY(0)";
    }, 200 * index);
  });

  // === Carrusel ===
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carrusel-slide");
  const prevBtn = document.querySelector(".carrusel-btn.prev");
  const nextBtn = document.querySelector(".carrusel-btn.next");
  let current = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }
  
  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
  }

  function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
  }

  // Eventos para los botones
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  showSlide(current);  // Mostrar la primera al cargar
  startAutoSlide();    // Iniciar cambio automático
});


  showSlide(current); // Mostrar slide inicial
});
