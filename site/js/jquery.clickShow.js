(function($){  
    $.fn.extend({   
        //plugin name - clickShow
        clickShow: function(options) {  
 
            //Settings list and the default values  
            var defaults = {  
                src: '',
                height: '',
                width: '',
                caption: ''
            };  
               
           var options = $.extend(defaults, options);  
      
            return this.each(function() {  
                var o =options;  
                  
              $(this).css({'cursor' : 'pointer'});
              $(this).bind('click',function(evt){
                  
                  
                  // create a backdrop and add it to the document
                  var backdrop = $('<div id="backdrop"></div>');
                  var docH = $(document).height();
                  var docW = $(document).width();
    
                  backdrop.css( { 'cursor' : 'pointer', 'position' : 'absolute', 'left' : '0px', 'top' : '0px', 'background-color' : 'black', 'z-index' : '99', 'opacity' : '0', 'height' : docH + 'px' , 'width' : docW + 'px' } ); 
                  $('body').append(backdrop);  
                  backdrop.animate( { opacity: 0.80 }, 500 );
    
                  // add a div for the image and caption
                  var imagebox = $('<div id="imagebox"></div>');
                    
                  var winH = $(window).height();
                  var winW = $(window).width();
                  var imageH = (o.height) ? o.height : $(this).height();  
                  var imageW = (o.width) ? o.width : $(this).width();
                  var imgsrc = (o.src) ? o.src : $(this).attr('src');
                  
                  //Create the caption div if the argument has been passed in
                  if (o.caption) {
                    var captiontxt = o.caption;
                    var captionbox = $('<div id="captionbox"></div>');
                    captionbox.css({'background-color' : '#fff',
                    				'position' : 'absolute',
                    				'left' : (winW/2 - imageW/2) + $(window).scrollLeft() + 'px',
                    				'width' : imageW + 'px', 'z-index' : '100',
                    				'opacity': '0', 'border-top': '1px #000000 solid',
                    				'font-size' : '11px',
                    				'text-align' : 'center',
                    				'font-family': 'Tahoma, Arial, Helvetica, Sans-serif'});
                    
                    captionbox.append(captiontxt); 
                  }

                  
                  imagebox.css( {'background-image' : 'url(' + imgsrc +')',
                  				'position' : 'absolute',
                  				'opacity' : '0' ,
                  				'left' : (winW/2 - imageW/2) + $(window).scrollLeft() + 'px',
                  				'z-index' : '100',
                  				'height' : imageH + 'px',
                  				'width' : imageW + 'px', 
                  				'top' : winH/2 - imageH/2 + $(window).scrollTop() + 'px'} );   
                 
				  $('body').append(imagebox);
                  if(o.caption){
                  	$('body').append(captionbox);
                    imagebox.css({'top' : ((winH/2 - imageH/2) + $(window).scrollLeft() + ($('#captionbox').height() / 2)) + $(window).scrollTop() + 'px'})
                    captionbox.css({'top' : ((winH/2 + imageH/2) + $(window).scrollLeft() + ($('#captionbox').height() /2)) + $(window).scrollTop() + 'px'});
                  }
				  
				  imagebox.animate( { opacity: 1 }, 500 );
                  
                  if(o.caption) { captionbox.animate( { opacity: 1 }, 500 ); }
                  
                  //Remove both Div's if they click on the background
                  $('#backdrop').bind('click', function(){ 
                      $(window).unbind('resize');
                      $('#imagebox').animate( { opacity: 0 }, 500);
                      $('#captionbox').animate( { opacity: 0 }, 500);
                      $('#backdrop').animate( { opacity: 0 }, 500, 
                      function(){$('#backdrop').remove(); $('#imagebox').remove(); if($('#captionbox').length > 0) { $('#captionbox').remove();} } );
                  });
                 
                 
                 $(window).resize(function() {                
                  var docH = $(document).height();
                  var docW = $(document).width();                
                  var winH = $(window).height();
                  var winW = $(window).width();
                  backdrop.css({'height' : docH + 'px' , 'width' : docW + 'px'});
                  if($('#captionbox').length > 0) {
                    captionbox.css({'left' : (winW/2 - imageW/2) + $(window).scrollLeft() + 'px', 'top' : ((winH/2 + imageH/2) + ($('#captionbox').height() /2)) + $(window).scrollTop() + 'px'})
                    imagebox.css({ 'left' : (winW/2 - imageW/2) + $(window).scrollLeft() + 'px', 'top' : ((winH/2 - imageH/2) + ($('#captionbox').height() / 2)) + + $(window).scrollTop() + 'px'})
                  } else {
                   imagebox.css({ 'left' : (winW/2 - imageW/2) + $(window).scrollLeft() + 'px', 'top' : (winH/2 - imageH/2) + $(window).scrollTop() + 'px' });
                  };
                 });

                 $(document).keyup(function(e) {
                  if(e.keyCode == '27'){
                     $(window).unbind('resize');
                      $('#imagebox').animate( { opacity: 0 }, 500);
                      $('#captionbox').animate( { opacity: 0 }, 500);
                      $('#backdrop').animate( { opacity: 0 }, 500, 
                      function(){$('#backdrop').remove(); $('#imagebox').remove(); if($('#captionbox').length > 0) { $('#captionbox').remove();} } )
                   }
                  });


                 evt.preventDefault();
              });


		
			
            });  
        }
    });
})(jQuery);  