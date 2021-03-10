$(document).ready(function () {
    $('button').click(function () {
        if ($(this).attr("class") == 'cookie_maison') {
            $('.div1 p').html("C’est vrai ! Il est mieux de faire sa propre nourriture que de manger de la nourriture industrielle pour éviter de jeter trop de déchets.")
            
            $('.cookie_maison, .granola').fadeOut(500, () => {
                $('.cookie_maison, .granola').remove();
            });

            $('.continuer').fadeIn(500, () => {
                $('.continuer').css('opacity', '1')
            });

            $('.continuer').click(function(){
                $('.div1 p').html("J’ai soif ! Que veux-tu boire ? Clique sur ce qu’il faudrait boire")

                $('.continuer').fadeOut(500, () => {
                    $('.continuer').remove();
                });

                $('.bouteille').fadeIn(500, () => {
                    $('.bouteille').css('opacity', '1')
                });

                $('.carafe').fadeIn(500, () => {
                    $('.carafe').css('opacity', '1')
                });
            });

            $('.bouteille').click(function(){
                $('.div1 p').html("Une fois la bouteille vide, il faudra la jeter contrairement à la carafe, cela va rajouter encore des emballages à la poubelle...")

                $('.continuer2').fadeIn(500, () => {
                    $('.continuer2').css('opacity', '1')
                });

                $('.bouteille').fadeOut(500, () => {
                    $('.bouteille').remove();
                });

                $('.carafe').fadeOut(500, () => {
                    $('.carafe').remove();
                });
            });

            $('.carafe').click(function(){
                $('.div1 p').html("Très bien ! La carafe d’eau va permettre de ne pas jeter la bouteille vide.")

                $('.continuer2').fadeIn(500, () => {
                    $('.continuer2').css('opacity', '1')
                });

                $('.bouteille').fadeOut(500, () => {
                    $('.bouteille').remove();
                });

                $('.carafe').fadeOut(500, () => {
                    $('.carafe').remove();
                });
            });


        } else if ($(this).attr("class") == 'granola') {
            $('.div1 p').text("J’aurais bien aimé manger des cookies que nous avons fait nous même, cela aurait permis d’éviter de jeter trop d’emballages à la poubelle… et de nous amuser un peu !")

            $('.cookie_maison, .granola').fadeOut(500, () => {
                $('.cookie_maison, .granola').remove();
            });

            $('.continuer').fadeIn(500, () => {
                $('.continuer').css('opacity', '1')
            });

            $('.continuer').click(function(){
                $('.div1 p').html("J’ai soif ! Que veux-tu boire ? Clique sur ce qu’il faudrait boire")

                $('.continuer').fadeOut(500, () => {
                    $('.continuer').remove();
                });

                $('.bouteille').fadeIn(500, () => {
                    $('.bouteille').css('opacity', '1')
                });

                $('.carafe').fadeIn(500, () => {
                    $('.carafe').css('opacity', '1')
                });
            });

            $('.bouteille').click(function(){
                $('.div1 p').html("Une fois la bouteille vide, il faudra la jeter contrairement à la carafe, cela va rajouter encore des emballages à la poubelle...")

                $('.continuer2').fadeIn(500, () => {
                    $('.continuer2').css('opacity', '1')
                });

                $('.bouteille').fadeOut(500, () => {
                    $('.bouteille').remove();
                });

                $('.carafe').fadeOut(500, () => {
                    $('.carafe').remove();
                });
            });

            $('.carafe').click(function(){
                $('.div1 p').html("Très bien ! La carafe d’eau va permettre de ne pas jeter la bouteille vide.")

                $('.continuer2').fadeIn(500, () => {
                    $('.continuer2').css('opacity', '1')
                });

                $('.bouteille').fadeOut(500, () => {
                    $('.bouteille').remove();
                });

                $('.carafe').fadeOut(500, () => {
                    $('.carafe').remove();
                });
            });
        }

        const element = $(this).attr("class");
        $('body').css({
            'background-image': `url("../../ressources/salledebain/salledebain${element}.jpg")`,
            'background-size': 'contain',
            'background-repeat': 'no-repeat',
            'background-position-x': 'center',
            'background-position-y': 'bottom'
        })
        setTimeout(() => {
            $(`.choix1`).css('opacity', '0')
            setTimeout(() => {
                $(`.choix1`).remove()
            }, 2000);
        }, 500)
    })

    $('.douche').css("width", $('.baignoire').innerWidth() + "px")
})