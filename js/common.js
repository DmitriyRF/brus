jQuery(document).ready(function ($) {
//Для заполнения всего начального экрана
    function WindowResize() {
        $(".js-resize").css("height", $(window).height());
    }

    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

    //Для табов---------------------+-------------------------+--------------
    $(".tab_item").hide();
    $(".tab_item:first-child").fadeIn();
    $(".tab:first-child").addClass('active');
    //$(".tab_item").not(":first").hide();
    $(".js-wrapper").click(function (event) {
        var Current_span = $(event.target);
        var Current_tabs = $($(this).children()[0]);
        var Current_tab_content = $(this).children()[1];
            if ( Current_span.is("span")) {
                Current_tabs.children().classList.remove("active");
                $eq(Current_span.index()).addClass("active");
                //Current_span.addClass("active");
            }
        //$(".js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
        //$(".tab_item").hide().eq($(this).index()).fadeIn();
    })
    //    $(".js-wrapper .tab").click(function (event) {
    //    var Current_span = $(event.target);
    //        if ( target.is( "li" ) ) {
    //            target.children().toggle();
    //        }
    //    $(".js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
    //    $(".tab_item").hide().eq($(this).index()).fadeIn();
    //})


    //Цели для Яндекс.Метрики и Google Analytics
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