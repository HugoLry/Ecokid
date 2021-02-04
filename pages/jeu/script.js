$(document).ready(function () {
    // $(function () {
    //     $("a").click(function () {
    //         var link = $(this).attr("href");
    //         $("input, #accueil, h1, h2").css({
    //             "transition": "all 1s ease",
    //             "transform": "translateY(100vh)"
    //         });
    //         $("img.transition-out").css("top", "0vh");
    //         return lancerPage(link);
    //     });

    //     function lancerPage(a) {
    //         redirect(a);
    //         return false;
    //     }

    //     function redirect(lnk) {
    //         setTimeout(function () {
    //             window.location.href = lnk;
    //         }, 2000);
    //     }
    // });
    function reWidth() {
        let long1 = $('#first').innerWidth();
        let long2 = $('#second').innerWidth();
        $('#first,#second').removeAttr('style');
        if (long1 < long2) {
            $('#first').css("width", $('#second').outerWidth() + "px")
            console.log('fait1')
        } else {
            $('#second').css("width", $('#first').outerWidth() + "px")
            console.log('fait2')
        }
        console.log('oui')
    }

    $(window).on('load', function () {
        reWidth()
    });


    $('.reponse1').click(() => {
        $('.choix1').fadeOut(1000);
        $('#texte').text("Oui c'est exactement ce qu'il faut faire pour ne pas polluer la planète. Ramassons-les !");
        $('.div3').fadeIn("slow");
        $('.dechets').css('cursor', 'pointer');
    })

    const savetxt = $('#texte').text();
    const saveimg = $('.div2').css('background-image');

    $('.reponse2').focusin(() => {
        $('.div2').css('background-image', 'url(../../ressources/lif/lifsgauche.png)')
        $('#texte').text('Es-tu sûr de ton choix ?');
    })

    $('.reponse2').focusout(() => {
        $('#texte').text(savetxt)
        $('.div2').css('background-image', saveimg)
    })

    $('.dechets').click(() => {
        if ($('.div3').attr('style') == "display: block;") {
            $('.dechets').fadeOut("slow");
            $('.div3').fadeOut("slow");
            $('#texte').text("Maintenant que nous avons ramassé tous les déchets, qu'allons-nous en faire ?");
            $('.nuages').fadeOut(1000);
            $('.reponse1').attr('class', 'reponse3').text("Utiliser les poubelles de tri");
            $('.reponse2').attr('class', 'reponse4').text("Mettre à la poubelle");

            reWidth();
            $('.choix1').fadeIn(1000);

        }
    })

});