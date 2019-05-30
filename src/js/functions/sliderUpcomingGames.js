
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

