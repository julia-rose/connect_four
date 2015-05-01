$(document).ready(function(){


	function startGame() {
		$(".piece").css("background-color", "white");

		var turn = 1;

		$(".piece").each(function(index, value) { 
		  $(this).click(function(){
		  	//prevent already-clicked pieces from changing color again
		    if ($(this).css("background-color") === "rgb(255, 0, 0)" || $(this).css("background-color") === "rgb(0, 0, 0)") {
		    	console.log("This piece already been clicked yo");
		    	return;
		    }

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



