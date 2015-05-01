$(document).ready(function(){

$(".piece").each(function(index, value) { 
    $(this).click(function(){
    	console.log("Piece " + index + " was clicked.");
    	$(this).css("background-color", "red");
  	});
  });

});

