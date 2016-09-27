$(document).ready(function(){

	$(window).on('scroll',function(){
		var table = $('.menu-wrapper');
		var scT2 = table.offset().top - $(window).scrollTop();
		var head = $('.product-header-cont')
		if(scT2 < 0){

			head.addClass('visible');
		}else{

			head.removeClass('visible');
		}

	});
	 $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500 && $(this).scrollTop() < $(document).height() -100) {
                $('#back-top').addClass('visible');
            } else {
                $('#back-top').removeClass('visible');
            }
        });

    });
});
