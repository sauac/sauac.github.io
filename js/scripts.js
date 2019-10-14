/*jslint browser: true*/
/*global $, jQuery*/
/*jslint node: true */
$(document).ready(function () {
    // Show URL on Mouse Hover
    $(".section").hover(function () {
        window.status = $(this).find("a:first").attr("href");
    }, function () {
        window.status = "";
    });

});
