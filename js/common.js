jQuery(document).ready(function ($) {

//Для заполнения всего начального экрана ------------+-------------------------+-------------------------+-------------

    function WindowResize() {
        // $(".js-resize").css("min-height", $(window).height());
        $(".fon-white").css("min-height", $(window).height());
    }

    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

//Для табов------------+-------------------------+-------------------------+-------------------------+-------------

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

    $(".js-project .tab_item").not(":first").hide();
    $(".js-project .tab").click(function() {
        $(".js-project .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".js-project .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

// FANSYBOX  ------------+-------------------------+-------------------------+-------------------------+-------------
//http://fancyapps.com/
    $("a.gallery").fancybox({ 
            "autoSize" : true,                      
            // "padding" : 20,//padding - отступ контента (фотографий) от краев окна.
            "imageScale" : true,   //imageScale - true - контент масштабируется по размеру окна, 
            //                         // false - окно вытягивается по размеру контента. По умолчанию - true;
            // "zoomOpacity" : false,  //zoomOpacity - изменение прозрачности контента во время анимации
            // "zoomSpeedIn" : 1000,   //zoomSpeedIn - скорость анимации в мс при увеличении фото (по умолчанию 0);
            // "zoomSpeedOut" : 1000,  //zoomSpeedOut - скорость анимации в мс при уменьшении фото (по умолчанию 0) ;
            // "zoomSpeedChange" : 1000, //zoomSpeedChange - скорость анимации в мс при смене фото (по умолчанию 0);
            // "frameWidth" : 700,  //frameWidth - ширина окна, px (425px - по умолчанию);
            // "frameHeight" : 600, //frameHeight - высота окна, px(355px - по умолчанию);
            // "overlayShow" : true, //overlayShow - (по умолчанию true) если true, то затенят страницу под всплывающим окном. 
            //                         //Цвет задается в jquery.fancybox.css - div#fancy_overlay 
            // "overlayOpacity" : 0.8, //overlayOpacity - Прозрачность затемнения (0.3 по умолчанию);
            // "hideOnContentClick" :false, //hideOnContentClick -  true закрывает окно по клику по любой его точке (кроме элементов навигации). По умолчанию true;
             "centerOnScroll" : false, //centerOnScroll - Если true, то окно центрируется на экране, когда пользователь прокручивает страницу.
                next : {
                        13 : 'left', // enter
                        34 : 'up',   // page down
                        39 : 'left', // right arrow
                        40 : 'up'    // down arrow
                },
                prev : {
                        8  : 'right',  // backspace
                        33 : 'down',   // page up
                        37 : 'right',  // left arrow
                        38 : 'down'    // up arrow
                },
                    close  : [27], // escape key
                    play   : [32], // space - start/stop slideshow
                    toggle : [70]  // letter "f" - toggle fullscreen
            });

//Цели для Яндекс.Метрики и Google Analytics ------------+-------------------------+-------------------------+-------------

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

//Аякс отправка форм ------------+-------------------------+-------------------------+-------------------------+-------------
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