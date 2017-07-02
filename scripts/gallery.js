$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var isios = 0;

    if (isiPhone > -1) {
        $('.wedding-inside').css('position', 'fixed');
        $('.wedding-inside').css('background-attachment', 'scroll');

        document.body.style.overflow = "hidden";
        $('#iOS-Scroll').removeClass('no-scroll');
        $('#iOS-Scroll').addClass('yes-scroll');
        //$('body').addClass('no-scroll');
        //$('#close-it').fadeOut(0);


        //document.getElementById("viewport").setAttribute("content", "width=800, minimal-ui");
        isios = 1;

    }
    if (isiPad > -1) {
        $('.wedding-inside').css('position', 'fixed');
        $('.wedding-inside').css('background-attachment', 'scroll');

        document.body.style.overflow = "hidden";
        $('#iOS-Scroll').removeClass('no-scroll');
        $('#iOS-Scroll').addClass('yes-scroll');
        //$('#close-it').fadeOut(0);
        isios = 1;


    }
    if (isiPod > -1) {
        $('.wedding-inside').css('position', 'fixed');
        $('.wedding-inside').css('background-attachment', 'scroll');

        document.body.style.overflow = "hidden";
        $('#iOS-Scroll').removeClass('no-scroll');
        $('#iOS-Scroll').addClass('yes-scroll');
        //$('#close-it').fadeOut(0);


        //document.getElementById("viewport").setAttribute("content", "width=800, minimal-ui");
        isios = 1;
    }

    if (isios == 1) {

        //touch scroll stop*******************************************************
        var INITIAL_Y = 0; // Tracks initial Y position, needed to kill Safari bounce effect

        function kill_safari_bounce() {
            $(document).on('touchstart', function (e) {
                INITIAL_Y = e.originalEvent.touches[0].clientY;
            });

            $(document).on('touchmove', function (e) {
                // Get scrollable ancestor if one exists
                var scrollable_ancestor = $(e.target).closest('.wedding-inside')[0];

                // Nothing scrollable? Block move.
                if (!scrollable_ancestor) {
                    e.preventDefault();
                    return;
                }

                // If here, prevent move if at scrollable boundaries.
                var scroll_delta = INITIAL_Y - e.originalEvent.touches[0].clientY;
                var scroll_pos = scrollable_ancestor.scrollTop;
                var at_bottom = (scroll_pos + $(scrollable_ancestor).height()) == scrollable_ancestor.scrollHeight;

                if ((scroll_delta < 0 && scroll_pos == 0) ||
                    (scroll_delta > 0 && at_bottom)) {
                    e.preventDefault();
                }
            });
        }
        //****************************************************************************

    }



    //Chrome
    if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        // Get device pixel ratio
        function getDPR() {
            var mediaQuery;
            // Fix fake window.devicePixelRatio on mobile Firefox
            var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (window.devicePixelRatio !== undefined && !is_firefox) {
                return window.devicePixelRatio;
            } else if (window.matchMedia) {
                mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                        (min--moz-device-pixel-ratio: 1.5),\
                        (-o-min-device-pixel-ratio: 3/2),\
                        (min-resolution: 1.5dppx)";
                if (window.matchMedia(mediaQuery).matches)
                    return 1.5;
                mediaQuery = "(-webkit-min-device-pixel-ratio: 2),\
                        (min--moz-device-pixel-ratio: 2),\
                        (-o-min-device-pixel-ratio: 2/1),\
                        (min-resolution: 2dppx)";
                if (window.matchMedia(mediaQuery).matches)
                    return 2;
                mediaQuery = "(-webkit-min-device-pixel-ratio: 0.75),\
                        (min--moz-device-pixel-ratio: 0.75),\
                        (-o-min-device-pixel-ratio: 3/4),\
                        (min-resolution: 0.75dppx)";
                if (window.matchMedia(mediaQuery).matches)
                    return 0.7;
            } else
                return 1;
        }
        if (getDPR() > 1) {
            $('.wedding-inside').css('position', 'fixed');
            $('.wedding-inside').css('background-attachment', 'scroll');
        } else {
            $('.wedding-inside').css('position', 'absolute');
            $('.wedding-inside').css('background-attachment', 'fixed');
        }


    }

    //Android   
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        $('.wedding-inside').css('position', 'fixed');
        $('.wedding-inside').css('background-attachment', 'scroll');
        document.getElementById("viewport").setAttribute("content", "width=800");
        $('#gallery-logo').css('zoom', '50%');
    }

    //Animate Scroll Indicator
    $('#gallery-scroll').delay(400).animate({
        bottom: 50
    }, 500, function () {
        $(window).resize();
    });
    $('#gallery-scroll').delay(400).animate({
        bottom: 0
    }, 100);
    $('#gallery-scroll').delay(400).animate({
        bottom: 50
    }, 500);
    $('#gallery-scroll').delay(400).animate({
        bottom: 0
    }, 100);
    $('#gallery-scroll').delay(400).animate({
        bottom: 50
    }, 500);
    $('#gallery-scroll').delay(400).animate({
        bottom: 0
    }, 100);

    /*$('#gallery-scroll').click(function() {
  $('#gallery-scroll').animate({ bottom: 50 }, 500);
});

$('#gallery-scroll').mouseout(function() {
  $('#gallery-scroll').animate({ bottom: -5 }, 500);
});*/

    $("#close-it").click(function () {

        window.open('http://hungthemoonphotography.com/galleries', '_self');

    });

    $("#close-it").text('GO BACK');


});




$(function () {


    $(window).resize();




});

/*
$(function () {
    var pathname = $(location).attr('href');
    var orichange = 0;

    function doOnOrientationChange() {
        switch (window.orientation) {
        case -90:
        case 90:
            //alert('landscape');
            if ((/#/.test(pathname))) {

            } else {
                window.open(pathname + '#', '_self');
            }
            break;
        default:
            //alert('portrait');
            if ((/#/.test(pathname))) {

            } else {
                window.open(pathname + '#', '_self');
            }
            break;
        }
    }

    window.addEventListener('orientationchange', doOnOrientationChange);

    // Initial execution if needed
    doOnOrientationChange();



});*/