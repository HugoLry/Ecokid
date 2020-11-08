$(function() {
    $("a").click(function() {
        var link = $(this).attr("href");
        return lancerPage(link);
    });
 
    function lancerPage(a) {
        redirect(a);
        return false;
    }
 
    function redirect(lnk) {
        setTimeout(function() {
            window.location.href = lnk;
        }, 2000);
    }
});
