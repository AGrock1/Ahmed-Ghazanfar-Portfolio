AOS.init({
    duration: 800,
    easing: 'slide'
});

(function($) {

    "use strict";

    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();

    // STABLE LOADER
    var loader = function() {
        setTimeout(function() { 
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
                $('body').css('overflow', 'auto'); // Restore scrolling
            }
        }, 50); // A small delay to ensure rendering
    };
    loader();

    // Burger Menu
    var burgerMenu = function() {
        $('body').on('click', '.js-fh5co-nav-toggle', function(event){
            event.preventDefault();
            if ( $('#ftco-nav').is(':visible') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active'); 
            }
        });
    };
    burgerMenu();

    // Smooth Scroll for Navigation
    var onePageClick = function() {
        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
            event.preventDefault();
            var href = $.attr(this, 'href');
            $('html, body').animate({
                scrollTop: $(href).offset().top - 70
            }, 500, 'easeInOutExpo');

            // Close the mobile menu after clicking a link
            if ($('#ftco-nav').is(':visible') && $(window).width() < 992) {
                $('.js-fh5co-nav-toggle').click();
            }
        });
    };
    onePageClick();
    
    // Header Scroll Logic
    var scrollWindow = function() {
        $(window).scroll(function(){
            var st = $(this).scrollTop(),
                navbar = $('.ftco_navbar');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');    
                }
            } 
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
        });
    };
    scrollWindow();

    // Carousel
    var carousel = function() {
        $('.home-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 0,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            nav: false,
            autoplayHoverPause: false,
            items: 1,
            responsive: {
              0: { items: 1 },
              600: { items: 1 },
              1000: { items: 1 }
            }
        });
    };
    carousel();

    // Content Animation on Scroll
    var contentWayPoint = function() {
        $('.ftco-animate').waypoint( function( direction ) {
            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                $(this.element).addClass('ftco-animated');
            }
        }, { offset: '95%' } );
    };
    contentWayPoint();

})(jQuery);