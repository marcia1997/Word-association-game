//Activate sound
var sound = true;

//Feedback variables
var correct = new Audio('correct.mpeg');
var incorrect = new Audio('incorrect.mpeg');

//Condition asigned for dragging
$('.draggable').draggable();
//Condition asigned for dropping
$('.droppable').droppable({

	drop: function(e, ui) {
		//e is the event data taking the image id as reference, ui the word to be dropped using his id as value
		var image = $(this).attr('id');
        //give context to change the event
		var word = ui.draggable.attr('id');
		//Feedback conditions
		//I was trying different funtions for example if,else.taking getElementById as the parameter.I wasn't able to make it work properly.
		//but since I need to respect the time asigned.I left like this the if,because is functional even if it is not exactly what I would prefer. 
 
		//bird
		if (image == 'drop1' && word == 'drag1') {
			playSound(correct);
		}
		
		if (image == 'drop1' && word == 'drag2') {
			playSound(incorrect);
		}

		if (image == 'drop1' && word == 'drag3') {
			playSound(incorrect);
		}
	 
		//goat
		if (image == 'drop2' && word == 'drag2') {
			playSound(correct);
		}
		
		if (image == 'drop2' && word == 'drag1') {
			playSound(incorrect);
		}

		if (image == 'drop2' && word == 'drag3') {
			playSound(incorrect);
		}
		//rabbit
		if (image == 'drop3' && word == 'drag3') {
			playSound(correct);
		}
		
		if (image == 'drop3' && word == 'drag2') {
			playSound(incorrect);
		}

		if (image == 'drop3' && word == 'drag1') {
			playSound(incorrect);
		}
	},
	
});


//Give the fuctionality of sound when there is the interation
		
function playSound(track) {
	if (sound) {
		var tempSound = track.cloneNode();
		tempSound.play();
	}
}
