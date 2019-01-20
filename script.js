$(document).ready(function() {
 
	//code already in
 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	//Events Challenge code:

	$("p").click(function(){
		$("p").css("background-color", "red");
	});

	$("h2").hover(function(){
		$("h2").css("background-color", "lightblue");
	});
	
	$("h2").hover(function(){
		$(this).css("font-size", "50px");
	});

	$("a.bottom_button").hover(
		function () {
			$("body").removeClass("bg_grey");
			$("body").addClass("bg_black");
		},
		function () {
			$("body").removeClass("bg_black");
			$("body").addClass("bg_grey");
		});
}); 
