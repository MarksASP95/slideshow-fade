$(document).ready(function(){
	var image = 1;
	$(".img-container").css({'background-image':"url(img/"+ image +".jpg)",
							 'transition':'background-image .5s ease'
							});
	$("#button_right").click(function(){
		image++;
		if(image > 4){
			image = 1;
		}
		$(".img-container").css({'background-image':"url(img/"+ image +".jpg)",
							 'transition':'background-image .5s ease'});
	});
	$("#button_left").click(function(){
		image--;
		if(image < 1){
			image = 4;
		}
		$(".img-container").css({'background-image':"url(img/"+ image +".jpg)",
							 'transition':'background-image .5s ease'});
	});
});