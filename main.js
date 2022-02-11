var url = 'http://melissacabral.com/demos/javascript/sounds/';
var blop = new Audio(url + 'Blop.mp3');
var pop = new Audio(url + 'pop.mp3');
var sound = true;

$('.button').click(function(){
	if(sound){
		sound = false;
		$(this).text('Sound is OFF');
	}else{
		sound = true;
		$(this).text('Sound is ON');
	}
});

$(function () {
     $(".draggable").draggable({ revert: 'invalid' });
    $(".droppable").droppable({
        accept: function(drag) {
          
            var dropId = $(this).attr('data-id');
            var dragId = $(drag).attr('data-id');
            if (dropId == 'a' && dragId == 'a') {
              playSound(blop);
            }
            if (dropId == 'b' && dragId == 'b') {
              playSound(pop);
            }
            
            return dropId === dragId;
          
        }
      
    });
   
    
    //this additional function allows the sounds to overlap instead of just claling play()
//this additional function allows the sounds to overlap instead of just claling play()
function playSound(track) {
	if (sound) {
		var tempSound = track.cloneNode();
		tempSound.play();
	}
}
});





