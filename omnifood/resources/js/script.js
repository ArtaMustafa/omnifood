$(document).ready(function(){
 
  $('.js--section-features').waypoint(function(direction) {
  	if (direction == "down") {
         $('nav').addClass('sticky');
  	} else{
  	     $('nav').removeClass('sticky');
    }
 
 }, {
    	offset: '60px;'
    });


  $('.js--scroll-to-plants').click(function(){
  	$('html,body').animate({scrollTop: $('. js--scroll-to-plans').offset().top},1000);
  });


  $('.js--scroll-to-start').click(function(){
  	$('html,body').animate({scrollTop: $('. js--scroll-to-features').offset().top},1000);
  });

  $(function(){
  	$('a[href*=#]:not([href=#])').click(function(){
  		if(location.pathname.replace(/^\//,'')== this.pathname.replace(/^\//,'')&& location.hostname==this.hostname){
  			var target= $(this.hash);
  			target=target.length ? target: $('[name='+ this.hash.slice(1)+']');
  			if (target.length) {
  				$('html,body').animate({
  					scrollTop: traget.offset().top
  				},1000);
  				return false;
  				}
  			}
  		});
  	});
  $('.js--wp-1').waypoint(function(direction){
  	
  })

});




 
