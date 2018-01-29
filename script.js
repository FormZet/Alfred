$(document).ready(function (){
	var alfredSpeech ='Привет людишки';
	$('.js-showHide').click(function(){
		$('.alfred').toggleClass('-invisible');
	});
 
	$('.js-hello').click(function(){
		$('.bubble') .text(alfredSpeech)
	})
});