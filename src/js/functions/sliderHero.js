
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

