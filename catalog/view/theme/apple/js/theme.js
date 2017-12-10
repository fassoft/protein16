$(document).ready(function() {

//кнопка "купить в один клик"
$('.product-layout > .product-thumb').each(function(e) {
	e +=1;

	var img_url = $(this).find('.img-responsive').attr('src'),
	item_name = $(this).find('h4 a').text(),
	item_price = $(this).find('.price').html(),
	admin = $('#callback [name=admin_email]').val();

	$(this).after('\
		<div id="pp-item-' + e + '" class="product-popup">\
		<h2>Быстрая покупка</h2>\
		<p class="quick-buy-descr">Введите ваш номер, и уже сегодня вы получите наш товар</p>\
		<div class="pp-img-wrap"><img src="' + img_url + '" alt="Протеин16"></div>\
		<div class="pp-content">\
		<h3>' + item_name + '</h3>\
		<p>' + item_price + '</p>\
		<form class="ajax-form">\
		<input type="hidden" name="project_name" value="Protein16">\
		<input type="hidden" name="admin_email" value="' + admin + '">\
		<input type="hidden" name="form_subject" value="Заявка с сайта Protein16">\
		<input type="hidden" name="Продукт" value="' + item_name + '">\
		<div class="form-control-cnt">\
		<input class="form-control" type="text" name="Телефон" placeholder="Введите ваш телефон..." required>\
		<button class="btn btn-primary">Заказать</button>\
		</div>\
		</form>\
		<div class="success">Спасибо за заявку!</div>\
		</div>\
		</div>');

	$(this).find('.button-group').append('<div class="button toclick" href="#pp-item-'+ e +' ">\
		<a>Купить в один клик</a>\
		<div class="pytin"></div>\
		</div>\
		');
	$(this).parent().attr({
		"class" : "product-layout col-lg-4 col-md-4 col-sm-6 col-xs-6"
	});
});

	/*$('.left-block-first').mouseenter(function() {
		$('.left-block-first p').css('color','#fff');
	});*/

	$('.product-thumb h4').css('height', '').equalHeights();
	$('.product-thumb .price').css('height', '').equalHeights();

	$('.toclick, .callback').magnificPopup({
		mainClass: 'mfp-zoom-in',
		removalDelay: '500'
	});

	$(".ajax-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "catalog/view/theme/apple/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			var pp_suc = th.closest('.product-popup').find('.success');
			pp_suc.fadeIn();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				pp_suc.fadeOut();
				$.magnificPopup.close();
			}, 1250);
		});
		return false;
	});

//для пасхалки
function eggAnimate(){
  $('.egg img').removeClass('egg-img-a');
}

$('.egg').click(function() {
		if ($('.egg img').hasClass('egg-img-a')){
			$('.egg img').addClass("egg-img-out");
			setTimeout(eggAnimate, 300);
		} else{
			$('.egg img').removeClass('egg-img-out');
			$('.egg img').addClass("egg-img-a");
		};
	});

//Для боовых трех плашек с преимуществами
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	$(".left-block-first").click(function() {
		$('.left-block-first').removeClass("zoomInLeft");
		$('.left-block-first + .p-cont').removeClass("zoomOutLeft p-cont-display-ab");
		$('.left-block-first').addClass("animated zoomOutLeft left-block-first-display");
		$('.left-block-first + .p-cont').addClass("animated zoomInLeft p-cont-display");
	});

	$(".left-block-first + .p-cont").click(function() {
		$('.left-block-first + .p-cont').addClass("animated zoomOutLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			$(this).addClass("p-cont-display-ab"));
		$('.left-block-first + .p-cont').removeClass("zoomInLeft");
		$('.left-block-first').removeClass("zoomOutLeft left-block-first-display");
		$('.left-block-first').addClass("zoomInLeft");
	});

//____________________________________________

	$(".left-block-second").click(function() {
		$('.left-block-second').removeClass("zoomInLeft");
		$('.left-block-second + .p-cont').removeClass("zoomOutLeft p-cont-display-ab");
		$('.left-block-second').addClass("animated zoomOutLeft left-block-first-display");
		$('.left-block-second + .p-cont').addClass("animated zoomInLeft p-cont-display");
	});

	$(".left-block-second + .p-cont").click(function() {
		$('.left-block-second + .p-cont').addClass("animated zoomOutLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			$(this).addClass("p-cont-display-ab"));
		$('.left-block-second + .p-cont').removeClass("zoomInLeft");
		$('.left-block-second').removeClass("zoomOutLeft left-block-first-display");
		$('.left-block-second').addClass("zoomInLeft");
	});

//_____________________________________________

	$(".left-block-third").click(function() {
		$('.left-block-third').removeClass("zoomInLeft");
		$('.left-block-third + .p-cont').removeClass("zoomOutLeft p-cont-display-ab");
		$('.left-block-third').addClass("animated zoomOutLeft left-block-first-display");
		$('.left-block-third + .p-cont').addClass("animated zoomInLeft p-cont-display");
	});

	$(".left-block-third + .p-cont").click(function() {
		$('.left-block-third + .p-cont').addClass("animated zoomOutLeft").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', 
			$(this).addClass("p-cont-display-ab"));
		$('.left-block-third + .p-cont').removeClass("zoomInLeft");
		$('.left-block-third').removeClass("zoomOutLeft left-block-first-display");
		$('.left-block-third').addClass("zoomInLeft");
	});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*if ($(document).height() <= $(window).height()){
  $(".main-footer").addClass("navbar-fixed-bottom");
};*/
$('.article_cont').hover(function() {
	setTimeout(function() {
				$('.article').removeClass('hidden');
			}, 100);
}); //Для меню статьи

$('.article_cont').mouseleave(function() {
	setTimeout(function() {
		$('.article').addClass('hidden');
		}, 100);
}); //Для меню статьи

//----------------------------------------------------------------------------
$('.article_ship_cont').hover(function() {
	setTimeout(function() {
				$('.article_ship').removeClass('hidden');
			}, 100);
}); //Для меню о магазине

$('.article_ship_cont').mouseleave(function() {
	setTimeout(function() {
		$('.article_ship').addClass('hidden');
		}, 100);
}); 

if ($(window).width() <= '768'){
	articleContClick();
	articleShipContClick()
};

function articleContClick(){
	$('.article_cont').click(function() {
		if ($('.article').hasClass('hidden')){
			$('.article').removeClass("hidden");
		} else{
			$('.article').addClass('hidden');
		};
	});
};

function articleShipContClick(){
	$('.article_ship_cont').click(function() {
		if ($('.article_ship').hasClass('hidden')){
			$('.article_ship').removeClass("hidden");
		} else{
			$('.article_ship').addClass('hidden');
		};
	});
};



});