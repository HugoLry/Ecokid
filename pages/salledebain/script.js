$(document).ready(function () {
    $('.elements *').click(function () {
        if ($(this).attr("class") == 'douche') {
            $('.div1 p').html("Très bon choix ! La douche va économiser beaucoup plus d'eau contrairement à un bain !")
        } else if ($(this).attr("class") == 'baignoire') {
            $('.div1 p').text("La douche aurait économisé beaucoup plus d'eau contrairement à un bain, c'est dommage !")
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