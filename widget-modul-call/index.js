$( document ).ready(function() {


    // WIDGET-MODUL-CALL - BY LANIN ALEX

    $(".widget-phone").click(function() {
        $(".widget-mask, .widget-wrap").fadeIn(300);
        $(".widget-phone").fadeOut(100);
    });

    $(".widget-close, .widget-mask").click(function() {
        $(".widget-mask, .widget-wrap").fadeOut(300);
        $(".widget-phone").fadeIn();
    });

    $(".widget-hover").mouseover(function() {
        $(".widget-phone-text, .widget-phone-pront-button").addClass('widget-phone-text-hover').show();
    });

    $(".widget-hover").mouseout(function() {
        $(".widget-phone-text, .widget-phone-pront-button").removeClass('widget-phone-text-hover').hide();
    });

    // END WIDGET-MODUL-CALL


});
