//alert("tghjk")

$(document).ready(function() {


	$('.card').on('mouseenter', () => {
    	$(this).addClass('card-active');
  	}).on('mouseleave', function() {
    	$(this).removeClass('card-active');
  	});

});
