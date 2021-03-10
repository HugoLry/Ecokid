$(document).ready(function () {
    $('button').click(function () {
        if ($(this).attr("class") == 'ramasser') {
            $('.div1 p').html("Merci d’avoir nettoyé l’habitat des poissons, ils seront tellement heureux maintenant !")
            
            $('.div3').fadeOut(500, () => {
                $('.div3').remove();
            });

            $('.continuer').fadeIn(500, () => {
                $('.continuer').css('opacity', '1')
                $('.continuer').css('cursor', 'pointer')
            });

            $('.parallax-layer').fadeOut(500, () => {
                $('.parallax-layer').remove();
            });

            $('.continuer').click(function(){
                $('.div1 p').html("Merci d’avoir nettoyé l’habitat des poissons, ils seront tellement heureux maintenant !")
            });

            $('#decor').append(
                "<img src='../../ressources/mare/fondPropre.jpg' style='width:100vw; height:100vh;' alt=''></img>"
            );
        }
    })
})