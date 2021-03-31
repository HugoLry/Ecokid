$(document).ready(function () {
    $('.reponse1').click(() => {
        $('.div2').css('background-image', 'url("../../ressources/lif/lifngauche.png")');
        $('#texte').text('Il est mieux de faire sa propre nourriture que de manger de la nourriture industrielle pour éviter de jeter trop de déchets.');
        $('.reponse1, .reponse2, #granola').fadeOut("slow", () => {
            setTimeout(() => {
                $('#valid').fadeIn("slow");
            }, 500);
        })
    })

    $('.reponse2').click(() => {
        $('.div2').css('background-image', 'url("../../ressources/lif/lifsdroite.png")');
        $('#texte').text('J\'aurais bien aimé manger des cookies que nous avons faits nous même, cela aurait permis d\'éviter de jeter trop d\'emballages à la poubelle... et de nous amuser un peu !')
        $('.reponse1, .reponse2, #cookies').fadeOut("slow", () => {
            setTimeout(() => {
                $('#valid').fadeIn("slow");
            }, 500);
        })
    })

    $('#valid').click(() => {
        $('#valid').fadeOut("slow", () => {
            setTimeout(() => {
                $('.reponse3, .reponse4').fadeIn("slow")
                $('#texte').text('Je commence à avoir soif ! Que veux-tu boire ?')
            }, 500);
        })
    })

    $('.reponse3').click(() => {
        $('.div2').css('background-image', 'url("../../ressources/lif/lifngauche.png")')
        $('#texte').text('Très bien ! La carafe d’eau va permettre de ne pas jeter la bouteille vide.');
        $('.reponse3, .reponse4, #bouteille').fadeOut("slow", () => {
            setTimeout(() => {
                $('#redirect').fadeIn("slow");
            }, 500);
        })
    })

    $('.reponse4').click(() => {
        $('.div2').css('background-image', 'url("../../ressources/lif/lifsdroite.png")')
        $('#texte').text('Une fois la bouteille vide, il faudra la jeter contrairement à la carafe. Cela va rajouter encore des emballages à la poubelle...')
        $('.reponse3, .reponse4, #carafe').fadeOut("slow", () => {
            setTimeout(() => {
                $('#redirect').fadeIn("slow");
            }, 500);
        })
    })
});