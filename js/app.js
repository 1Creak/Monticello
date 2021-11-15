'use strict'
$(document).ready(function () {
    $('.single-item').slick({
        slidesToShow: 1,
        dots: true,
        arrows: false,
    });
});

$(document).ready(function () {
    $('.single-item-second').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        arrows: true,
    });
});

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".header__menu").style.fontSize = "12px";
    } else {
        document.querySelector(".header__menu").style.fontSize = "15px";
    }
}

$('a[href^="#"').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.querySelector("#map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

