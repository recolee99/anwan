jQuery(window).load(function() {
	
  jQuery('.mainflex').flexslider({
	animation: "fade",
	slideshow: true,                //Boolean: Animate slider automatically
	slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
	animationDuration: 600,         //Integer: Set the speed of animations, in milliseconds
	smoothHeight: true,
    });
	
  jQuery('.widgetflexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    itemWidth: 230,
    itemMargin: 0,
    minItems: 2,
    maxItems: 3
  });
  
});