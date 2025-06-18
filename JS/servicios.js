// Animaciones de entrada para secciones al cargar
document.addEventListener("DOMContentLoaded", () => {
  const secciones = document.querySelectorAll("main section");

  secciones.forEach((seccion, index) => {
    seccion.style.opacity = 0;
    seccion.style.transform = "translateY(20px)";
    setTimeout(() => {
      seccion.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      seccion.style.opacity = 1;
      seccion.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
