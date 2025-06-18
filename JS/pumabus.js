// =============================
// Cambio de mapa por ruta
// =============================
const rutas = document.querySelectorAll('.ruta');
const mapaRuta = document.getElementById('mapa-ruta');
const mapaImagen = document.getElementById('mapa-imagen');

const mapas = {
  ruta1: 'img/pumabus/rutas/Ruta_1.jpg',
  ruta2: 'img/pumabus/rutas/Ruta_2.jpg',
  ruta3: 'img/pumabus/rutas/Ruta_3.jpg',
  ruta4: 'img/pumabus/rutas/Ruta_4.jpg',
  ruta5: 'img/pumabus/rutas/Ruta_5.jpg',
  ruta6: 'img/pumabus/rutas/Ruta_6.jpg',
  ruta7: 'img/pumabus/rutas/Ruta_7.jpg',
  ruta8: 'img/pumabus/rutas/Ruta_8.jpg',
  ruta9: 'img/pumabus/rutas/Ruta_9.jpg',
  ruta10: 'img/pumabus/rutas/Ruta_10.jpg',
  ruta11: 'img/pumabus/rutas/Ruta_11.jpg',
  ruta12: 'img/pumabus/rutas/Ruta_12.jpg',
  ruta13: 'img/pumabus/rutas/Ruta_13.jpg',
};

let rutaVisible = null; // Para controlar cuál está activa

if (rutas && mapaRuta && mapaImagen) {
  rutas.forEach((ruta) => {
    ruta.addEventListener('click', () => {
      const nombreRuta = ruta.getAttribute('data-ruta');

      // Si ya está visible esa misma ruta, se oculta
      if (rutaVisible === nombreRuta) {
        mapaRuta.style.display = 'none';
        mapaImagen.src = '';
        rutaVisible = null;
        return;
      }

      // Mostrar nueva imagen
      if (mapas[nombreRuta]) {
        mapaImagen.classList.remove('visible');
        mapaImagen.onload = () => mapaImagen.classList.add('visible');
        mapaImagen.src = mapas[nombreRuta];
        mapaRuta.style.display = 'block';
        rutaVisible = nombreRuta;
      }
    });
  });
}
