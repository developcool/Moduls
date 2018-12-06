$(document).ready(function () {

    /* BEGIN WIDGET-STOP-CLOSE */

    $(".widget-stop-close-mask, .widget-close-button").click(function () {
        $(".widget-stop-close").hide();
        $(".widget-stop-close").remove();
    });


    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function writeCookie() {
        // функция записывает cookie на 1 день, с которой мы не показываем окно
        var date = new Date;
        date.setDate(date.getDate() + 1);
        document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
    }

    // проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
    var alertwin = getCookie("alertwin");
    if (alertwin != "no") {
        
        $(document).mouseleave(function (e) {
            if (e.clientY < 0) {
                $(".widget-stop-close").fadeIn("fast");
                writeCookie();
                // Устанавливаем куку когда посетитель увидел окно, даже если не прошло 15 секунд
            }
        });
    }

    /* END WIDGET-STOP-CLOSE */

});