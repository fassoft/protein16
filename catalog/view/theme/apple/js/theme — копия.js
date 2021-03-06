$(function() {

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

	/*$('.first_adv').mouseenter(function() {
		$('.first_adv p').css('color','#fff');
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

	$(".first_adv").click(function() {
			$('.first_adv').removeClass("zoomInLeft");
			$('.first_adv + .p-cont').removeClass("zoomOutLeft p-cont-display-ab");
			$('.first_adv').addClass("animated zoomOutLeft first_adv-display");
			$('.first_adv + .p-cont').addClass("animated zoomInLeft p-cont-display");
	});

	$(".first_adv + .p-cont").click(function() {
			$('.first_adv').removeClass("zoomOutLeft first_adv-display");
			$('.first_adv + .p-cont').removeClass("zoomInLeft");
			$('.first_adv').addClass("zoomInLeft");
			$('.first_adv + .p-cont').addClass("zoomOutLeft p-cont-display-ab");
	});


});