$(function() {

//кнопка "купить в один клик"
	$('.product-layout > .product-thumb').each(function(e) {
		e +=1;
		$(this).find('.button-group').append('<a class="button toclick" href="#pp-item-'+ e +' ">Купить в один клик</a>');
		$(this).parent().attr({
			"class" : "product-layout col-lg-4 col-md-4 col-sm-6 col-xs-6"
		});
	});

	$('.product-thumb h4').css('height', '').equalHeights();
	$('.product-thumb .price').css('height', '').equalHeights();

});