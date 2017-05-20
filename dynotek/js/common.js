$(document).ready(function() {

	$(function() {
    $( "#tabs" ).tabs();
  });
										
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".navbar").slideToggle();
		return false;
	});

	 $("#V-Raptor").click(function() {
	 	// $(this).toggleClass("open");
	 	$(".wrap_triangle_vraptor").toggleClass("open");
	 	$(".menu_vraptor").toggleClass("open");
	 	$(".menu_trex").removeClass("open");
	 	$(".menu_megalodon").removeClass("open");
	 	$(".menu_modding").removeClass("open");
	 	$(".wrap_triangle_megalodon").removeClass("open");
		$(".wrap_triangle_trex").removeClass("open");
		$(".wrap_triangle_modding").removeClass("open");
	 	return false;
	 });

	 $("#Megalodon").click(function() {
	 	// $(this).toggleClass("on");
	 	$(".menu_megalodon").toggleClass("open");
	 	$(".wrap_triangle_megalodon").toggleClass("open");
	 	$(".menu_trex").removeClass("open");
	 	$(".menu_vraptor").removeClass("open");
	 	$(".menu_modding").removeClass("open");
	 	$(".wrap_triangle_trex").removeClass("open");
		$(".wrap_triangle_vraptor").removeClass("open");
		$(".wrap_triangle_modding").removeClass("open");
	 	return false;
	 });

	 $("#modding").click(function() {
	 	// $(this).toggleClass("on");
	 	$(".wrap_triangle_modding").toggleClass("open");
	 	$(".menu_modding").toggleClass("open");
	 	$(".menu_trex").removeClass("open");
	 	$(".menu_vraptor").removeClass("open");
	 	$(".menu_megalodon").removeClass("open");
	 	$(".wrap_triangle_megalodon").removeClass("open");
		$(".wrap_triangle_vraptor").removeClass("open");
		$(".wrap_triangle_trex").removeClass("open");
	 	return false;
	 });
	
		$("#menu_megalodon").removeClass("on");


	$("#T-Rex").click(function() {
		// $(this).toggleClass("on");
		$(".wrap_triangle_trex").toggleClass("open");
		$(".menu_trex").toggleClass("open");
		$(".menu_megalodon").removeClass("open");
		$(".menu_vraptor").removeClass("open");
		$(".menu_modding").removeClass("open");
		$(".wrap_triangle_megalodon").removeClass("open");
		$(".wrap_triangle_vraptor").removeClass("open");
		$(".wrap_triangle_modding").removeClass("open");
		return false;
	});

	$(".gallery").bind("DOMSubtreeModified",function(){

		event.preventDefault();
   if ( $(this).hasClass("isDown") ) {
   		$(".s_monitor .gallery .top_soc").toggleClass("deactive");       
   } else {

       $(".s_monitor .gallery .top_soc").toggleClass("active");
   }
   $(this).toggleClass("isDown");

   return false;
    
});


	$("#close_store").click( function(){
			$(".store_click").toggleClass("open");
			$(".mail_click").removeClass("open");
			$(".search_click").removeClass("open");
			$(".soc_click").removeClass("open");		
	});	

	$("#close_search").click( function(){
			$(".search_click").toggleClass("open");
			$(".mail_click").removeClass("open");
			$(".store_click").removeClass("open");
			$(".soc_click").removeClass("open");
	});	

	$("#close_mail").click( function(){
			$(".mail_click").toggleClass("open");
			$(".search_click").removeClass("open");
			$(".store_click").removeClass("open");
			$(".soc_click").removeClass("open");

	});	

	$("#close").click( function(){
			$(".soc_click").toggleClass("open");
			$(".search_click").removeClass("open");
			$(".store_click").removeClass("open");
			$(".mail_click").removeClass("open");
	});	

	$(".owl-prev").click(function() {
		$(".owl-next").removeClass("active");
		$(this).addClass("active");
	});

	$(".owl-next").click(function() {
		$(".owl-prev").removeClass("active");
		$(this).addClass("active");
	});

	
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

	$(document).ready(function() {
 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
     
      /*itemsCustom : [
        [0, 2],
        [450, 4],
        [600, 7],
        [700, 9],
        [1000, 10],
        [1200, 12],
        [1400, 13],
        [1600, 15]
      ],
      */
      navigation: true,

      items: 1,
      autoPlay: true,
      navigationText: ["prev","next"]
 
  });
 
});

	

	
	
	
	
});