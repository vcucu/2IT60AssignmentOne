

$(document).ready(function() {
  
	const $titlePic = $('#title-pic');
  	$titlePic.show("slow")
	
	$('.card').on('mouseenter', () => {
    	$(this).addClass('card-active');
  	}).on('mouseleave', function() {
    	$(this).removeClass('card-active');
  	});

});
