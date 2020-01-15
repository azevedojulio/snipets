/* Fixar menu no topo e troca de css */

$("document").ready(function($){
    var nav = $('.menu-topo');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {
            nav.addClass("sticky-top");
        } else {
            nav.removeClass("sticky-top");
        }
    });
});
