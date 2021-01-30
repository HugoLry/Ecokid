$('.elements *').click(function () {
    const element = $(this).attr("class");
    $('body').css({
        'background-image': `url("../../ressources/salledebain/salledebain${element}.jpg")`,
        'background-size': 'contain',
        'background-repeat': 'no-repeat',
        'background-position-x': 'center',
        'background-position-y': 'bottom'
    })
    setTimeout(() => {
        $(`.choix1`).css('opacity','0')
        setTimeout(() => {
            $(`.choix1`).remove()
        }, 2000);
    }, 500)
})

    $('.douche').css("width",$('.baignoire').innerWidth()+"px")

