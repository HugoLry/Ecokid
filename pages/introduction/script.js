$('input').click(function () {
    $('#texte').css('opacity','0')
    
    $(this).fadeTo(500,0, () => {
        setTimeout(() => {
            $('#texte').text('Nous voilà sur la planète Terra ! Comme tu peux le voir, les habitants l’ont beaucoup salie. Nous avons besoin de ton aide pour nettoyer tout ça ! Je vais être ton guide dans cette aventure. Tu es prêt ?').css('opacity','1')
            $('#redirect').fadeIn("slow")
        }, 500);
    })
})