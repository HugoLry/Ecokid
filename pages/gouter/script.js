$(document).ready(function () {
    $('button').click(function () {
        if ($(this).attr("class") == 'cookie_maison') {
            $('.div1 p').html("C’est vrai ! Il est mieux de faire sa propre nourriture que de manger de la nourriture industrielle pour éviter de jeter trop de déchets.")

            $('.div3').css({'display': 'block', 'opacity': 'initial', 'margin-top': '90vh', 'width': 'max-content', 'height': 'max-content', 'pointer-events': 'auto'})

        } else if ($(this).attr("class") == 'granola') {
            $('.div1 p').text("J’aurais bien aimé manger des cookies que nous avons fait nous même, cela aurait permis d’éviter de jeter trop d’emballages à la poubelle… et de nous amuser un peu !")

            $('.div3').css({'display': 'block', 'opacity': 'initial', 'margin-top': '90vh', 'width': 'max-content', 'height': 'max-content', 'pointer-events': 'auto'})
        }

        if($(this).attr("class") == 'div3'){
            $('.div1 p').text("J’ai soif ! Que veux-tu boire ? Clique sur ce qu’il faudrait boire")
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