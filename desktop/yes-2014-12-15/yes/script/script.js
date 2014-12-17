$(document).ready(function(){
	$('.scroller').click(function(){
		$('html, body').animate({scrollTop: $(".homescroll").offset().top}, 200);
	})
})