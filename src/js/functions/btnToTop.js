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
