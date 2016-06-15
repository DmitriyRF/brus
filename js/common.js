$(document).ready(function () {
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
    //$("span.tab:first-child").classList.add('active');
    $(".tab:first-child").addClass('active');
    var selectedTd;
    function Class_Active(node) {
        //if (selectedTd) {
            selectedTd = node;
            var quantityCh = selectedTd.parentElement.children.length;
            var Elements_of_Parent = selectedTd.parentElement.children;
            for (var i=0; i<quantityCh; i++) {
                Elements_of_Parent[i].classList.remove('active');
            }
        //}
        //selectedTd = node;
        selectedTd.classList.add('active');
    }

	 document.body.addEventListener('click', function (event) {
		var target = event.target;
		while (target !== this) {
			if (target.className === ("tab")) {
                Class_Active(target);
				return;
			}
			target = target.parentNode;
		}
	});

	/*
	$(".tab_item").not(":first").hide();
	$(".js-wrapper .tab").click(function() {
		$(".js-wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");*/


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg){
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	}

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});