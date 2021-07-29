(function () {
	"use strict";
	
    jQuery(document).ready(function($){
		
		/*Popover*/
		$('[data-toggle="popover"]').popover(
    		{
			html : true,
			trigger: 'focus',
			//trigger :'manual',
			content: function() {
				var content = $(this).attr("data-popover-content");
				return $(content).children(".popover-body").html();
			}
	    });
		
		$('[data-toggle="tooltip"]').tooltip();
		 
		//For mobile menu
		$( "#navigation" ).clone().prependTo( $( ".nav-mobile" ) ); 

		//Main Slider
        $(".home-banner").slick({
            slidesToShow: 1,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            draggable: false,
            //touchMove: false,
			fade: true,
			prevArrow: $('.first-slide-prev'),
		    nextArrow: $('.first-slide-next')
        });
        
        //Main Slider
        $(".hero2-carousel").slick({
            slidesToShow: 1,
			arrows: false,
            dots: true,
            autoplay: true,
            infinite: true,
            draggable: false,
            //touchMove: false,
			fade: true,
        });
		
		$(".testimonial-slide").slick({
            infinite: true,
            dots: false,
            arrows: false,
            autoplay: true,
            asNavFor: '.testimonial-dots',
            slidesToShow: 1,
            slidesToScroll: 1,
        });
        $('.testimonial-dots').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-slide',
            arrows: false,
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '20%',
        });
        
        //industry insight
        $(".industry-insight-slider").slick({
            slidesToShow: 1,
            arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
			nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            mouseDrag: false,
            //touchMove: false,
			animateOut: 'slide',
        });
        

		//WOW animation
		new WOW().init();
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		

		
    });

}(jQuery));	


