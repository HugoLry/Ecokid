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
    function reWidth(i) {
        let first = $('.reponse' + i);
        let second = $('.reponse' + (i + 1));
        let long1 = first.innerWidth();
        let long2 = second.innerWidth();
        $('.reponse' + i).removeAttr('style');
        if (long1 < long2) {
            first.css("width", second.outerWidth() + "px")
            console.log('fait1')
        } else {
            second.css("width", first.outerWidth() + "px")
            console.log('fait2')
        }
        console.log('oui')
    }

    $(window).on('load', function () {
        reWidth(1)
    });

    $('.reponse1').click(() => {
        $('.choix1').fadeOut(500, () => {
            $('.reponse1,.reponse2').remove();
        });
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
            $('.nuages').fadeOut(500);
            $('.choix1,.reponse3,.reponse4').fadeIn(500, () => {
                reWidth(3);
                $('.poubelles').width($('.reponse3').outerWidth());
                $('.poubelles').first().offset({
                    top: $('.reponse3').offset().top,
                    left: $('.reponse3').offset().left
                });
                $('.poubelles').last().offset({
                    top: $('.reponse4').offset().top,
                    left: $('.reponse4').offset().left
                });
                $('.poubelles').fadeIn("slow")

                setTimeout(() => {
                    $('.poubelles').css('transform', 'translateY(-' + ($('.poubelles').first().height() + 10) + 'px)')
                }, 1);
            })


        }
    })

    $('.reponse3').click(() => {
        $('.choix1').fadeOut(500, () => {
            $('.choix1').empty();
        })
        $('#texte').text("Oui très bien ! Trier les déchets va permettre de les recycler et de les transformer en de nouveaux objets.");
    })

    $('.reponse4').click(() => {
        $('.choix1').fadeOut(500, () => {
            $('.choix1').empty();
        })
        $('#texte').text("Mettre tous les déchets à la poubelle n'est pas idéal, les trier va permettre de les recycler et de les transformer en de nouveaux objets.");
        $('.div2').css('background-image', 'url(../../ressources/lif/lifsgauche.png)')
    })
});