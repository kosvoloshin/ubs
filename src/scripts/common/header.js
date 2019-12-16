jQuery(window).scroll(function () {
    if ($(this).scrollTop() > 0 ) {
        $('.header').addClass("fixed");
    } else {
        $('.header').removeClass("fixed");
    }
});
