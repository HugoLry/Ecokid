$(document).ready(function () {
    function reWidth(i) {
        let first = $('.reponse' + i);
        let second = $('.reponse' + (i + 1));
        let long1 = first.innerWidth();
        let long2 = second.innerWidth();

        $('.reponse' + i).removeAttr('style');
        if (long1 < long2) {
            first.css("width", second.outerWidth() + "px")
        } else {
            second.css("width", first.outerWidth() + "px")
        }
    }

    $(window).on('load', function () {
        reWidth(1)
    });

    $('.reponse1').click(() => {
        $('.reponse1,.reponse2').fadeOut(500, () => {
            $('.reponse1,.reponse2').remove();
        });
        setTimeout(() => {
            $('.validation').fadeIn(500, () => {
                $('.validation').css('opacity', '1')
            });
        }, 700);
        $('#texte').text("Oui c'est exactement ce qu'il faut faire pour ne pas polluer la planète. Ramassons-les !");
    })

    var n = 0;

    $('.validation').click(() => {
        if (n == 0) {
            $('.div3').fadeIn("slow");
            $('.dechets').css('cursor', 'pointer');
            $('.validation').fadeOut("slow", () => {
                $('.validation').css('opacity', '0')
                n = 1;
            });
        }

        if (n == 1) {
            $('.poubelles').css('opacity', '0');
            setTimeout(() => {
                $('.poubelles').remove()
            }, 1000);
            $('.validation').fadeOut("slow", () => {
                $('.validation').css('opacity', '0')
                $('.reponse5,.reponse6').fadeIn(500, () => {
                    $('.reponse5, .reponse6').css('opacity', '1')
                });
                setTimeout(() => {
                    reWidth(5);
                    $('.velo, .voiture').width($('.reponse5').outerWidth());
                    $('.velo').offset({
                        top: $('.reponse5').offset().top,
                        left: $('.reponse5').offset().left
                    });
                    setTimeout(() => {
                        $('.voiture').offset({
                            top: $('.reponse6').offset().top,
                            left: $('.reponse6').offset().left
                        });
                    }, 10);

                    $('#transport').fadeIn(100, () => {
                        $('#transport').css('opacity', '1');
                    });

                    setTimeout(() => {
                        $('#transport').css('transform', 'translateY(-' + ($('#transport').height() + 10) + 'px)')
                    }, 1);
                }, 10);
            });
            $('#texte').css('font-size', '1.3vw').text('Maintenant que nous avons nettoyé cet endroit, nous allons nous rendre à la mare. Quel moyen de transport allons-nous utiliser ?');
            $('#fond').fadeOut("slow");
        }
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
            $('.div3').fadeOut("slow", () => {
                $('.div3').remove();
            });
            $('#texte').text("Maintenant que nous avons ramassé tous les déchets, qu'allons-nous en faire ?");
            $('.nuages').fadeOut(500);
            $('.reponse3,.reponse4').fadeIn(500, () => {
                $('.reponse3, .reponse4').css('opacity', '1')
            });
            setTimeout(() => {
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
                $('.poubelles').fadeIn(100, () => {
                    $('.poubelles').css('opacity', '1');
                });

                setTimeout(() => {
                    $('.poubelles').css('transform', 'translateY(-' + ($('.poubelles').first().height() + 10) + 'px)')
                }, 1);
            }, 10);



        }
    })

    $('.reponse3').click(() => {
        $('.reponse3, .reponse4').fadeOut("slow")
        $('#texte').text("Oui très bien ! Trier les déchets va permettre de les recycler et de les transformer en de nouveaux objets.");
        $('.poubelles').last().css('opacity', '0');
        setTimeout(() => {
            $('.poubelles').last().fadeOut("slow", () => {
                $('.validation').fadeIn(500, () => {
                    $('.validation').css('opacity', '1')
                });
            });
        }, 500);

    })

    $('.reponse4').click(() => {
        $('.reponse3, .reponse4').fadeOut("slow")
        $('#texte').css('font-size', '1.3vw').text("Mettre tous les déchets à la poubelle n'est pas idéal, les trier va permettre de les recycler et de les transformer en de nouveaux objets.");
        $('.div2').css('background-image', 'url(../../ressources/lif/lifsgauche.png)')
        $('.poubelles').first().css('opacity', '0');
        setTimeout(() => {
            $('.poubelles').first().fadeOut("slow", () => {
                $('.validation').fadeIn(500, () => {
                    $('.validation').css('opacity', '1')
                });
            });
        }, 500);

    })

    $('.reponse5').click(() => {
        $('#texte').css('font-size', '1.4vw');
        $('.reponse5, .reponse6, .voiture').fadeOut("slow", () => {
            $('.validation').fadeIn(500, () => {
                $('.validation').css('opacity', '1')
            });
        });
        $('#texte').text("Très bon choix ! Le vélo ne va pas polluer contrairement à la voiture. En plus, c'est beaucoup plus amusant !");
    })

    $('.reponse6').click(() => {
        n = 2;
        $('#texte').css('font-size', '1.4vw');
        $('.velo').fadeTo(600, 0)
        $('.reponse5, .reponse6').fadeOut("slow", () => {
            $('#redirect').fadeIn(500)
        });
        $('#texte').text("La voiture pollue beaucoup plus que le vélo et c'est beaucoup moins amusant...");
    })
});