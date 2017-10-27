$(function() {

//кнопка "купить в один клик"
	$('.product-layout > .product-thumb').each(function(e) {
		e +=1;
		$(this).find('.button-group').append('<a class="button toclick" href="#pp-item-'+ e +' ">Купить в один клик</a>');
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

});