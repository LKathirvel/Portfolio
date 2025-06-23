(function ($) {

  "use strict";

    // // COLOR MODE
    // $('.color-mode').click(function(){
    //     $('.color-mode-icon').toggleClass('active')
    //     $('body').toggleClass('dark-mode')
    // })

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')

        // 🌗 Image swap logic
        const profileImg = document.getElementById("profileimg");
        if ($('body').hasClass('dark-mode')) {
            profileImg.src = "Asset's/SVG/svg-dark.png";  // 🔁 your dark mode image
        } else {
            profileImg.src = "Asset's/SVG/svg.png";       // 🔁 your light mode image
        }
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);
