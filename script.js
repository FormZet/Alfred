$(document).ready(function (){
	var superhero = {
		 	name: "Super Vasya",
		 	age: 250,
		 	gender: 'Male',

		 	 params: {
		 	 	height: 184,
		 	 	weight: 77,
		 	 	strength: 900,
		 	 	intellegence:750,
		 	 	agility: 1000
		 	 }, 
		 	 power:{
		 	 	main:'Fireball',
		 	 	secondary: 'Hex'
		 	 }
	};
	 $('.js-superhero').click(function()	{
	 	showBubble('Имя нашего героя' + superhero.name);
	 });
	 $('.js-change').click(function() {
	 	superhero.params.height = getFirstWord();
	 	showBubbleWithMarkup('<h1>Новый рост нашего супергероя ' + superhero.params.height + 'м</h1>');
	 });

	 var fruits =['Апельсин', 'Мандарин','Яблоко'];

	 console.log(fruits[2]);
	 $('.js-addElem').click(function(){
	 	fruits.push(getSecondWord());
	 	showBubble(fruits);
	 });
	 for(let i= 0; i< fruits.length; i++){
	 	$('.test-array').append('<div class="test-item">' + fruits[i] + '</div>')
	 };










	$('.js-plus').click(function(){
	if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) + Number(getSecondWord()));
		} else {
			showStringData();
	}
		});
	$('.js-minus').click(function(){
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) - Number(getSecondWord()));
		} else {
			showStringData();
	}
		});
	$('.js-myltyply').click(function(){
		if (checkInputData().isNumber) {
			showBubble(Number(getFirstWord()) * Number(getSecondWord()));
		} else {
			showStringData();
	}
		});
	$('.js-divide').click(function() {
		if (checkInputData().isNumber) {
			if (getSecondWord() === "0") {
				showBubble('так вымерли мамонты');P
			}
		} else {
			showStringData();
		}
	});
	$('.js-fatal').click(function(){
		$('.Fireball').addClass('-visible')
		$('.Fireball').addClass('-more')
	})
 	$('.hel').click(function(){
 		$('body').addClass("heaven");
 	});
 	$('.heav').click(function(){
 		$('body').removeClass("heaven");
 	});


 	//===============================================
 	//===============================================

 	function showStringData(){
 	if (checkInputData().empty) {
				showBubble('пуста');
			} else {
			showBubble(getFirstWord() + ' ' + getSecondWord()); 
		}
	}	


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
	 	function showBubbleWithMarkup(blocks) {
		$('.bubble').text(blocks);
		$('.bubble').addClass('-visible');
		setTimeout(function() {
			$('.bubble').removeClass('-visible');
		}, 2000);
	}

});
