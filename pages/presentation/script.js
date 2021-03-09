$(".transition-in").css("transform", "translateY(-125vh)");

// $(".formulaire").submit(function (e) {
//     e.preventDefault();

// });

// function redirect() {
//     location.href = "../presentation_lif/presentation_lifSite.php";
// }

$('.button').mousedown(()=>{
    sessionStorage.setItem('prenom', $('#prenom').val())
})