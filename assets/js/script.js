$(document).ready(function() {
	
	$("#navlogo").click(function () {
  		$("#sub-container1").fadeIn(400);
  		$("#sub-container2").fadeOut(400);
  		$("#sub-container3").fadeOut(400);
  		$("#navtyp").addClass("dull");
  		$("#navcol").addClass("dull");
  	})

	$("#navtyp").click(function () {
  		$("#sub-container1").fadeOut(400);
  		$("#sub-container2").fadeIn(400);
  		$("#sub-container3").fadeOut(400);
  		$("#navlogo").addClass("dull");
  		$("#navcol").addClass("dull");
  	})

	$("#navcol").click(function () {
  		$("#sub-container1").fadeOut(400);
  		$("#sub-container2").fadeOut(400);
  		$("#sub-container3").fadeIn(400);
  		$("#navlogo").addClass("dull");
  		$("#navtyp").addClass("dull");
  	})

	$("#logo img").click(function () {
  		$("#sub-container1").fadeIn(400);
  		$("#sub-container2").fadeIn(400);
  		$("#sub-container3").fadeIn(400);
  	})

	$("#navlogo").hover(function () {
		$("#navlogo").removeClass("dull").addClass("hover");
  	}, function() {
  		$("#navlogo").removeClass("hover");
  	})

	$("#navtyp").hover(function () {
		$("#navtyp").removeClass("dull").addClass("hover");
  	}, function() {
  		$("#navtyp").removeClass("hover");
  	})

	$("#navcol").hover(function () {
		$("#navcol").removeClass("dull").addClass("hover");
  	}, function() {
  		$("#navcol").removeClass("hover");
  	})	

});