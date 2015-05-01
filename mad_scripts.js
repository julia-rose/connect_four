$(document).ready(function(){


	function startGame() {
		$(".piece").css("background-color", "white");

		var turn = 1;

		$(".piece").each(function(index, value) { 
		  $(this).click(function(){
		    	// console.log("Piece " + index + " was clicked.");
		    if(turn % 2 === 0){
		    	$(this).css("background-color", "red");
		    } else{
		    	$(this).css("background-color", "black");
		    };
		    turn++
		  });
		});

	};

	startGame();

});



