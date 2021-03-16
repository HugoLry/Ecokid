$(window).on('load', function () {
    $('.begin,#age').mousedown(() => localStorage.setItem('prenom', $('#prenom').val()))

    $('#prenom').focusout(() => localStorage.setItem('prenom', $('#prenom').val()))
})