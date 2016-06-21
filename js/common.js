jQuery(document).ready(function ($) {
//Для заполнения всего начального экрана ----------------+----------------
    function WindowResize() {
        $(".js-resize").css("min-height", $(window).height());
        $(".fon-white").css("min-height", $(window).height());
    }

    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

    //Для табов---------------------+-------------------------+--------------
    $(".tel .tab_item").not(":first").hide();
    $(".tel .js-wrapper .tab").click(function() {
        $(".tel .js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tel .js-wrapper .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".tabs-heder .tab_item").not(":first").hide();
    $(".tabs-heder .js-wrapper .tab").click(function() {
        $(".tabs-heder .js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs-heder .js-wrapper .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    //Цели для Яндекс.Метрики и Google Analytics ------------+-------------
    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#form").submit(function (e) {
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
    });

});