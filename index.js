$(document).ready(function () {
    const $customCarousel = $(".custom-carousel");
    const rutaImagenes = 'imagenes/';
    const numImagenes = 38;

    for (let i = 1; i <= numImagenes; i++) {
        const imageUrl = rutaImagenes + `imagen${i}.jpg`;
        const $item = $('<div class="item"></div>').css('background-image', `url(${imageUrl})`);
        $customCarousel.append($item);
    }

    $customCarousel.owlCarousel({
        items: 3,
        loop: true,
        margin: 15,
        nav: true,
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    $(".custom-carousel .item").click(function () {
        $(".custom-carousel .item").not($(this)).removeClass("active");
        $(this).toggleClass("active");
    });

    // Agrega un evento de clic al enlace "CONTACTO"
    $("#contacto-link").click(function (event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Obtiene la posición vertical de la sección "CONTACTO"
        var contactoSection = $("#contacto-content"); // Cambiado el selector al id "contacto-content"
        var contactoSectionPosition = contactoSection.offset().top;

        // Desplázate a la posición de la sección "CONTACTO" suavemente
        $("html, body").animate({
            scrollTop: contactoSectionPosition
        }, 1000, 'swing'); // Puedes ajustar la duración del desplazamiento (en milisegundos) y el efecto de transición según tus preferencias
    });
});
