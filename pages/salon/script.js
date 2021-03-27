$(document).ready(function () {
    const prenom = localStorage.getItem('prenom');
    $('.prenom').text(prenom)

    $('.valid').click(() => {
        $('.valid, .div1').fadeOut("slow")
        $('#port').css({
            'transform': 'scale(3)'
        });
        $('.transition').css({
            'transition': '1s ease-in-out 0.5s',
            'transform': 'translateY(0px)'
        });
    })
    $('.transition').css({
        'transition': '1.5s ease-in-out',
        'transform': 'translateY(-' + $('.transition').height() + 'px)'
    });


})