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

	if(thisSlider.length && thisSlider.not('.slick-initialized')) {

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
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnFocus: true,
			prevArrow: thisSlider.parent().find('.js-slider-control-prev'),
			nextArrow: thisSlider.parent().find('.js-slider-control-next'),
			asNavFor: thisSliderFor,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					swipe: true,
            		initialSlide: 1,
					slidesToShow: 1,
					centerMode: false,
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
			responsive: [
			{
				breakpoint: 768,
				settings: {
            		initialSlide: 1,
				}
			}
			]
		});

	} else {
		thisSliderArrows.css('display', 'none');

	}
}



function sliderHero() {

	let thisSlider = $('.js-slider-hero');
	let thisSliderDots = $('.js-slider-hero-dots');

	let slidesmustShow = 1;

	let itemElement = $('.hero-slider-controls__item');

	if(thisSlider.length) {

		thisSlider.slick({
			dots: true,
			customPaging: function(slider, i) {
				i += 1;
				return '<div>0' + i + '</div>';
			},
			appendDots: thisSliderDots,
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
		});

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
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
			]
		});

	}
}



getSVGSprite()
navigation()

$(document).ready(function() {
sliderUpcomingGames()
sliderHero()
sliderReviews()
$(window).trigger('resize');
});

btnToTop($('.btnTO'),'5000')

function navigation(){
	let element = $('.js-header');
	let fixedTrigger = $('.js-nav-trigger');

	if (fixedTrigger.length) {
		var scroll = $(window).scrollTop();
		var objectPosition = fixedTrigger.offset().top;
		var elementHeight = element.height();
		console.log(elementHeight);
		if (scroll > objectPosition) {
			element.addClass("fixed");
		} else {
			element.removeClass("fixed");
		}
	}

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll > objectPosition) {
			element.addClass("fixed");
		} else {
			element.removeClass("fixed");
		}
	});

}

$('.hamburger').on('click', function(e) {
	e.preventDefault();
	$('.hamburger').toggleClass('active');
	$('.js-nav-mobile').toggleClass('active');
});
