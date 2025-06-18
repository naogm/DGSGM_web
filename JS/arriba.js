$(document).ready(function() {
    
    // Al hacer clic en el botón "ir-arriba", desplazar hacia la parte superior
    $('.ir-arriba').click(function() {
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
    
    // Al hacer scroll en la ventana
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.ir-arriba').slideDown(300);  // Muestra el botón
        } else {
            $('.ir-arriba').slideUp(300);  // Oculta el botón
        } 
    });
});
