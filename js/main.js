//alert("tghjk")

$(document).ready(function() {


	$('.card').on('mouseenter', () => {
    	$(event.currentTarget).addClass('card-active');
  	}).on('mouseleave', function() {
    	$(event.currentTarget).removeClass('card-active');
  	});

});
