$(function() {
    new WOW().init();
});

$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("header_bg");
        } else {
            $("header").removeClass("header_bg");
        }
    })
})