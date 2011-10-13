(function($) {
  var cache = [];
  // Arguments are image paths relative to the current page.
  $.preLoadImages = function() {
    var args_len = arguments.length;
    for (var i = args_len; i--;) {
      var cacheImage = document.createElement('img');
      cacheImage.src = arguments[i];
      cache.push(cacheImage);
    }
  }
})(jQuery)

$(window).load(function(){
	//friendly little boxes dance onto the screen
	$("#box1").animate({"right": "+=76px"}, 1200);
	$("#box2").animate({"right": "+=54px"}, 1200);
	$("#box3").animate({"right": "+=32px"}, 1200); 	

	$.preLoadImages("images/diploma.png","images/award.png");

});

$(document).ready(function(){

  //clickShow plugin!
  $('.imgbox').clickShow({'src' : 'images/me_longhair.png', 'height' : '225', 'width' : '170','caption' : 'When I had long hair'});
  $('.diploma').clickShow({'src' : 'images/diploma.png', 'height' : '359', 'width' : '450','caption' : 'SUNY Plattsburgh Diploma'});  
  $('.award').clickShow({'src' : 'images/award.png', 'height' : '450', 'width' : '344'});  
  $('.qtpreview').clickShow({'src' : 'images/qtss.png', 'height' : '250', 'width' : '200'});
  $('.sgpreview').clickShow({'src' : 'images/sgss.png', 'height' : '143', 'width' : '200'});
  $('.cscapreview').clickShow({'src' : 'images/cscass.png', 'height' : '248', 'width' : '400'});
  
  //Content display click functions		  //$('.nav').bind('click', function(evt){  //  var content = ($(this).html()).toLowerCase();  //  $('.content:visible').slideToggle('slow',function(){  //      $('#'+content).slideToggle('slow');  //  });  //  evt.preventDefault();  //});
  
    //Content display click functions		
    $('.nav').bind('click', function(evt){
      var content = ($(this).html()).toLowerCase();
      $('.content:visible').fadeOut('slow',function(){
  
          $('#'+content).fadeIn('slow');
      });
      evt.preventDefault();
    });
  
  
  
  //Project Page needs a display function!
  //Div's should be given ID's then click should be bound to class project nav.
  //Then use $(this) to strip out what div was clicked and append the proper div ID name to and expand.
  
  
  
  //Colorbox hover and click functions
  $('.colorbox').hover(
    function(){ $(this).css({'border': '1px solid #ffffff'});},
  	function(){ $(this).css({'border': '1px solid #505050'});}
  	);

  $('.colorbox').bind('click', function(evt){ 
	var color = $(this).css('background-color');
  	$('#padder').animate( { backgroundColor: color }, 1000); 
  	$('.project-nav').animate( { backgroundColor: color }, 1000);
  	evt.preventDefault();
  	});



});