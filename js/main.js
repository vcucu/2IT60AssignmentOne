


$(document).ready(function() => {
    $(".jumbotron").on("mouseenter", () => {
    	$(this).fadeIn();
  	});

  	$("card").on({
		mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "white");
    }, 

  });

});

