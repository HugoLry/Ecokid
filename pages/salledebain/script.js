$(document).ready(function () {
    $('button').css('opacity', '1');
    const prenom = localStorage.getItem('prenom');
    setTimeout(() => {
        $('.douche').css("width", $('.baignoire').innerWidth() + "px")
    }, 2000);


    $('.baignoire, .douche').click(function () {
        if ($(this).attr("class") == 'douche') {
            $('.div1 p').text(`Très bon choix ${prenom} ! La douche va économiser beaucoup plus d'eau contrairement à un bain !`);
            $('.div2').css('background-image', 'url(../../ressources/lif/lifngauche.png)')
            $('.tochange').last().fadeTo("slow", 0, () => {
                $('.tochange').last().fadeOut(0);
            })
        } else if ($(this).attr("class") == 'baignoire') {
            $('.div1 p').text("La douche aurait économisé beaucoup plus d'eau contrairement à un bain, c'est dommage !")
            $('.div2').css('background-image', 'url(../../ressources/lif/lifsgauche.png)')
            $('.tochange').first().fadeTo("slow", 0, () => {
                $('.tochange').first().fadeOut(0);
            })
        }

        $('.douche, .baignoire').fadeTo("slow", 0, () => {
            $('.douche, .baignoire').fadeOut(0, () => {
                setTimeout(() => {
                    $('.valid').fadeTo("slow", 1);
                }, 500);
            });

        });

    })

    var rep = 0;
    $('.valid').click(() => {
        if (rep == 0) {
            $('.valid').fadeTo("slow", 0, () => {
                $('.valid').fadeOut(0, () => {
                    setTimeout(() => {
                        $('.laisser, .fermer').fadeTo("slow", 1);
                        $('.fermer').css("width", $('.laisser').innerWidth() + "px")
                    }, 500);
                });

            });
            $('#port').css({
                'transition-duration': '1s',
                'transform': 'scale(2)'
            });
            $('.div2').css('background-image', 'url("../../ressources/lif/lifngauche.png")')
            $('.div1 p').text("Place au brossage des dents !");
        }
        if (rep == 1) {
            $('.valid').fadeTo("slow", 0, () => {
                setTimeout(() => {
                    $('.valid').fadeOut(0, () => {
                        $('.eteindre').fadeTo("slow", 1)
                    })
                }, 500);
            });
            $('#port').css({
                'transform': 'scale(1)'
            });
            $('.div1 p').text("Tu n'as pas oublié quelque chose avant de quitter la salle de bain ?");
        }
    })

    $('.laisser, .fermer').click(function () {
        if ($(this).attr('class') == "fermer") {
            $('.div1 p').text("Oui ! Couper l'eau du robinet pendant le brossage de dents permet d'éviter de gaspiller de l'eau.")
            $('.div2').css('background-image', 'url("../../ressources/lif/lifngauche.png")')
        } else if ($(this).attr('class') == "laisser") {
            $('.div1 p').text("En laissant l'eau du robinet couler pendant le brossage de dents, tu gaspilles beaucoup plus d'eau que si tu la coupais !")
            $('.div2').css('background-image', 'url("../../ressources/lif/lifsgauche.png")')
        }
        rep = 1;
        $('.laisser, .fermer').fadeTo("slow", 0, () => {
            setTimeout(() => {
                $('.laisser, .fermer').fadeOut(0, () => {
                    $('.valid').fadeTo("slow", 1);
                });
            }, 500);
        });
    })

    $('.eteindre').click(() => {
        $('.div2').css('background-image', 'url("../../ressources/lif/lifngauche.png")')
        $('.eteindre, .lumiere').fadeTo("slow", 0, () => {
            setTimeout(() => {
                $('.eteindre').fadeOut(0, () => {
                    $('#redirect').fadeTo("slow", 1);
                });
            }, 500);
        });
        $('.div1 p').text("Tu as raison ! Il faut toujours éteindre les lumières lorsque l’on quitte une pièce.");
        $('#port').css({
            'filter': 'brightness(0.2)'
        })
    })
})