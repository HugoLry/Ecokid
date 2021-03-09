$(document).ready(function () {
    $('button').css('opacity', '1');
    const prenom = sessionStorage.getItem('prenom');
    setTimeout(() => {
        $('.douche').css("width", $('.baignoire').innerWidth() + "px")
    }, 2000);


    $('.baignoire').add('.douche').click(function () {
        if ($(this).attr("class") == 'douche') {
            $('.div1 p').text(`Très bon choix ${prenom} ! La douche va économiser beaucoup plus d'eau contrairement à un bain !`);
            $('.tochange').last().fadeOut("slow")
        } else if ($(this).attr("class") == 'baignoire') {
            $('.div1 p').text("La douche aurait économisé beaucoup plus d'eau contrairement à un bain, c'est dommage !")
            $('.tochange').first().fadeOut("slow")
        }

        $(':is(.douche, .baignoire)').fadeOut("slow", () => {
            $('.valid').fadeIn("slow");
        });

    })

    var rep = 0;
    $('.valid').click(() => {
        if (rep == 0) {
            $('.valid').fadeOut("slow");
            rep = 1;
            $('#port').css({
                'transition-duration': '1s',
                'transform': 'scale(2)'
            })
        }
    })
    $('body').click(() => {
        // if (rep == 1) {
        //     $('#port').css({
        //         'transform': 'scale(1)'
        //     })
        // }
    })


})