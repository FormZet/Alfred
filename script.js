$(document).ready(function (){
	var input ='323228'
	$('.js-count').click(function(){
		showBubble($('.js-firstNumber').val() + $('.js-secondNumber').val());
 	});
 	
 	function showFirstInput(){
 		var inputText = $('.js-firstNumber').val();
 		if (inputText ==="") {
 			showBubble("TI SHO, DEBIL? ");
 		} else {
 			showBubble(inputText);
 		}
 	}

 	function showBubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');
		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);
	}
});
