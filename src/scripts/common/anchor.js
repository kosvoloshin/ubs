window.addEventListener("DOMContentLoaded", function() {
    jQuery("[data-anchor=true]").on("click", function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top,
            header = $(".header").innerHeight() - 1;
        $("html, body").animate({ scrollTop: dn - header }, 1000);
    });
});
