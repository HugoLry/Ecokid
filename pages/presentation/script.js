$(window).on('load', function () {
    $('.begin').mousedown(()=>{
        localStorage.setItem('prenom', $('#prenom').val())
    })

    const transitionIn = () => {
        $('.transition').css({
            'transition': '1.5s ease-in-out',
            'transform': 'translateY(-' + $('.transition').height() + 'px)'
        });
    };

    transitionIn();

    const transitionOut = () => {
        $('.transition').css({
            'transform': 'translateY(0px)'
        });
    };

    $('#logo').click(() => {
        transitionOut();
        setTimeout(() => {
            document.location.href = "/";
        }, 2000);
    })
})