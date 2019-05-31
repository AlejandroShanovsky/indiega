function tabSwitcher(){

	let element = $('.js-tab-item');
	let elementBottom = $('.js-tab-item-bottom');

	element.on('click', function(event) {
		let thisText = $(this).html();
		let activeElement = $(this).parent().next().find("[data-name='"+thisText+"']")
		// let activeElement = $(this).parent().next().find('div').attr("data-name");

		element.removeClass('active');
		elementBottom.removeClass('active');

		$(this).addClass('active');
		activeElement.addClass('active');

	});

}
