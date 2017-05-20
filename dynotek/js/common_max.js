$(document).ready(function() {
	$(".slider").owlCarousel({
		items : 1,
		nav : true,
		navText : "",
		loop : true,
		autoplay : true,
		autoplayHoverPause : true,
		fluidSpeed : 6000,
		autoplaySpeed : 3000,
		navSpeed : 3000,
		dotsSpeed : 2000,
		dragEndSpeed : 600
	});
});