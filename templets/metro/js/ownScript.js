jQuery(document).ready(function(){


		// hide .scrollTo_top first
			jQuery(".scrollTo_top").hide();
		// fade in .scrollTo_top
		jQuery(function () {
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > 100) {
					jQuery('.scrollTo_top').fadeIn();
				} else {
					jQuery('.scrollTo_top').fadeOut();
				}
			});
	
			// scroll body to 0px on click
		jQuery('.scrollTo_top a').click(function(){
			jQuery('html, body').animate({scrollTop:0}, 500 );
			return false;
		});
		});


		/* ticker */
		
	    jQuery(function(){
    		jQuery("ul.ticker").liScroll();
    	}); 



		/* folio hover */
			
		jQuery('.medpost').on('mouseenter', 'li.format-image', function() {
			jQuery(this).find('img.attachment-format-image').stop(true, true).animate({'opacity': '0.3'}, {duration:350});
	
		});
	
		jQuery('.medpost').on('mouseleave', 'li.format-image', function() {
			jQuery(this).find('img.attachment-format-image').stop(true, true).animate({'opacity': '1'}, {duration:350});                           
		});  

		jQuery('.mi-slider ul').on('mouseenter', 'li', function() {
			jQuery(this).find('.hoverstuff').stop(true, true).animate({'opacity': '1','left': '0px'}, {duration:350});
	
		});
	
		jQuery('.mi-slider ul').on('mouseleave', 'li', function() {
			jQuery(this).find('.hoverstuff').stop(true, true).animate({'opacity': '0','left': '-240px'}, {duration:500});                           
		}); 

		/* wp gallery hover */	
				
		jQuery('.gallery-item,.mi-slider ul li,.related li').hover(function() {
			jQuery(this).find('img')
				.animate({
					opacity: '0.2', 	
				}, 300); 
		
			} , function() {
		
			jQuery(this).find('img')
				.animate({
					opacity: '1', 	
				}, 400); 
		});


	/* sticky navigation */
	
		jQuery(function() {
		
			// grab the initial top offset of the navigation 
			var sticky_navigation_offset_top = jQuery('#navigation').offset().top;
			
			// our function that decides weather the navigation bar should have "fixed" css position or not.
			var sticky_navigation = function(){
				var scroll_top = jQuery(window).scrollTop(); // our current vertical position from the top
				
				// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
				if (scroll_top > sticky_navigation_offset_top) { 
					jQuery('#navigation').css({ 'position': 'fixed', 'top':0, 'width':1200 });
					jQuery('#navigation').addClass('boxshadow disres');
				} else {
					jQuery('#navigation').css({ 'position': 'relative' ,'top':0,});
					jQuery('#navigation').removeClass('boxshadow disres'); 
				}   
			};
	
			// run our function on load
			sticky_navigation();
			
			// and run it again every time you scroll
			jQuery(window).scroll(function() {
				 sticky_navigation();
			});
			
			// NOT required:
			// for this demo disable all links that point to "#"
			jQuery('a[href="#"]').click(function(event){ 
				event.preventDefault(); 
			});
			
		});




	/* Tooltips */
		jQuery("body").prepend('<div class="tooltip"><p></p></div>');
		var tt = jQuery("div.tooltip");
		
		jQuery(".flickr_badge_image a img,ul.social-menu li a").hover(function() {								
			var btn = jQuery(this);
			
			tt.children("p").text(btn.attr("title"));								
						
			var t = Math.floor(tt.outerWidth(true)/2),
				b = Math.floor(btn.outerWidth(true)/2),							
				y = btn.offset().top - 30,
				x = btn.offset().left - (t-b);
						
			tt.css({"top" : y+"px", "left" : x+"px", "display" : "block"});			
			   
		}, function() {		
			tt.hide();			
		});


	/* Resize too large images */
	var size = 614;
	var image = jQuery('.entry img');
	
	for (i=0; i<image.length; i++) {
		var bigWidth = image[i].width;
		var bigHeight = image[i].height;
	
		if (bigWidth > size) {	
			var newHeight = bigHeight*size/bigWidth;
			image[i].width = size;
			image[i].height = newHeight;
		}
	}


	function lightbox() {
		// Apply PrettyPhoto to find the relation with our portfolio item
		jQuery("a[rel^='prettyPhoto']").prettyPhoto({
			// Parameters for PrettyPhoto styling
			animationSpeed:'fast',
			slideshow:5000,
			theme:'pp_default',
			show_title:false,
			overlay_gallery: false,
			social_tools: false
		});
	}
	
	if(jQuery().prettyPhoto) {
		lightbox();
	}

});