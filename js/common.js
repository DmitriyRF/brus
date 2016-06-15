$(document).ready(function() {
	//Для заполнения всего начального экрана
	function WindowResize(){
		$(".js-resize").css("height",$(window).height());
	}
	WindowResize();
	$(window).resize(function () {
		WindowResize();
	})

	//Для табов
	$(".tab_item").not(":first").hide();
	var ElementsW =document.body.getElementsByClassName("js-wrapper");
	var quantityW = ElementsW.length;
	if(quantityW){
		for(var i = 0; i<quantityW; i++){
			ElementsW[i].addEventListener('click',function(event){
				var target = event.target; // где был клик?
				if(target.tagName === "span"){
					this.getElementsByClassName(tab).removeClass("active").eq($(this).index()).addClass("active");
				}
			},false);
		}
	}

	//$(".js-wrapper .tab").click(function() {
	//	$(this).removeClass("active").eq($(this).index()).addClass("active");
	//	var TabEl = this.parentNode.parentNode.getElementsByClassName('tab');
	//	/*this.parentNode.hide().eq($(this).index()).fadeIn()*/
	//}).eq(0).addClass("active");
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
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

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