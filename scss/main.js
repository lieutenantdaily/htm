//Detect Webkit**********************************************************
$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

    if (isiPhone > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
    if (isiPad > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
    if (isiPod > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }


    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
    }
});
//****************************************************************************

//Load Screen**********************************************************
$(function () {
    var loadall = $('#load-shell, #big-logo');
    var loadbackground = $('#load-background');
    var load = $('#load');
    var h = $(window).height();
    var w = $(window).width();
    load.animate({
        width: 500
    }, 5000, function () {



        loadall.delay(200).fadeOut(1500);
        loadbackground.delay(700).fadeOut(1300);


    });


});
//****************************************************************************

//Animate Icons**********************************************************
$(document).ready(function () {
    var SlideSpeed = 400;
    var divs = $(".line2");
    var divs2 = $("#social-bar");
    var blogs = $("#blog-shell, #social-bar");
    var blogframe = $('#blog, #blog-frame');
    var divs3 = $("#fs-background-transparent2");
    var clicks = $(".social1, .social2, .social3");
    var clicks2 = $(".social-label1, .social-label2, .social-label3");
    var clicks3 = $("#twitter, #facebook, #email");
    var close = $(".close-button, #fs-background-transparent2");
    var iframe = $(".gmap");
    var open = 0;
    var speed = 500;
    var ex = 0;


    function CurrentMargin() {
        // get current margin of slider
        var currentMargin = divs.css("margin-left");

        // return the current margin to the function as an integer
        return parseInt(currentMargin);
    }


    function SetNavigationDisplay() {
        // get current margin
        var currentMargin = CurrentMargin();

    }

    //make slider show
    $('.social1').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 200
            }, 500);
            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);

            $('#twitter').css('visibility', 'visible');
            $('.social1').css('border-top', 'solid 6px #878787');
            $('.social-label1').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });

    $('.social2').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 200
            }, 500);
            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);

            $('#facebook').css('visibility', 'visible');
            $('.social2').css('border-top', 'solid 6px #878787');
            $('.social-label2').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });


    function setFocusThickboxIframe() {
        var iframe = $("#blog-frame")[0];
        iframe.contentWindow.focus();
    }

    $('.social3').click(function (e) {

        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            h = $(window).height();
            //alert("huh?");
            open = 1
            var newMargin = 320;
            //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
            if (ex == 1) {
                divs2.animate({
                    height: h - 76
                }, 500);
                $('#main').animate({
                    opacity: 0
                }, 500, function () {
                    $('#main').css('display', 'none');
                });
            }
            if (ex == 0) {
                divs2.animate({
                    height: 545
                }, 500);
            }

            $('#social-background').fadeIn(500);


            //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');
            clicks3.css('visibility', 'hidden');
            iframe.fadeOut(0);

            $('#email').css('visibility', 'visible');
            $('.social3').css('border-top', 'solid 6px #878787');
            $('.social-label3').css('opacity', '0');
            //$('#fs-background-transparent2').css("visibility","visible");
            $('#social-bar').css("visibility", "visible");
            $('#social-bar').css("opacity", "1");
        }
    });

    $(".all-button").click(function () {
        $("#blog-frame").attr("src", "http://hungthemoonphotography.com/blog");
    });

    $('.expand').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            if (ex == 0) {
                w = $(window).width();
                h = $(window).height();

                blogs.animate({
                    width: w
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    height: h - 76
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    marginLeft: 0
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    left: 0
                }, {
                    duration: speed,
                    queue: false
                });
                blogframe.animate({
                    width: w
                }, {
                    duration: speed,
                    queue: false
                });
                blogframe.animate({
                    height: h - 111
                }, {
                    duration: speed,
                    queue: false
                });
                $('.close').animate({
                    marginTop: h - 106
                }, {
                    duration: speed,
                    queue: false
                });
                $('.expand').animate({
                    marginTop: h - 106
                }, {
                    duration: speed,
                    queue: false
                });
                $('.expand').animate({
                    marginLeft: w - 35
                }, {
                    duration: speed,
                    queue: false,
                });

                $('#main').animate({
                    opacity: 0
                }, 1000, function () {
                    divs2.css('border-bottom-right-radius', '0px');
                    divs2.css('border-bottom-left-radius', '0px');
                    $('#main').css('display', 'none');
                    $('#expand').removeClass("fa-expand");
                    $('#expand').addClass("fa-compress");
                    ex = 1;
                    w = $(window).width();
                    $('.expand').animate({
                        marginLeft: w - 35
                    }, {
                        duration: 0,
                        queue: false,
                    });
                    blogframe.animate({
                        width: w
                    }, {
                        duration: 0,
                        queue: false
                    });
                    blogs.animate({
                        width: w
                    }, {
                        duration: 0,
                        queue: false
                    });
                });


            }
            if (ex == 1) {
                w = $(window).width();
                h = $(window).height();

                blogs.animate({
                    width: 460
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    height: 545
                }, {
                    duration: speed,
                    queue: false
                });
                $("#social-bar").animate({
                    marginLeft: 485
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    left: (w - 940) / 2
                }, {
                    duration: speed,
                    queue: false
                });
                blogframe.animate({
                    width: 460
                }, {
                    duration: speed,
                    queue: false
                });
                blogframe.animate({
                    height: 510
                }, {
                    duration: speed,
                    queue: false
                });
                $('.close').animate({
                    marginTop: 515
                }, {
                    duration: speed,
                    queue: false
                });
                $('.expand').animate({
                    marginTop: 515
                }, {
                    duration: speed,
                    queue: false
                });
                $('.expand').animate({
                    marginLeft: 425
                }, {
                    duration: speed,
                    queue: false,
                });
                $('#main').fadeIn(500);
                $('#main').animate({
                    opacity: 1
                }, 1000, function () {
                    divs2.css('border-bottom-right-radius', '2px');
                    divs2.css('border-bottom-left-radius', '2px');
                    $('#expand').removeClass("fa-compress");
                    $('#expand').addClass("fa-expand");
                    ex = 0;
                });
            }


        }
    });




    close.click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            //alert("huh?");
            open = 0
            var newMargin = 320;
            //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });
            divs2.animate({
                height: 1
            }, 500, function () {
                $('#social-bar').css("visibility", "hidden");
                clicks3.css('visibility', 'hidden');
                iframe.fadeOut(0);
            });
            $('#social-background').fadeOut(500);
            //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });
            clicks.css('border-top', 'none');
            clicks2.css('opacity', '1');

            if (ex == 1) {
                $('#main').fadeIn(500);
                $('#main').animate({
                    opacity: 1
                }, 500);
            }



            //$('#fs-background-transparent2').css("visibility","hidden");
        }
    });

    $(window).on('resize', function () {
        if (ex == 1) {
            w = $(window).width();
            h = $(window).height();

            blogs.css({
                width: w
            });
            if (open == 1) {
                blogs.css({
                    height: h - 76
                });
            }
            if (open == 0) {
                divs2.css({
                    height: 0
                });
            }
            blogs.css({
                marginLeft: 0
            });
            blogs.css({
                left: 0
            });
            blogframe.css({
                width: w
            });
            blogframe.css({
                height: h - 111
            });
            blogframe.css({
                height: h - 111
            });
            $('.close').css({
                marginTop: h - 106
            });
            $('.expand').css({
                marginTop: h - 106
            });
            $('.expand').css({
                marginLeft: w - 35
            });
        }
        if (ex == 0) {
            w = $(window).width();
            h = $(window).height();


            blogs.css({
                left: (w - 940) / 2
            });
        }




    });

    $(window).on('scroll', function (e) {
        e.preventDefault();
        var scrollTop = $(window).scrollTop();
        if (scrollTop < 845) {
            if (divs2.is(':not(:animated)')) {
                //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });

                $("#slideshow").fadeIn(0)
                //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });

                //$('#fs-background-transparent2').css("visibility","hidden");
            }

        }

        if (open == 1) {

            if (scrollTop >= 845) {

                if (divs2.is(':not(:animated)')) {
                    //divs.animate({ marginLeft: 640 }, SlideSpeed, function () { SetNavigationDisplay() });

                    //divs2.animate({ opacity: 0 }, 1000, function () { SetNavigationDisplay() });

                    //$('#fs-background-transparent2').css("visibility","hidden");
                    $("#slideshow").fadeOut(0)

                }
            }
        }





    });


});
//**********************************************************************

//Animate Pawn FAQ**********************************************************
$(document).ready(function () {
    var content = $(".pawn-faq-content");
    var all = $(".pawn-faq");
    var clicks = $(".pawn-faq-click");
    var close = $(".pawn-faq-close");
    var background = $(".pawn-faq-background");
    var page = $("#main");
    var open = 0;
    var h = $(window).height();
    var contentHeight = h - 142;

    //make slider show
    clicks.click(function (e) {
        open = 1;
        background.fadeIn(500, function () {
            all.fadeIn(500, function () {
                e.preventDefault();
                if (content.is(':not(:animated)')) {
                    content.animate({
                        height: contentHeight
                    }, 500);
                    document.body.style.overflow = "hidden";
                }
            });
        });
    });


    close.click(function (e) {
        open = 0;
        e.preventDefault();
        if (content.is(':not(:animated)')) {
            content.animate({
                height: 0
            }, 500, function () {
                all.fadeOut(500);
                document.body.style.overflow = "visible";
            });
        }
    });

    $(window).on('resize', function () {
        h = $(window).height();
        contentHeight = h - 142;
        if (open == 1) {
            content.css('height', contentHeight);
        } else {
            content.css('height', '0px');
        }
    });


});
//**********************************************************************

//Animate inventory FAQ**********************************************************
$(document).ready(function () {
    var content = $(".inventory-faq-content");
    var all = $(".inventory-faq");
    var clicks = $(".inventory-faq-click");
    var close = $(".inventory-faq-close");
    var background = $(".inventory-faq-background");
    var page = $("#main");
    var open = 0;
    var h = $(window).height();
    var contentHeight = h - 142;

    //make slider show
    clicks.click(function (e) {
        open = 1;
        background.fadeIn(500, function () {
            all.fadeIn(500, function () {
                e.preventDefault();
                if (content.is(':not(:animated)')) {
                    content.animate({
                        height: contentHeight
                    }, 500);
                    document.body.style.overflow = "hidden";
                }
            });
        });
    });


    close.click(function (e) {
        open = 0;
        e.preventDefault();
        if (content.is(':not(:animated)')) {
            content.animate({
                height: 0
            }, 500, function () {
                all.fadeOut(500);
                document.body.style.overflow = "visible";
            });
        }
    });

    $(window).on('resize', function () {
        h = $(window).height();
        contentHeight = h - 142;
        if (open == 1) {
            content.css('height', contentHeight);
        } else {
            content.css('height', '0px');
        }
    });


});
//**********************************************************************

//Animate payday-rates FAQ**********************************************************
$(document).ready(function () {
    var content = $(".payday-rates-faq-content");
    var all = $(".payday-rates-faq");
    var clicks = $(".payday-rates-faq-click");
    var close = $(".payday-rates-faq-close");
    var background = $(".payday-rates-faq-background");
    var page = $("#main");
    var open = 0;
    var h = $(window).height();
    var contentHeight = h - 142;

    //make slider show
    clicks.click(function (e) {
        open = 1;
        background.fadeIn(500, function () {
            all.fadeIn(500, function () {
                e.preventDefault();
                if (content.is(':not(:animated)')) {
                    content.animate({
                        height: contentHeight
                    }, 500);
                    document.body.style.overflow = "hidden";
                }
            });
        });
    });


    close.click(function (e) {
        open = 0;
        e.preventDefault();
        if (content.is(':not(:animated)')) {
            content.animate({
                height: 0
            }, 500, function () {
                all.fadeOut(500);
                document.body.style.overflow = "visible";
            });
        }
    });

    $(window).on('resize', function () {
        h = $(window).height();
        contentHeight = h - 142;
        if (open == 1) {
            content.css('height', contentHeight);
        } else {
            content.css('height', '0px');
        }
    });


});
//**********************************************************************




// scroll arrow**********************************************************
var bodyHeight = $("body").height() - $(window).height();
window.onscroll = function () {
    var deg = -$(window).scrollTop() * ((180 / bodyHeight) * 2);
    if (deg <= 180) {
        $(".scroll-indicator").css({
            "transform": "rotate(" + deg + "deg)",
        });
    }
    if (deg > 180) {
        $(".scroll-indicator").css({
            "transform": "rotate(180deg)",
        });
    }
};
//***********************************************************************



// scroll links**********************************************************
// When the Document Object Model is ready
/*var scroller = 1200;
$(function() {
var $root = $('html, body');
$('a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, scroller, function () {
        window.location.hash = href;
    });
    return false;
});
});
*/
$(function () {
    var scroller = 700;
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                //if (!$('html,body').is(':animated')) {

                //alert('not animated');

                $('html,body').animate({
                    scrollTop: target.offset().top
                }, scroller);
                return false;
                //}          

            }
        }
    });


});
//********************************************************************



//Resize ALL**********************************************************0987
$(function () {
    //detect Firefox and set absolute for slideshow
    var FF = !(window.mozInnerScreenX == null);

    if (FF) {
        //alert("ff");
        $('.cb-slideshow').css('position', 'absolute');
        $('.cb-slideshow li:nth-child(1) span').css('width', w);
        $('.cb-slideshow li:nth-child(1) span').css('height', h);


        $.fn.animateRotate = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 0
                }).animate({
                    deg: angle
                }, args);
            });
        };

        $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
            var args = $.speed(duration, easing, complete);
            var step = args.step;
            return this.each(function (i, e) {
                args.step = function (now) {
                    $.style(e, 'transform', 'rotate(' + now + 'deg)');
                    if (step) return step.apply(this, arguments);
                };

                $({
                    deg: 180
                }).animate({
                    deg: angle
                }, args);
            });
        };



        $('.block-scroll-next, .scroll-indicator').animateRotate(180, 0);


        $('.block-scroll-next, .scroll-indicator').animateRotateMinus(0, 0);


    }


    var h = $(window).height();
    var w = $(window).width();
    var st = $(this).scrollTop();

    /*if(st<=((h-151)/2)-12){
    	$('.logo').css('margin-top',(h-151)/2); 
    //alert(st);
    }*/


    if (w < 940) {
        w = 940;
    }


    $('.spacer2').css('margin-left', -(w - 940) / 2);
    $('.spacer2').css('width', w);


    $('.block-border').css('left', -15);
    $('.block-border').css('width', w + 30);

    $('.picture-top').css('height', h - 64);

    /*if(st<=((h-111)/2)-32){
    	$('.logo-background').css('margin-top',(h-111)/2); 
    //alert(st);
    }*/

    //$('.scroll-indicator').css('margin-top', (h - 120));
    $('.cb-slideshow').css('height', h);
    $('.cb-slideshow').css('width', w);

    $('.ie-slideshow').css('height', h);
    $('.ie-slideshow').css('width', w);





    $(window).on('resize', function () {
        if (FF) {
            //alert("ff");
            $('.cb-slideshow').css('position', 'absolute');
            $('.cb-slideshow li:nth-child(1) span').css('width', w);
            $('.cb-slideshow li:nth-child(1) span').css('height', h);

        }


        h = $(window).height();
        w = $(window).width();
        st = $(this).scrollTop();

        /*if(st<=((h-151)/2)-12){
    	$('.logo').css('margin-top',(h-151)/2); 
    //alert(st);
    }*/

        if (w < 940) {
            w = 940;
        }


        $('.spacer2').css('margin-left', -(w - 940) / 2);
        $('.spacer2').css('width', w);

        $('.block-border').css('left', -15);
        $('.block-border').css('width', w + 30);

        $('.picture-top').css('height', h - 64);

        /*if(st<=((h-111)/2)-32){
    	$('.logo-background').css('margin-top',(h-111)/2); 
    //alert(st);
    }*/

        //$('.scroll-indicator').css('margin-top', (h - 120));
        $('.cb-slideshow').css('height', h);
        $('.cb-slideshow').css('width', w);

        $('.ie-slideshow').css('height', h);
        $('.ie-slideshow').css('width', w);



    });


}); //]]> 
//************************************************************************************************




//Fade In - line2, logo, logo-background**********************************************************
$(function () {
    var divOUT = $('.block3');

    //var st = $(this).scrollTop();
    //alert(st);
    var scrollTop = $(window).scrollTop();
    //alert(scrollTop);
    var elementOffset = divOUT.offset().top;
    //alert(elementOffset);
    var distance = (elementOffset - scrollTop);
    //alert(distance);

    //Slideshow***********************    
    if (distance < 145) {
        $("#slideshow").fadeOut(0);
    }


    if (distance >= 145) {
        $("#slideshow").fadeIn(0);
    }
    //Slideshow***********************


    $(window).on('scroll', function () {
        //var st = $(this).scrollTop();
        //alert(st);
        scrollTop = $(window).scrollTop();
        //alert(scrollTop);
        elementOffset = divOUT.offset().top;
        //alert(elementOffset);
        distance = (elementOffset - scrollTop);
        //alert(distance);

        //Slideshow***********************    
        if ($("#slideshow").is(':visible')) {
            if (distance < 145) {
                $("#slideshow").fadeOut(0);
            }
        }
        if ($("#slideshow").is(':hidden')) {
            if (distance >= 145) {
                $("#slideshow").fadeIn(0);
            }
        }
        //Slideshow***********************


    });

}); //]]>
//******************************************************************************



//Fade/Out In - shaddow 4**********************************************************
$(function () {
    var title = $('.block-border-top4');
    var divOUT1 = $('.block-border-section4');
    var divOUT2 = $('.block-border-section4');
    var button = $('.block-scroll-next-link4');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************



//Fade/Out In - shaddow 6**********************************************************
$(function () {
    var title = $('.block-border-top6');
    var divOUT1 = $('.block-border-section6');
    var divOUT2 = $('.block-border-section6');
    var button = $('.block-scroll-next-link6');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************

//Fade/Out In - shaddow 7**********************************************************
$(function () {
    var title = $('.block-border-top7');
    var divOUT1 = $('.block-border-section7');
    var divOUT2 = $('.block-border-section7');
    var button = $('.block-scroll-next-link7');
    var done = 0;
    var clicked = 0;

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2 + 342);

    $.fn.animateRotate = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 0
            }).animate({
                deg: angle
            }, args);
        });
    };

    $.fn.animateRotateMinus = function (angle, duration, easing, complete) {
        var args = $.speed(duration, easing, complete);
        var step = args.step;
        return this.each(function (i, e) {
            args.step = function (now) {
                $.style(e, 'transform', 'rotate(' + now + 'deg)');
                if (step) return step.apply(this, arguments);
            };

            $({
                deg: 180
            }).animate({
                deg: angle
            }, args);
        });
    };

    if (distance1 < 105 && distance2 > 105) {
        title.css('visibility', 'visible');
    } else {
        title.css('visibility', 'hidden');
    }

    if (distance1 < 405 && done == 0) {
        button.animateRotate(180, 500);
        done = 1;
    }

    if (distance1 >= 405 && done == 1 && clicked == 0) {
        button.animateRotateMinus(0, 500);
        done = 0;
    }

    button.click(function () {

        if (done == 0) {
            clicked = 1;
            button.animateRotate(180, 500, function () {
                clicked = 0;
            });
            done = 1;
        }

    });

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2 + 342);

        if (distance1 < 105 && distance2 > 105) {
            title.css('visibility', 'visible');
        } else {
            title.css('visibility', 'hidden');
        }

        if (distance1 < 405 && done == 0) {
            button.animateRotate(180, 500);
            done = 1;
        }

        if (distance1 >= 405 && done == 1 && clicked == 0) {
            button.animateRotateMinus(0, 500);
            done = 0;
        }

    });
}); //]]>
//******************************************************************************



//Fade/Out In - title3**********************************************************
$(function () {
    var title = $('.nav-word3');
    var divOUT1 = $('.block3');
    var divOUT2 = $('.block5');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
    } else {
        title.css('border-top', 'solid 0px #878787');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #878787');
        } else {
            title.css('border-top', 'solid 0px #878787');
        }

    });
}); //]]>
//****************************************************************************


//Fade/Out In - title5**********************************************************
$(function () {
    var title = $('.nav-word5');
    var divOUT1 = $('.block5');
    var divOUT2 = $('.block6');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
    } else {
        title.css('border-top', 'solid 0px #878787');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #878787');
        } else {
            title.css('border-top', 'solid 0px #878787');
        }

    });
}); //]]>
//****************************************************************************

//Fade/Out In - title6**********************************************************
$(function () {
    var title = $('.nav-word6');
    var divOUT1 = $('.block6');
    var divOUT2 = $('#linkfinal');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);

    var scrollTop2 = $(window).scrollTop();
    var elementOffset2 = divOUT2.offset().top;
    var distance2 = (elementOffset2 - scrollTop2);

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
    } else {
        title.css('border-top', 'solid 0px #878787');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #878787');
        } else {
            title.css('border-top', 'solid 0px #878787');
        }

    });
}); //]]>
//****************************************************************************

//Fade/Out In - title7**********************************************************
$(function () {
    var title = $('.nav-word7');
    var divOUT1 = $('#linkfinal');

    var scrollTop1 = $(window).scrollTop();
    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop1);



    if (distance1 < 550) {
        title.css('border-top', 'solid 10px #878787');
    } else {
        title.css('border-top', 'solid 0px #878787');
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);


        if (distance1 < 550) {
            title.css('border-top', 'solid 10px #878787');
        } else {
            title.css('border-top', 'solid 0px #878787');
        }

    });
}); //]]>
//****************************************************************************

//Resize .blockfinal**********************************************************
$(function () {
    var divs = $('.bigger, #contact');
    var h = $(window).height();

    if (h < 762) {
        h = 762;
    }

    divs.css('height', h);
    $('#contact').css('margin-top', -h);
    $('.block7-shell').css('margin-top', h-650-112);
    
    $(window).on('resize', function () {
        var h = $(window).height();
        if (h < 762) {
            h = 762;
        }
        divs.css('height', h);
        $('#contact').css('margin-top', -h);
        $('.block7-shell').css('margin-top', h-650-112);
    });

}); //]]> 
//****************************************************************************

//Fix Nav Borders**********************************************************
$(function () {
    var allsections = $('.section-break, .section-break2');
    var w = $(window).width();
    $('.border-shell').css('width', w - ((w - 940) / 2));
    $('.border-shell').css('left', -(w - 940) / 2);
    $('.border-shell').css('padding-left', (w - 940) / 2);

    if (w < 940) {
        $('.border-shell').css('width', 940);
        $('.border-shell').css('left', 0);
        $('.border-shell').css('padding-left', 0);
    }

    var w = $(window).width();
    allsections.css('width', w - ((w - 940) / 2));
    allsections.css('margin-left', -(w - 940) / 2);
    allsections.css('padding-left', (w - 940) / 2);

    if (w < 940) {
        allsections.css('width', 940);
        allsections.css('margin-left', 0);
        allsections.css('padding-left', 0);
    }


    $(window).on('resize', function () {
        var w = $(window).width();
        $('.border-shell').css('width', w - ((w - 940) / 2));
        $('.border-shell').css('left', -(w - 940) / 2);
        $('.border-shell').css('padding-left', (w - 940) / 2);

        if (w < 940) {
            $('.border-shell').css('width', 940);
            $('.border-shell').css('left', 0);
            $('.border-shell').css('padding-left', 0);
        }

        var w = $(window).width();
        allsections.css('width', w - ((w - 940) / 2));
        allsections.css('margin-left', -(w - 940) / 2);
        allsections.css('padding-left', (w - 940) / 2);

        if (w < 940) {
            allsections.css('width', 940);
            allsections.css('margin-left', 0);
            allsections.css('padding-left', 0);
        }

    });


});
//****************************************************************************


//Fade In/Out galleries**********************************************************
$(function () {
    var fout = 645;
    var fin = 312;
    var mar = 200;
    var speed = 900;
    var divOUT1 = $('#galleries');
    var divIN1 = $('.block-box-galleries');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);



    if (distance1 <= fin) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: speed,
                queue: false
            });
            divIN1.animate({
                marginLeft: 0
            }, {
                duration: speed,
                queue: false
            });
        });
    }

    if (distance1 > 400 || distance1 < -400) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: speed,
                queue: false
            });
            divIN1.animate({
                marginLeft: mar
            }, {
                duration: speed,
                queue: false
            });
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);


        if (distance1 <= fin) {
            $(function () {
                divIN1.animate({
                    opacity: 1
                }, {
                    duration: speed,
                    queue: false
                });
                divIN1.animate({
                    marginLeft: 0
                }, {
                    duration: speed,
                    queue: false
                });
            });
        }

        if (distance1 > 400 || distance1 < -400) {
            $(function () {
                divIN1.animate({
                    opacity: 0
                }, {
                    duration: speed,
                    queue: false
                });
                divIN1.animate({
                    marginLeft: mar
                }, {
                    duration: speed,
                    queue: false
                });
            });
        }





    });

}); //]]>
//******************************************************************************

//Fade In/Out galleries2**********************************************************
$(function () {
    var fout = 645;
    var fin = 312;
    var mar = -200;
    var speed = 900;
    var divOUT1 = $('#galleries');
    var divIN1 = $('.block-box-galleries2');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);



    if (distance1 <= fin) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: speed,
                queue: false
            });
            divIN1.animate({
                marginLeft: 0
            }, {
                duration: speed,
                queue: false
            });
        });
    }

    if (distance1 > 400 || distance1 < -400) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: speed,
                queue: false
            });
            divIN1.animate({
                marginLeft: mar
            }, {
                duration: speed,
                queue: false
            });
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);


        if (distance1 <= fin) {
            $(function () {
                divIN1.animate({
                    opacity: 1
                }, {
                    duration: speed,
                    queue: false
                });
                divIN1.animate({
                    marginLeft: 0
                }, {
                    duration: speed,
                    queue: false
                });
            });
        }

        if (distance1 > 400 || distance1 < -400) {
            $(function () {
                divIN1.animate({
                    opacity: 0
                }, {
                    duration: speed,
                    queue: false
                });
                divIN1.animate({
                    marginLeft: mar
                }, {
                    duration: speed,
                    queue: false
                });
            });
        }





    });

}); //]]>
//******************************************************************************

//Fade In/Out morgan**********************************************************
$(function () {
    var fout = -250;
    var fin = 412;
    var divOUT1 = $('#morgan');
    var divIN1 = $('.block-box-morgan');

    var scrollTop = $(window).scrollTop();

    var elementOffset1 = divOUT1.offset().top;
    var distance1 = (elementOffset1 - scrollTop);
    var v = 0;

    if (distance1 <= fin && distance1 >= fout) {
        $(function () {
            divIN1.animate({
                opacity: 1
            }, {
                duration: 600,
                queue: false
            });
            divIN1.animate({
                marginLeft: 0
            }, {
                duration: 600,
                queue: false
            });
            v = 1;
        });
    }

    if (distance1 > fin) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });
        });
    }
    if (distance1 < fout) {
        $(function () {
            divIN1.animate({
                opacity: 0
            }, {
                duration: 600,
                queue: false
            });
            divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

        /*
            if(v == 0){
                if(distance1 <= fin){
                    v = 1;
                    $(function () {
                        divIN1.animate({ opacity: 1 }, { duration: 600, queue: false });
                        divIN1.animate({ marginLeft: 0 }, { duration: 600, queue: false });
                    });
                }
            }
            
            if(v == 1){
                if(distance1 > (fin+82) || distance1 < -(fin+82) ){
                    v = 0;
                    $(function () {
                        divIN1.animate({ opacity: 0 }, { duration: 600, queue: false });
                        divIN1.animate({ marginLeft: -500 }, { duration: 600, queue: false });
                    }); 
                }
            }

    */

        if (v == 0) {
            if (distance1 <= fin && distance1 >= fout) {
                v = 1;
                $(function () {
                    divIN1.animate({
                        opacity: 1
                    }, {
                        duration: 600,
                        queue: false
                    });
                    divIN1.animate({
                        marginLeft: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                });
            }
        }

        if (v == 1) {
            if (distance1 > fin) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });
                });
            }
            if (distance1 < fout) {
                v = 0;
                $(function () {
                    divIN1.animate({
                        opacity: 0
                    }, {
                        duration: 600,
                        queue: false
                    });
                    divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });
                });
            }
        }




    });

}); //]]>
//******************************************************************************