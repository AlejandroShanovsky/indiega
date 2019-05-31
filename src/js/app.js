//=include functions/getSVGSprite.js
//=include functions/btnToTop.js
//=include functions/sliderUpcomingGames.js
//=include functions/sliderHero.js
//=include functions/sliderReviews.js
//=include functions/tabSwitcher.js

getSVGSprite()
navigation()

$(document).ready(function() {
sliderUpcomingGames()
sliderHero()
sliderReviews()
tabSwitcher()
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
