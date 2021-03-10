$(document).ready(function () {
    const prenom = sessionStorage.getItem('prenom');
    $('.prenom').text(prenom)

    $('.valid').click(() => {
        $(':is(.valid, .div1)').fadeOut("slow")
        $('#port').css({
            'transform': 'scale(3)'
        })
        setTimeout(() => {
            location.href = "../final/";
        }, 2000);
    })
})