$(window).on('load', function () {

    const prenom = localStorage.getItem('prenom');
    $('.prenom').text(prenom);
    const transitionIn = () => {
        $('.transition').css({
            'transition': '1.5s ease-in-out',
            'transform': 'translateY(-' + $('.transition').height() * 1.5 + 'px)'
        });
    };

    window.addEventListener("orientationchange", () => {
        document.location.reload()
    });

    transitionIn();

    $(window).resize(() => {
        setTimeout(() => {
            transitionIn();
        }, 100);
    })

    const transitionOut = () => {
        $('.transition').css({
            'transform': 'translateY(0px)'
        });
    };

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
            document.location.href = "/devsecret/";
        }, 2000);
    })


})