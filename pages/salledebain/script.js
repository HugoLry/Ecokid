$(document).ready(function () {

    $(':is(.douche,.baignoire)').css('opacity', '1');
    setTimeout(() => {
        $('.douche').css("width", $('.baignoire').innerWidth() + "px")
    }, 10);


    $('.elements *').click(function () {
        if ($(this).attr("class") == 'douche') {
            $('.div1 p').html("Très bon choix ! La douche va économiser beaucoup plus d'eau contrairement à un bain !")
        } else if ($(this).attr("class") == 'baignoire') {
            $('.div1 p').text("La douche aurait économisé beaucoup plus d'eau contrairement à un bain, c'est dommage !")
        }
        const element = $(this).attr("class");
        console.log(`url("../../ressources/salledebain/sdb${element}.png")`)
        // $('body').css({
        //     'background-image': `url("../../ressources/salledebain/salledebain${element}.png")`,
        //     'background-size': 'contain',
        //     'background-repeat': 'no-repeat',
        //     'background-position-x': 'center',
        //     'background-position-y': 'bottom'
        // })
        $('.tochange').attr('src',`../../ressources/salledebain/sdb${element}.png`)
        setTimeout(() => {
            $(`.choix`).css('opacity', '0')
            setTimeout(() => {
                $(`.choix`).remove()
            }, 2000);
        }, 500)
    })



})