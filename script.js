

$(document).ready( function() {
		$("#getAnimal").on('click', function(e){
			e.preventDefault(); // stops page from refreshing on button clicks
			var animal = $("input:radio[name=r]:checked").val(); // get the value of a checked radio button with a name=r

			$("#animalResult").remove();
			$("#articAnimals").append('<p id="animalResult"><img src="walrus.png"/>' + animal +'</p>');
		});

		$("input").keyup(function() { // when keys go up start this function to get the value of input
    			var value = $( this ).val();
   				 $("#pArea").text( value ); // sets the text area of a selected element
  				});
});