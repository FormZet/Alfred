$(document).ready(function (){
	$('.js-plus').click(function(){
		showBubble(Number(getFirstWord()) + Number(getSecondWord()));
 	});
	$('.js-minus').click(function(){
		showBubble(Number(getFirstWord()) - Number(getSecondWord()));
		});
	$('.js-myltyply').click(function(){
		showBubble(Number(getFirstWord()) * Number(getSecondWord()));
		});
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) / Number(getSecondWord()));
		} else {
			if (checkInputData().empty) {
				showBubble('пуста');
			} else {
			showBubble(getFirstWord() + ' ' + getSecondWord()); 
		}
	}
		});

 	$('.hel').click(function(){
 		$('body').addClass("heaven");
 	});
 	$('.heav').click(function(){
 		$('body').removeClass("heaven");
 	});


 	//===============================================
 	//===============================================

 	function checkInputData() {
 		if($.isNumeric(getFirstWord()) && $.isNumeric(getSecondWord())) {
 			return {
 				isNumber: true
 			};
 		} else if (getFirstWord() === '' && getSecondWord() === '') {
 			return {
 				isNumber:false,
 				empty: true
			}; 
 		} else
 			return {
 				isNumber: false,
 				empty: false
 		};
 	}


	function getFirstWord(){
 		return $('.js-firstNumber').val();
 	}
 	function getSecondWord(){
 		return $('.js-secondNumber').val();
 	}
 	function showBubble(text) {
		$('.bubble').text(text);
		$('.bubble').addClass('-visible');
		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);
	}
});
