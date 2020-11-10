$(".transition-in").css("transform","translateY(-150vh)");
setTimeout(function(){
$('.formulaire, video').css({"transition":"1s","top":"0vh"}); }, 500);

$("a").click(function () {
    var link = $(this).attr("href");
    setTimeout(function () {$(".formulaire, video, #accueil").css({
        "transition": "all 1s ease",
        "transform": "translateY(100vh)"
    });
    $(".transition-out").css("top", "0vh");}, 1000);
    return lancerPage(link);
});

function lancerPage(a) {
    redirect(a);
    return false;
}

function redirect(lnk) {
    setTimeout(function () {
        window.location.href = lnk;
    }, 2000);
}