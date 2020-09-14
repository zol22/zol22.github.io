$("#btn-more").on('click', function(e){
	 e.stopPropagation();
	e.preventDefault();
	//$(".navigation").slideToggle();
	
	$(".navbar").toggleClass("hide");

});

