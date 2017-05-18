(function ($) {
var hwSlideSpeed = 1500;
var hwTimeOut = 3000;
var hwNeedLinks = true;

$(document).ready(function(e) {
	$('.slide').css(
		{"position" : "absolute","top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $(".slider_wrap").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
	
		if(arrow == "next"){
			if(slideNum == (slideCount + 1)){slideNum=0;    console.log(slideNum)}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount + 1;}
			else{slideNum+=1}
		}
		else{
			slideNum = arrow;
			}
		$('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
		}
if(hwNeedLinks){
var $linkArrow = $('<a id="prew_button" href="#"></a><a id="next_button" href="#"></a>')
	.prependTo('#slider');      
	$('#next_button').click(function(){
		animSlide("next");
		return false;
		})
	$('#prew_button').click(function(){
		animSlide("prew");
		return false;
		})
}
	var $adderSpan = '';
  
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, hwTimeOut);}
			}
	$('.slider_wrap').hover(    
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);