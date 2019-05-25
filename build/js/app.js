function getSVGSprite (){
	$.get('./img/sprite.svg', function(data) {
		$('body').prepend(data);
	},'html');
}


function btnToTop(element, time){

	let $element = element;

	$(function() {

		$( window ).scroll(function() {
			$element.fadeIn('fast');

			clearTimeout( $.data( this, "scrollCheck" ) );

			if ($(window).scrollTop() <= 0){
				$element.fadeOut('fast');
				return false;
			} else {

				function scrollCheck(){
					$.data( this, "scrollCheck", setTimeout(function() {
						$element.fadeOut('fast');
					}, time) );
				}
				scrollCheck()

			}

		});

	});

	$element.on('click', function(event) {
		console.log('click');
		$('html, body').animate({ scrollTop: 0 }, 500);
	});
}


function sliderUpcomingGames() {

	let thisSlider = $('.js-slider-upcoming-games');
	let thisSliderFor = $('.js-slider-upcoming-games-for');
	// let thisSliderArrows = thisSlider.next('.js-slider-control');
	let itemElement = $('.card-simple');

	let slidesmustShow = 3;

	if(thisSlider.length) {

		thisSlider.slick({
			dots: false,
			infinite: false,
			speed: 300,
			rows: 0,
			slidesToShow: slidesmustShow,
			slidesToScroll: 1,
            initialSlide: 2,
			focusOnSelect: true,
			centerMode: true,
			swipe: false,
			autoplay: false,
			edgeFriction: false,
			pauseOnFocus: true,
			prevArrow: thisSlider.parent().find('.js-slider-control-prev'),
			nextArrow: thisSlider.parent().find('.js-slider-control-next'),
			asNavFor: thisSliderFor,
			responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		});
		// .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		// 	var mySlideNumber = nextSlide;
		// 	let element = thisSlider.find(itemElement)
		// 	element.removeClass('active');
		// 	element.eq(mySlideNumber).addClass('active');
		// });

		thisSliderFor.slick({
			dots: false,
			arrows: false,
			pauseOnFocus: true,
			infinite: false,
			speed: 300,
			rows: 0,
			initialSlide: 2,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: thisSlider,
		});

	} else {
		thisSliderArrows.css('display', 'none');

	}
}



function sliderHero() {

	let thisSlider = $('.js-slider-hero');
	let thisSliderFor = $('.js-slider-hero-for');

	let slidesmustShow = 1;

	let itemElement = $('.hero-slider-controls__item');

	if(thisSlider.length) {

		thisSlider.slick({
			dots: false,
			infinite: false,
			speed: 300,
			arrows: false,
			rows: 0,
			slidesToShow: slidesmustShow,
			slidesToScroll: 1,
			autoplay: true,
			pauseOnFocus: true,
			autoplaySpeed: 5000,
            swipe: false,
			prevArrow: thisSlider.parent().find('.js-slider-control-prev'),
			nextArrow: thisSlider.parent().find('.js-slider-control-next'),
			asNavFor: thisSliderFor,
		});

		thisSliderFor.slick({
			dots: false,
			arrows: false,
			infinite: false,
			centerMode: true,
			edgeFriction: false,
			vertical: true,
			focusOnSelect: true,
			speed: 300,
			rows: 0,
			slidesToShow: 3,
			slidesPerRow: 1,
			slidesToScroll: 1,
			asNavFor: thisSlider,
		});

	} else {
		thisSliderArrows.css('display', 'none');

	}
}



function sliderReviews() {

	let thisSlider = $('.js-slider-reviews');

	let slidesmustShow = 2;

	if(thisSlider.length) {

		thisSlider.slick({
			dots: true,
			appendDots: thisSlider.parent().find('.js-slider-dots'),
			infinite: true,
			speed: 300,
			rows: 0,
			slidesToShow: slidesmustShow,
			slidesToScroll: 2,
			autoplay: true,
			autoplaySpeed: 3000,
			edgeFriction: false,
			pauseOnFocus: true,
			prevArrow: thisSlider.parent().find('.js-slider-control-prev'),
			nextArrow: thisSlider.parent().find('.js-slider-control-next'),
			responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
				}
			}
			]
		});

	}
}



getSVGSprite()
btnToTop($('.btnTO'),'5000')
sliderUpcomingGames()
sliderHero()
sliderReviews()



