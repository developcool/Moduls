$(document).ready(function () {

    // BEGIN POPUP NOTIFICATION

    var data = [{
            "Name": "Андрей",
            "Device": "Чайник",
            "Price": "200$"
        },
        {
            "Name": "Сергей",
            "Device": "Монитор",
            "Price": "500$"
        },
        {
            "Name": "Антон",
            "Device": "Скутер",
            "Price": "900$"
        },
        {
            "Name": "Vlad",
            "Device": "Мавры",
            "Price": "300$"
        },
        {
            "Name": "Александр",
            "Device": "Программист",
            "Price": "1000$"
        }
        ,
        {
            "Name": "Cережа",
            "Device": "Экономист",
            "Price": "111$"
        }
        ,
        {
            "Name": "Алиса",
            "Device": "Инжинер",
            "Price": "1240$"
        }
        ,
        {
            "Name": "Аня",
            "Device": "Хайпажор",
            "Price": "10520$"
        }
    ];

    var delay = 4000;

    setInterval(function() {
        if($(".popup-notific").is(':hidden')) {
            number = Math.floor(Math.random() * data.length);
    
            $(".popup-notific-name").html(data[number].Name);
            $(".popup-notific-device").html(data[number].Device);
            $(".popup-notific-price").html(data[number].Price);
            $(".popup-notific").slideUp().delay(delay).fadeIn(400);
    
            $(".popup-notific").slideDown().delay(delay).fadeOut(400);
        }
    },5000);


    // END POPUP NOTIFICATION

});