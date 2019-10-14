/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
    $(".section").click(function () {
        window.location = $(this).find("a").attr("href");
        return false;
    });
});
