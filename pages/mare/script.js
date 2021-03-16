$(document).ready(function () {
    $('button').click(function () {
        if ($(this).attr("class") == 'ramasser') {
            $(this).fadeOut("slow");

            $('#sale, #sale2').fadeOut("slow");

            $('.div1 p').html("Merci d’avoir nettoyé l’habitat des poissons, ils seront tellement heureux maintenant !");

            $('#propre, #propre2').fadeIn("slow");

            $('.continuer').fadeIn("slow", function () {
                $(this).fadeTo(500,1);
            })
        }
    })
})