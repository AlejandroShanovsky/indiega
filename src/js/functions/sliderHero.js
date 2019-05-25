
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

