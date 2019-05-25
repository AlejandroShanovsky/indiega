
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

