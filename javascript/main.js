$(document).ready(function(){

	var slideIndex = 0; 

	
	var slides = $(".slides");
	var dot = $(".dot");

	$(".yes").click(showStuff);


	function showStuff () {
		$(".yes")[0].style.display="none";
		$(".prev")[0].style.display="inline-block";
		$(".next")[0].style.display="inline-block";
		$(".slide_container")[0].style.display="inline-block";
		$(".dots")[0].style.display="inline-block";
		showSlides(slideIndex);		
	}
	
	function showSlides(n){
		var slides = $(".slides");
		var dot = $(".dot");

		if(n>=slides.length){slideIndex=0;};
		if(n<0){slideIndex=slides.length-1;};
		for (var i=0; i< slides.length; i++){
			slides[i].style.display= "none";
		};
		var op = 0.1; 
		var fadein = setInterval(function () {
			if (op >= 1){
				clearInterval(fadein);
			}
			slides[slideIndex].style.opacity = op;
			slides[slideIndex].style.filter = 'alpha(opacity=' + op * 100 + ")";
			slides[slideIndex].style.display = 'inline-block';
			op += op * 0.1;
		}, 7);
		for (var i=0; i< dot.length; i++){
			dot[i].className= dot[i].className.replace(" active","");

		};
		if (slideIndex==2){
    		$(".middle").css("filter", "brightness(85%)");	
    	}else{
    	$(".middle").css("filter", "brightness(130%) grayscale(40%)");
    	}
		dot[slideIndex].className+=" active";
	};

	$(".slides").mouseover(function(){
        $(".text").css("display", "inline-block");
    });

	$(".slides").mouseout(function(){
        $(".text").css("display", "none");
    });

    $(".middle").mouseover(function(){
    	$(".bg").css("filter","brightness(70%)");
    	$(".middle").css("filter", "brightness(140%) grayscale(40%)");
    });

    $(".middle").mouseout(function(){
    	$(".bg").css("filter","brightness(100%)");
    	if (slideIndex==2){
    		$(".middle").css("filter", "brightness(85%)");	
    	}else{
    	$(".middle").css("filter", "brightness(130%) grayscale(40%)");
    	}
    });

	$(".prev").click(function(){
		slideIndex-=1;
		showSlides(slideIndex);
	});

	$(".next").click(function(){
		slideIndex+=1;
		showSlides(slideIndex);
	})

	$(".dot").click(function(){
		var index = $(".dot").index(this);
		slideIndex = index;
		showSlides(slideIndex);
	})

});