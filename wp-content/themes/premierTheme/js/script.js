var $lightbox = $('.lightbox'); // L'élément HTML
console.warn("!!!!!!!! Leny le crack");
// Ouvrir la lightbox
$('.acf-gallery a').click(function(e) {
    e.preventDefault(); // On empêche le changement de page
    var url = $(this).attr('href'); // On récupère l'URL de l'image dans href

    // On applique l'image en fond
    $lightbox.css('background-image', 'url(' + url + ')'); 
    $lightbox.fadeIn(); // Et on fait apparaitre la lightbox
});

// Fermer la lightbox
$lightbox.click(function () {
    $lightbox.fadeOut();
});