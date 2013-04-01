jQuery(document).ready(function ($) {

    //initialise Stellar.js
    $(window).stellar();

    //Cache some variables
    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');

    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        dataslide = $(this).attr('data-slide');
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
        //remove the active class from the previous navigation link 

		if (direction === 'down') {
			if(dataslide == 6)
				$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().prev().removeClass('active');
			else
				$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
			dataslide = dataslide - 1;
			if(dataslide == 5)
				$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().next().removeClass('active');
			else
            	$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
			if(dataslide == 1)
				$('.navigation li[data-slide="2"]').removeClass('active');
        }

    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
	
	$("#logo").click(function (e) {
        e.preventDefault();
        goToByScroll(1);
    });
	
	
	////////////////////// Accordion
	$("#accordion img.menu_head").click(function()
    {
		$(this).attr("src") == "assets/menos.png" ? $(this).attr("src","assets/mais.png") : $(this).attr("src","assets/menos.png");
		$(this).parent().next().slideToggle(300).siblings("div.menu_body").slideUp("slow");
		$(this).parent().siblings().find("img.menu_head").attr("src","assets/mais.png");
	});
	
	$(".inphotosEvento a").fancybox({
				'overlayShow'	: true,
				'transitionIn'	: 'elastic',
				'transitionOut'	: 'elastic',
				'opacity'		: true,
			});
	$('.tipsY').tipsy({
		gravity: 's', // nw | n | ne | w | e | sw | s | se
		fade: true,
		opacity: 0.8
	});
});