$(window).on('load', function () {
    const prenom = localStorage.getItem('prenom');
    $('.prenom').text(prenom);
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

    const BonneReponse = () => localStorage.setItem('score', parseInt(localStorage.getItem('score')) + 1);

    $('#redirect').click(function (e) {
        e.preventDefault();
        let link = $(this).attr('href');
        transitionOut();
        setTimeout(() => {
            document.location.href = link;
        }, 2000);
    })

    $('#logo').click(() => {
        transitionOut();
        setTimeout(() => {
            document.location.href = "/";
        }, 2000);
    })
})