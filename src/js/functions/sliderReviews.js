
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

