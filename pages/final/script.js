$(document).ready(function () {
    $('.fenetre').css({
        'width': (window.innerWidth - 60) + 'px',
        'height': (window.innerHeight - 30) + 'px'
    })
    const prenom = localStorage.getItem('prenom');
    const score = localStorage.getItem('score');
    $('.prenom').text(prenom)
    if (score > 7) {
        $('.div1 p').text('Nous avons bien travaillé mais pas tous nos choix ont été justes pour soigner entièrement la planète.');
        $('.rep1').text('Quel dommage...')
    }
    $('.rep1').click(() => {
        $('.div1 p').text('Maintenant, refermons la fenêtre pour garder la chaleur de la maison à l’intérieur et éviter de trop consommer avec le chauffage !')
        $('.rep1').fadeOut("slow", () => {
            setTimeout(() => {
                $('.rep2').fadeIn("slow")
            }, 500);
        })
    })

    $('.rep2').click(() => {
        $('.fenetre').css('top', '0vh')
        setTimeout(() => {
            $('.div1 p').text(`Quelle journée ! Bravo ${prenom} ! Voici ta médaille de l’écologie que tu peux montrer à tes amis ! Je te remercie pour ton aide précieuse !`)
            $('.rep2').fadeOut("slow", () => {
                setTimeout(() => {
                    $('.rep3').fadeIn("slow")
                }, 500);
            })
        }, 2000);
    })
})