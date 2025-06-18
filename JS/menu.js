// Menú desplegable
let btnMenu = document.getElementById('btnmenu');
let menu = document.getElementById('menu');
if (btnMenu && menu) {
    btnMenu.addEventListener('click', function() {
        'use strict';
        menu.classList.toggle('mostrar');
    });
}

// Carrusel de imágenes
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.carrusel-imagenes');
if (prev && next && slider) {
    prev.addEventListener('click', () => {
        slider.scrollLeft -= 300;
    });

    next.addEventListener('click', () => {
        slider.scrollLeft += 300;
    });
}

// Modal
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0]; // Asegúrate de tener este elemento en el HTML
let modal = document.querySelectorAll(".modal")[0]; // Asegúrate de tener este elemento en el HTML
let modalC = document.querySelectorAll(".modal-container")[0]; // Asegúrate de tener este elemento en el HTML

if (abrir && modal && modalC) {
    abrir.addEventListener("click", function(e) {
        e.preventDefault();
        modalC.style.opacity = "1";
        modalC.style.visibility = "visible";
        modal.classList.toggle("modal-close");
    });

    if (cerrar) {
        cerrar.addEventListener("click", function() {
            modal.classList.toggle("modal-close");
            setTimeout(function() {
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            }, 900);
        });
    }

    // Cerrar el modal si se hace clic fuera de él
    window.addEventListener("click", function(e) {
        if (e.target === modalC) {
            modal.classList.toggle("modal-close");
            setTimeout(function() {
                modalC.style.opacity = "0";
                modalC.style.visibility = "hidden";
            }, 900);
        }
    });
}
