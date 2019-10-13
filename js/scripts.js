$(function () {
    $(".section").click(function () {
        window.location = $(this).find("h2 a").attr("href");
        return false;
    });
});
