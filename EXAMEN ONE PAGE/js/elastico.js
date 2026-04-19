//Elasticidad botones menu
$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        speed: 500,
        easing: 'easeInOutCubic',
    });

    // Activar evento del boton scrolltop
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });

});


//desaparece el boton ScrollTop al cargar la pagina web
const botonScrollTop = document.getElementById("flechabtn");

if (botonScrollTop) {
    botonScrollTop.style.display = "none";
}

//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};


function scrollFunction() {
    if (!botonScrollTop) {
        return;
    }

    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        botonScrollTop.style.display = "block";
    } else {
        botonScrollTop.style.display = "none";
    }
}