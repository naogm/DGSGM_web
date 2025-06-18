// ===================== FUNCIÓN GENERAL DE CARRUSEL =====================

function configurarCarrusel(slideContainer, slides, prevBtn, nextBtn) {
    if (!slides.length) return;
    let counter = 0;

    function updateSlide() {
        const width = slides[0].clientWidth;
        slideContainer.style.transform = `translateX(${-width * counter}px)`;
    }

    prevBtn.addEventListener('click', () => {
        counter = counter <= 0 ? slides.length - 1 : counter - 1;
        updateSlide();
    });

    nextBtn.addEventListener('click', () => {
        counter = counter >= slides.length - 1 ? 0 : counter + 1;
        updateSlide();
    });

    window.addEventListener('resize', updateSlide); // Ajustar al redimensionar
}

// Inicialización de ambos carruseles
const carouselSlide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img');
const prevButton = document.querySelector('button.prev');
const nextButton = document.querySelector('button.next');

const nuevoCarouselSlide = document.querySelector('#nuevo-carrusel .carousel-slide');
const nuevoSlides = document.querySelectorAll('#nuevo-carrusel .carousel-slide img');
const nuevoPrevButton = document.querySelector('#nuevo-carrusel button.prev');
const nuevoNextButton = document.querySelector('#nuevo-carrusel button.next');

configurarCarrusel(carouselSlide, slides, prevButton, nextButton);
configurarCarrusel(nuevoCarouselSlide, nuevoSlides, nuevoPrevButton, nuevoNextButton);


// ===================== MENÚ DE NAVEGACIÓN =====================
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');
const menuToggle = document.getElementById('menu-toggle');

function toggleMenu() {
    navMenu.classList.toggle('active');
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
});


// ===================== SECCIÓN DE ARCHIVOS PDF =====================
const archivosLista = document.querySelector('.archivos-lista ul');
const archivos = [
    { nombre: 'Archivo 1', enlace: '#archivo1' },
    { nombre: 'Archivo 2', enlace: '#archivo2' },
    { nombre: 'Archivo 3', enlace: '#archivo3' },
    { nombre: 'Archivo 4', enlace: '#archivo4' },
];

if (archivosLista) {
    archivos.forEach(archivo => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = archivo.enlace;
        a.textContent = archivo.nombre;
        li.appendChild(a);
        archivosLista.appendChild(li);
    });
}


// ===================== CÓDIGO RESPONSIVO =====================
function resizeCarousel() {
    const carouselWidth = document.querySelector('#nuevo-carrusel')?.offsetWidth || 0;
    const isSmall = carouselWidth < 600;

    const setButtonSize = (btn, size) => {
        if (btn) btn.style.fontSize = size;
    };

    setButtonSize(prevButton, isSmall ? '1.5rem' : '2.5rem');
    setButtonSize(nextButton, isSmall ? '1.5rem' : '2.5rem');
    setButtonSize(nuevoPrevButton, isSmall ? '1.5rem' : '2.5rem');
    setButtonSize(nuevoNextButton, isSmall ? '1.5rem' : '2.5rem');
}

window.addEventListener('resize', resizeCarousel);
resizeCarousel();



