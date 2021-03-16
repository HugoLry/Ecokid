$(function () {
    localStorage.setItem('score', 0)
    $('.explications').click(function (e) {
        e.preventDefault();
        $('.transition').css({
            'transform': 'translateY(0px)'
        });
        setTimeout(() => {
            document.location.href = "pages/ecokid/";
        }, 2000);
    })
});