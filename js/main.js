$('.nav-link-nav, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});
$('.primary-btn').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});
$('.btn-1').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1500);
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });
});

(function() {

    'use strict';


    // var $projects = $('.projects');

    // $projects.isotope({
    //     itemSelector: '.item',
    //     percentPosition: true,
    //     masonry: {
    //         columnWidth: 3
    //     }
    // });

    // $('ul.filters > li').on('click', function(e) {

    //     e.preventDefault();

    //     var filter = $(this).attr('data-filter');

    //     $('ul.filters > li').removeClass('active');
    //     $(this).addClass('active');

    //     $projects.isotope({
    //         filter: filter
    //     });

    // });

    $('.card').mouseenter(function() {

        $(this).find('.card-overlay').css({
            'top': '-100%'
        });
        $(this).find('.card-hover').css({
            'top': '0'
        });

    }).mouseleave(function() {

        $(this).find('.card-overlay').css({
            'top': '0'
        });
        $(this).find('.card-hover').css({
            'top': '100%'
        });


    });

    var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
      Navbar 
    -------------------------------------------------------------------------------*/

    //* Navbar Fixed
    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area').addClass('navbar_fixed');
                } else {
                    $('.header_area').removeClass('navbar_fixed');
                }
            });
        }

        $('.navbar-nav .nav-item').click(function() {
            $('.navbar-nav .nav-item').removeClass('active');
            $(this).addClass('active');
        })
    }
    navbarFixed();


})(jQuery);

new WOW().init();


// ============================






$(document).ready(function() {
    var $projects = $('.projects');

    $projects.imagesLoaded(function() {

        $projects.isotope({
            itemSelector: '.item',
            percentPosition: true,
            masonry: {
                columnWidth: 1
            }
        });

        $('ul.filters > li').on('click', function(e) {

            e.preventDefault();

            var filter = $(this).attr('data-filter');

            $('ul.filters > li').removeClass('active');
            $(this).addClass('active');

            $projects.isotope({
                filter: filter
            });

        });



    });
});