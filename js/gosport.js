 /* left nav btn */
 $(".left-nav-btn-container").click(function(e) {
    e.preventDefault();
    $(".move-section").toggleClass("move-section-toggled");
    $(".left-nav-btn-container").toggleClass("is-active");
    $(".nav-scroller").toggleClass("nav-scroller-active");
});

/* left nav */
    
$(document).on("click",".left-nav span",function(e) {

	console.log('Left nav item clicked');
	$(this).closest('li').toggleClass("nav-active-item");

});

/* scroll */
$(document).on("click","a",function(e) {
	if($(this).attr('href') == "#" ){
	
    }else{
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	}
    return false;
});