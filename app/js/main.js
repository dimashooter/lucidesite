$(function(){
	$('.slider__blocks').slick({
		dots:true,
		slidesToShow:2,
		slidesToScroll:2,
		speed:1000,
		arrows:false,
		responsive: [
		{
      breakpoint: 730,
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
        infinite: true,
        dots: true
      		}
	    }
      ]
	})
	$('.burger').on('click',function(){
		$('.header__list').slideToggle();
	});	
	// $('.burger-btn').on('click',function(e){
		
	// 	$(this).toggleClass('menu__btn-active');
	// }
	new WOW().init();
});
