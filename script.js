$(function () {
    $("a").click(function () {
        var link = $(this).attr("href");
        $("input, #accueil, h1, h2").css({
            "transition": "all 1s ease",
            "transform": "translateY(100vh)"
        });
        $(".transition-out").css("top", "0vh");
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
});