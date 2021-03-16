$(document).ready(function () {
    $('.reponse1').click(() => {
        $('#texte').text('Il est mieux de faire sa propre nourriture que de manger de la nourriture industrielle pour éviter de jeter trop de déchets.');
        $('.reponse1, .reponse2, #granola').fadeOut("slow", () => {
            setTimeout(() => {
                $('#valid').fadeIn("slow");
            }, 500);
        })
    })

    $('.reponse2').click(() => {
        $('#texte').text('J\'aurais bien aimé manger des cookies que nous avons fait nous même, cela aurait permis d\'éviter de jeter trop d\'emballages à la poubelle... et de nous amuser un peu !')
        $('.reponse1, .reponse2, #cookies').fadeOut("slow", () => {
            setTimeout(() => {
                $('#valid').fadeIn("slow");
            }, 500);
        })
    })

    $('#valid').click(() => {
        $('#valid').fadeOut("slow", () => {
            setTimeout(() => {
                $('.reponse3, .reponse4').fadeIn("slow")
                $('#texte').text('Je commence à avoir soif ! Que veux-tu boire ?')
            }, 500);
        })
    })

    $('.reponse3').click(() => {
        $('#texte').text('Très bien ! La carafe d’eau va permettre de ne pas jeter la bouteille vide.');
        $('.reponse3, .reponse4, #bouteille').fadeOut("slow", () => {
            setTimeout(() => {
                $('#redirect').fadeIn("slow");
            }, 500);
        })
    })

    $('.reponse4').click(() => {
        $('#texte').text('Une fois la bouteille vide, il faudra la jeter contrairement à la carafe. Cela va rajouter encore des emballages à la poubelle...')
        $('.reponse3, .reponse4, #carafe').fadeOut("slow", () => {
            setTimeout(() => {
                $('#redirect').fadeIn("slow");
            }, 500);
        })
    })
});

// $(document).ready(function () {
//     $('button').click(function () {
//         if ($(this).attr("class") == 'cookie_maison') {
//             $('.div1 p').text("C\'est vrai ! Il est mieux de faire sa propre nourriture que de manger de la nourriture industrielle pour éviter de jeter trop de déchets.")

//             $('.cookie_maison, .granola').fadeOut(500, () => {
//                 $('.cookie_maison, .granola').remove();
//             });

//             $('.continuer').fadeIn(500, () => {
//                 $('.continuer').css('opacity', '1')
//             });

//             $('.continuer').click(function () {
//                 $('.div1 p').text("J\'ai soif ! Que veux-tu boire ? Clique sur ce qu\'il faudrait boire")

//                 $('.continuer').fadeOut(500, () => {
//                     $('.continuer').remove();

//                     $('.bouteille, .carafe').fadeIn(500, () => {
//                         $('.bouteille, .carafe').css('opacity', '1')
//                     });
//                 });
//             });

//             $('.bouteille').click(function () {
//                 $('.div1 p').text("Une fois la bouteille vide, il faudra la jeter contrairement à la carafe, cela va rajouter encore des emballages à la poubelle...")

//                 $('.continuer2').fadeIn(500, () => {
//                     $('.continuer2').css('opacity', '1')

//                     $('.bouteille, .carafe').fadeOut(500, () => {
//                         $('.bouteille, .carafe').remove();
//                     });
//                 });
//             });

//             $('.carafe').click(function () {
//                 $('.div1 p').text("Très bien ! La carafe d\'eau va permettre de ne pas jeter la bouteille vide.")

//                 $('.continuer2').fadeIn(500, () => {
//                     $('.continuer2').css('opacity', '1')

//                     $('.bouteille, .carafe').fadeOut(500, () => {
//                         $('.bouteille, .carafe').remove();
//                     });
//                 });
//             });


//         } else if ($(this).attr("class") == 'granola') {
//             $('.div1 p').text("J\'aurais bien aimé manger des cookies que nous avons fait nous même, cela aurait permis d\'éviter de jeter trop d\'emballages à la poubelle… et de nous amuser un peu !")

//             $('.cookie_maison, .granola').fadeOut(500, () => {
//                 $('.cookie_maison, .granola').remove();
//             });

//             $('.continuer').fadeIn(500, () => {
//                 $('.continuer').css('opacity', '1')
//             });

//             $('.continuer').click(function () {
//                 $('.div1 p').text("J\'ai soif ! Que veux-tu boire ? Clique sur ce qu\'il faudrait boire")

//                 $('.continuer').fadeOut(500, () => {
//                     $('.continuer').remove();

//                     $('.bouteille, .carafe').fadeIn(500, () => {
//                         $('.bouteille, .carafe').css('opacity', '1')
//                     });
//                 });
//             });

//             $('.bouteille').click(function () {
//                 $('.div1 p').text("Une fois la bouteille vide, il faudra la jeter contrairement à la carafe, cela va rajouter encore des emballages à la poubelle...")

//                 $('.continuer2').fadeIn(500, () => {
//                     $('.continuer2').css('opacity', '1')

//                     $('.bouteille, .carafe').fadeOut(500, () => {
//                         $('.bouteille, .carafe').remove();
//                     });
//                 });
//             });

//             $('.carafe').click(function () {
//                 $('.div1 p').text("Très bien ! La carafe d\'eau va permettre de ne pas jeter la bouteille vide.")

//                 $('.continuer2').fadeIn(500, () => {
//                     $('.continuer2').css('opacity', '1')

//                     $('.bouteille, .carafe').fadeOut(500, () => {
//                         $('.bouteille, .carafe').remove();
//                     });
//                 });
//             });
//         }
//     })
// })