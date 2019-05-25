function getSVGSprite (){
	$.get('./img/sprite.svg', function(data) {
		$('body').prepend(data);
	},'html');
}

