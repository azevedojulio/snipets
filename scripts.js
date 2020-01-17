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

/* icone de abrir e fechar menu */

$('.menu-back-to-parent-icon').click(function() {
		$(this).parent().parent().parent().parent().toggle('slide');
	});
	
	$('.dropdown .nav-link').click(function() {
		$(this).next().toggle('slide');
	});
});
