//Detect Webkit**********************************************************
$(document).ready(function () {
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

    if (isiPhone > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPad > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }
    if (isiPod > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
    }


    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    if (isAndroid > -1) {
        $('.block-border-inside').css('position', 'fixed');
        $('.block-border-inside').css('background-attachment', 'local');
        $('#base-text').css('position', 'absolute');
        $('#base-text').css('bottom', '30px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('font-size', '22px');
        $('#base-text').css('font-size', '22px');
        $('.light-text').css('color', '#c1c1c1');
        $('#base-text').css('color', '#c1c1c1');
        
    } else if(/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())){
        
            if (window.matchMedia) {
                var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                if (mq && mq.matches || (window.devicePixelRatio > 1)) {
                    //return true;
                    //alert('Retina!');
                    $('.block-border-inside').css('position', 'fixed');
                    $('.block-border-inside').css('background-attachment', 'local');
                } else {
                    //return false;
                    //alert('Old!');
                }
            }
        //$('.block-border-inside').css('position', 'fixed');
        //$('.block-border-inside').css('background-attachment', 'local');
        //$('.block-border-inside').css('-webkit-transform', 'translateZ(0)');

            
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

    var pathname = $(location).attr('href');
    loadbackground.fadeIn(0);
    loadall.fadeIn(0);
    if ((/www./.test(pathname))) {
        var href = pathname.replace("http://www.", 'http://');
        window.location.href = href;
    }

    if ((/#/.test(pathname))) {
        loadall.fadeOut(0);
        loadbackground.fadeOut(0);
    } else {
        load.animate({
            width: 310
        }, 5000, function () {



            loadall.delay(200).fadeOut(1500);
            loadbackground.delay(700).fadeOut(1300);


        });
    }




});
//****************************************************************************

//Fade Dark - logo-background**********************************************************
$(function () {
    var divOUT = $('#block3');
    var scrollTop = $(window).scrollTop();
    var elementOffset = divOUT.offset().top;
    var distance = (elementOffset - scrollTop);


    if (distance < 550) {
        //$('#logo-background').stop().animate({ backgroundColor: "rgba(32, 32, 32, 0.92);" },700);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});
        //alert('dark');
        $('#logo-background').fadeOut(0);
        $('#logo-background-dark').fadeIn(0);
        
        $('#logo').fadeOut(0);
        $('#logo-dark').fadeIn(0);

    } else {
        //$('#logo-background').stop().animate({ backgroundColor: "rgba(255, 255, 255, 0.92);" },700);
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});
        //alert('light');
        $('#logo-background-dark').fadeOut(0);
        $('#logo-background').fadeIn(0);
        
        $('#logo-dark').fadeOut(0);
        $('#logo').fadeIn(0);

    }
    
    
    var pathname = $(location).attr('href');

    if ((/galleries/.test(pathname))) {
        //alert('contact');
  
            $('#logo-background').fadeOut(0);
            $('#logo-background-dark').fadeIn(0);
        
            $('#logo').fadeOut(0);
            $('#logo-dark').fadeIn(0);


    } 
    
    if ((/morgan/.test(pathname))) {
        //alert('contact');
  
            $('#logo-background').fadeOut(0);
            $('#logo-background-dark').fadeIn(0);
        
            $('#logo').fadeOut(0);
            $('#logo-dark').fadeIn(0);


    }
    
    if ((/pricing/.test(pathname))) {
        //alert('contact');
  
            $('#logo-background').fadeOut(0);
            $('#logo-background-dark').fadeIn(0);
        
            $('#logo').fadeOut(0);
            $('#logo-dark').fadeIn(0);


    }
    
    if ((/contact/.test(pathname))) {
        //alert('contact');
  
            $('#logo-background').fadeOut(0);
            $('#logo-background-dark').fadeIn(0);
        
            $('#logo').fadeOut(0);
            $('#logo-dark').fadeIn(0);


    }
    
    
    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();
        elementOffset = divOUT.offset().top;
        distance = (elementOffset - scrollTop);

        if (distance < 550) {
            //$('#main').css('opacity', '.5');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(32, 32, 32, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(255, 255, 255, 0.92)');
            //$('#logo-background').css("background", "rgba(32, 32, 32, 0.92)");
            $('#logo-background').fadeOut(600);
            $('#logo-background-dark').fadeIn(600);
            
            $('#logo').fadeOut(600);
            $('#logo-dark').fadeIn(600);
            //alert('dark');

        } else {
            //$('#main').css('opacity', '1');
            //$('#logo-background').stop().animate({ backgroundColor: "rgba(255, 255, 255, 0.92);" },700);
            //$('#logo-background').css('transition', 'rgba(32, 32, 32, 0.92)');
            //$('#logo-background').css("background", "rgba(255, 255, 255, 0.92)");
            $('#logo-background-dark').fadeOut(600);
            $('#logo-background').fadeIn(600);
            
            $('#logo-dark').fadeOut(600);
            $('#logo').fadeIn(600);
            //alert('light');

        }

    });
        
    

}); //]]>
//******************************************************************************




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
    //var st = $(this).scrollTop();
    


    //$('.spacer2').css('margin-left', -(w - 940) / 2);
    //$('#base-shell').css('margin-left', -(w - 940) / 2);
    //$('#base-shell').css('width', w);
    //$('.spacer2').css('width', w);



    //$('.block-border').css('left', -15);
    //$('.block-border').css('width', w + 30);

    $('.picture-top').css('height', h - 64);

    $('.load-shell-center').css('margin-top', (h - 400) / 2);




    $('.ie-slideshow').css('height', h);
    $('.ie-slideshow').css('width', w);   



 $(window).on('resize', function () {


        h = $(window).height();
        w = $(window).width();
        //st = $(this).scrollTop();
        




        //$('.spacer2').css('margin-left', -(w - 940) / 2);
        //$('#base-shell').css('margin-left', -(w - 940) / 2);
        //$('#base-shell').css('width', w);
        //$('.spacer2').css('width', w);

        //$('.block-border').css('left', -15);
        //$('.block-border').css('width', w + 30);

        $('.picture-top').css('height', h - 64);
        $('.load-shell-center').css('margin-top', (h - 400) / 2);





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

    var shown = 0

    var shown2 = 0

    if (distance1 > 550) {
        if (shown2 == 0) {
            var stateObj = {
                foo: "Welcome"
            };
            history.replaceState(stateObj, "Hung the Moon Photography - Huntsville, AL", "");
            shown2 = 1;
        }
    } else {
        shown2 = 0;
    }
    

    


    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});
        if (shown == 0) {
            var stateObj = {
                foo: "galleries"
            };
            history.replaceState(stateObj, "Hung the Moon Photography - Galleries", "/galleries");
            shown = 1;
        }
    } else {
        title.css('border-top', 'solid 0px #878787');
        shown = 0;
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);

        scrollTop2 = $(window).scrollTop();
        elementOffset2 = divOUT2.offset().top;
        distance2 = (elementOffset2 - scrollTop2);

        if (distance1 > 550) {
            if (shown2 == 0) {
                var stateObj = {
                    foo: "Welcome"
                };
                history.replaceState(stateObj, "Hung the Moon Photography - Huntsville, AL", "/#");
                shown2 = 1;
            }
        } else {
            shown2 = 0;
        }
        


        if (distance1 < 550 && distance2 > 550) {
            title.css('border-top', 'solid 10px #878787');
            if (shown == 0) {
                var stateObj = {
                    foo: "galleries"
                };
                history.replaceState(stateObj, "Hung the Moon Photography - Galleries", "/galleries");
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #878787');
            shown = 0;
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

    var shown = 0

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
        if (shown == 0) {
            var stateObj = {
                foo: "morgan"
            };
            history.replaceState(stateObj, "Hung the Moon Photography - Meet Morgan", "/morgan");
            shown = 1;
        }
    } else {
        title.css('border-top', 'solid 0px #878787');
        shown = 0;
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
            if (shown == 0) {
                var stateObj = {
                    foo: "morgan"
                };
                history.replaceState(stateObj, "Hung the Moon Photography - Meet Morgan", "/morgan");
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #878787');
            shown = 0;
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

    var shown = 0

    if (distance1 < 550 && distance2 > 550) {
        title.css('border-top', 'solid 10px #878787');
        if (shown == 0) {
            var stateObj = {
                foo: "pricing"
            };
            history.replaceState(stateObj, "Hung the Moon Photography - Pricing", "/pricing");
            shown = 1;
        }
    } else {
        title.css('border-top', 'solid 0px #878787');
        shown = 0;
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
            if (shown == 0) {
                var stateObj = {
                    foo: "pricing"
                };
                history.replaceState(stateObj, "Hung the Moon Photography - Pricing", "/pricing");
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #878787');
            shown = 0;
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



    var shown = 0

    if (distance1 < 550) {
        title.css('border-top', 'solid 10px #878787');
        if (shown == 0) {
            var stateObj = {
                foo: "contact"
            };
            history.replaceState(stateObj, "Hung the Moon Photography - Contact", "/contact");
            shown = 1;
        }
    } else {
        title.css('border-top', 'solid 0px #878787');
        shown = 0;
    }

    $(window).on('scroll', function () {
        scrollTop1 = $(window).scrollTop();
        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop1);



        if (distance1 < 550) {
            title.css('border-top', 'solid 10px #878787');
            if (shown == 0) {
                var stateObj = {
                    foo: "contact"
                };
                history.replaceState(stateObj, "Hung the Moon Photography - Contact", "/contact");
                shown = 1;
            }
        } else {
            title.css('border-top', 'solid 0px #878787');
            shown = 0;
        }

    });
}); //]]>
//****************************************************************************

//Resize .blockfinal**********************************************************
$(function () {
    var divs = $('.bigger, #contact');
    var h = $(window).height();
    var isios = 0;
    var issmallios = 0;

    if (h < 762) {
        h = 762;
    }

    divs.css('height', h);
    $('#contact').css('margin-top', -h);
    $('.block7-shell').css('margin-top', h - 650 - 112);

    $(window).on('resize', function () {
        var h = $(window).height();
        //alert($('.block7').css('height'));

        if (h < 762) {
            h = 762;
        }

        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");


        if (isiPhone > -1) {

            isios = 1;
            issmallios = 1;

        }

        if (isiPod > -1) {

            isios = 1;
            issmallios = 1;

        }


        if (isiPad > -1) {

            isios = 1;

        }


        if (isios == 1) {

            divs.css('height', h + 60);
            $('#contact').css('margin-top', -(h + 60));
            $('.block7-shell').css('margin-top', h + 60 - 650 - 112);

            if (issmallios == 1) {

                divs.css('height', h + 200);
                $('#contact').css('margin-top', -(h + 200));
                $('.block7-shell').css('margin-top', h + 200 - 650 - 112);

            }

        } else {

            divs.css('height', h);
            $('#contact').css('margin-top', -h);
            $('.block7-shell').css('margin-top', h - 650 - 112);

        }


    });


}); //]]> 
//****************************************************************************

//Fix Nav Borders**********************************************************
/*$(function () {
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


});*/
//****************************************************************************

//Fade In/Out morgan**********************************************************
$(function () {
    var fout = -550;
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
            /*divIN1.animate({
                marginLeft: 0
            }, {
                duration: 600,
                queue: false
            });*/
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
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
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
            /*divIN1.animate({
                marginLeft: -500
            }, {
                duration: 600,
                queue: false
            });*/
        });
    }




    $(window).on('scroll', function () {
        scrollTop = $(window).scrollTop();

        elementOffset1 = divOUT1.offset().top;
        distance1 = (elementOffset1 - scrollTop);

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
                    /*divIN1.animate({
                        marginLeft: 0
                    }, {
                        duration: 600,
                        queue: false
                    });*/
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
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
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
                    /*divIN1.animate({
                        marginLeft: -500
                    }, {
                        duration: 600,
                        queue: false
                    });*/
                });
            }
        }




    });

}); //]]>
//******************************************************************************

//Galleries*********************************************************************
$(function () {
    
    var galleryShell = $('#gallery-pop');
    var galleryBackground = $('#gallery-background');
    var galleryFrame = $('#gallery-frame');
    var gallery = $('.hover-link');
    
    var engagementGallery = $('.gallery-thumb1');
    var weddingGallery = $('.gallery-thumb2');
    var maternityGallery = $('.gallery-thumb3');
    var familyGallery = $('.gallery-thumb4');
    var newbornGallery = $('.gallery-thumb5');
    var kidsGallery = $('.gallery-thumb6');
    var seniorGallery = $('.gallery-thumb7');
    var charityGallery = $('.gallery-thumb8');
    
    var h = $(window).height();
    
    galleryShell.css('margin-top', h);
    
    galleryShell.css('height', h);
    
    
    $(window).on('resize', function () {
        var h = $(window).height();
        galleryShell.css('height', h);
        galleryShell.css('margin-top', h);
    });
    
    
    gallery.click(function () {
        
        galleryBackground.fadeIn(500);
        
        //galleryShell.fadeIn(0);
        
        /*galleryShell.animate({
            marginTop: 0
        }, {
            duration: 1000,
            queue: false
        });*/
        

    });
    
    engagementGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/engagement-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    weddingGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/wedding-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    maternityGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/maternity-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    familyGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/family-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    newbornGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/newborn-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    kidsGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/kids-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    seniorGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/senior-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    charityGallery.click(function () {
        var href = "http://hungthemoonphotography.com/blog/published-gallery/#gallery-showcase";
        //galleryFrame.attr("src", href);
        $('#placeholder').animate({
                top: 0
            }, 750, function () {  
                window.location.href = href;     
        });
    });
    
    
    
});
//******************************************************************************

//detect bottom of page
$(function () {
    var baseshow = 0;
    var isios = 0;
    var issmallios = 0;

    $(window).scroll(function () {


        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

        if (isiPhone > -1) {

            isios = 1;
            issmallios = 1;

        }

        if (isiPod > -1) {

            isios = 1;
            issmallios = 1;

        }


        if (isiPad > -1) {

            isios = 1;

        }



        if (issmallios == 1) {


            $('#base-text').fadeIn(0);
            baseshow = 1;


        } else {

            if (isios == 1) {

                if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height() + 10 + 60) {
                    $('#base-text').fadeIn(300);
                    baseshow = 1;

                } else {
                    if (baseshow == 1) {
                        $('#base-text').fadeOut(100);
                        baseshow = 0;
                    }
                }

            } else {

                if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height() + 10) {
                    $('#base-text').fadeIn(300);
                    //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});

                    baseshow = 1;
                } else {
                    if (baseshow == 1) {
                        $('#base-text').fadeOut(100);
                        //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});
                        baseshow = 0;
                    }
                }

            }

        }

    });

});
//******************************************************************************

//Resize ALL**********************************************************0987
$(function () {
    var pathname = $(location).attr('href');
    var h = $(window).height();
    var w = $(window).width();
    var st = $(this).scrollTop();
    var mobilecheck = 0;
    var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
    var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
    var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");
    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
    var landscapetrigger = 0;

    $('.logos').css('left', '0');
    $('.envira-gallery-item').css('border-radius', '2px');
    $('.envira-gallery-item').css('overflow', 'hidden');
    $('.envira-gallery-item').css('box-shadow', '0px 0px 3px 0px rgba(0,0,0,0.5)');


    $('.close-button').click(function () {

        window.location.href = "http://hungthemoonphotography.com/galleries";

    });

    if (isiPhone > -1) {
        mobilecheck = 1;
    }
    if (isiPad > -1) {
        mobilecheck = 1;
    }
    if (isiPod > -1) {
        mobilecheck = 1;
    }
    if (isAndroid > -1) {
        mobilecheck = 1;
    }

    if (mobilecheck == 1) {
        $('.expand').css('visibility', 'hidden');
        $('.close-button').fadeOut(0);
        $('.footerbar').fadeIn(0);
        $('.bottom-margin').fadeIn(0);
        $('.bottom-margin').css('height', '80px');


        var pathname = $(location).attr('href');

        function doOnOrientationChange() {
            switch (window.orientation) {
            case -90:
            case 90:
                //alert('landscape');

                /*w = $(window).width();
                    
                if (w < 940) {
                    $('.logo').css('visibility', 'hidden');
                    $('.logo-background').fadeOut(0);
                    $('.navigation-top').css('visibility', 'hidden');
                    //$('.bottom').css('zoom', '.5');
                    $('.footerbar').css('top', '0');
                    $('body, html').css('margin-top', '-2px');
                }*/

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (w < 940) {
                        landscapetrigger = 1;
                        document.getElementById("viewport").setAttribute("content", "width=1068");

                        h = $(window).height();
                        w = $(window).width();
                        $('.logos').css('margin-left', ((w - 940) / 2) - 30);
                        $('#line2').fadeIn(0);
                        $('.navigation-top').css('visibility', 'visible');
                        $('#hamburger').fadeOut(0);
                        $('#mini-menu, #mini-menu-background').fadeOut(0);
                        $('#mini-menu').css('right', '-300px');
                        $('#hamburger').css('right', '25px');
                        $('.inner20').css('width', '46%');
                        $('#morgan').css('background-position', 'center');
                        open = 0;
                        
                        $('.inner21, .inner22').css('width', '46%');
                        $('.inner21').css('margin-left', '1%');
                        $('.inner21').css('margin-right', '3%');
                        $('.inner22').css('margin-left', '3%');
                        $('.inner22').css('margin-right', '1%');
                        $('.inner21, .inner22').css('max-width', '428px');
                        
                        $('#base-shell').fadeIn(0);
                        
                        $('#picturefinal').fadeIn(0);
                        $('#picturefinal-mini').fadeOut(0);
                                                
                        $('#load-background').css('zoom', '100%');
                        $('#load-background').css('padding-top', '0');

                        $('.archive .main,.blog .main').css('width', '90%');
                        $('.excerpt').css('margin', '30px');
                        $('.excerpt').css('margin-top', '40px');
                        $('.excerpt').css('margin-bottom', '40px');
                        $('.excerpt:first-of-type').css('margin-top', '60px');
                        
                        $('.picture-top').css('height', h - 64);
                        $('.load-shell-center').css('margin-top', (h - 400) / 2);





                        $('.ie-slideshow').css('height', h);
                        $('.ie-slideshow').css('width', w);

                        //$('#secondary').css('position', 'fixed');
                        //$('#secondary').css('right', 80);
                        //$('#secondary').css('margin-left', 0);
                        //$('#secondary').css('float', 'left');
                        //$('#secondary').css('width', '300px');
                        //$('#secondary').css('margin', '');

                        if ((/#/.test(pathname))) {

                        } else {
                            window.location = pathname + '#';
                        }

                    } else {
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        if (w < 940) {
                            $('.logos').css('margin-left', '-2px');
                            $('#line2').fadeOut(0);
                            $('.navigation-top').css('visibility', 'hidden');
                            $('#hamburger').fadeIn(0);
                            $('.inner20').css('width', (w*.88)-30);
                            
                            $('.inner21, .inner22').css('width', '57%');
                            $('.inner21, .inner22').css('margin-left', '6%');
                            $('.inner21, .inner22').css('margin-right', '6%');
                            $('.inner21, .inner22').css('max-width', '1000px');
                            
                            $('#base-shell').fadeOut(0);
                            
                            $('#picturefinal').fadeOut(0);
                            $('#picturefinal-mini').fadeIn(0);
                                                        
                            $('#load-background').css('zoom', '60%');
                            $('#load-background').css('padding-top', '20%');

                            $('.archive .main,.blog .main').css('width', '90%');
                            $('.excerpt').css('margin', '30px');
                            $('.excerpt').css('margin-top', '40px');
                            $('.excerpt').css('margin-bottom', '40px');
                            $('.excerpt:first-of-type').css('margin-top', '60px');

                            //$('#secondary').css('margin-left', 0);
                            //$('#secondary').css('right', 15);
                            if (w < 791) {
                                $('.archive .main,.blog .main').css('width', '100%');
                                $('.excerpt').css('margin', '20px');
                                $('.excerpt:first-of-type').css('margin-top', '40px');
                                //$('#secondary').css('position', 'relative');
                                //$('#secondary').css('right', '');
                                //$('#secondary').css('margin-left', '');
                                //$('#secondary').css('float', 'none');
                                //$('#secondary').css('width', 'auto');
                                //$('#secondary').css('margin', '0 0 40px');
                            } else {
                                //$('#secondary').css('position', 'fixed');
                                //$('#secondary').css('right', 15);
                                //$('#secondary').css('margin-left', 0);
                                //$('#secondary').css('float', 'left');
                                //$('#secondary').css('width', '300px');
                                //$('#secondary').css('margin', '');

                            }
                        } else {
                            $('.logos').css('margin-left', ((w - 940) / 2) - 30);
                            $('#line2').fadeIn(0);
                            $('.navigation-top').css('visibility', 'visible');
                            $('#hamburger').fadeOut(0);
                            $('#mini-menu, #mini-menu-background').fadeOut(0);
                            $('#mini-menu').css('right', '-300px');
                            $('#hamburger').css('right', '25px');
                            $('.inner20').css('width', '46%');
                            $('#morgan').css('background-position', 'center');
                            open = 0;
                            
                            $('.inner21, .inner22').css('width', '46%');
                            $('.inner21').css('margin-left', '1%');
                            $('.inner21').css('margin-right', '3%');
                            $('.inner22').css('margin-left', '3%');
                            $('.inner22').css('margin-right', '1%');
                            $('.inner21, .inner22').css('max-width', '428px');
                            
                            $('#base-shell').fadeIn(0);
                            
                            $('#picturefinal').fadeIn(0);
                            $('#picturefinal-mini').fadeOut(0);
                                                        
                            $('#load-background').css('zoom', '100%');
                            $('#load-background').css('padding-top', '0');

                            $('.archive .main,.blog .main').css('width', '90%');
                            $('.excerpt').css('margin', '30px');
                            $('.excerpt').css('margin-top', '40px');
                            $('.excerpt').css('margin-bottom', '40px');
                            $('.excerpt:first-of-type').css('margin-top', '60px');

                            //$('#secondary').css('margin-left', 610);
                            //$('#secondary').css('right', '');

                        }

                        $('.expand').css('margin-left', w - 52);
                    }

                }






                break;
            default:
                //alert('portrait');

                if (isiPad > -1) {
                    //document.getElementById("viewport").setAttribute("content", "width=1068");
                } else {

                    if (landscapetrigger == 1) {
                        landscapetrigger = 0;
                        document.getElementById("viewport").setAttribute("content", "maximum-scale=1.0, initial-scale=1.0");

                        w = $(window).width();

                        if (w < 940) {
                            $('.logos').css('margin-left', '-2px');
                            $('#line2').fadeOut(0);
                            $('.navigation-top').css('visibility', 'hidden');
                            $('#hamburger').fadeIn(0);
                            $('.inner20').css('width', (w*.88)-30);
                            $('#morgan').css('background-position', '80% 50%');
                            
                            $('.inner21, .inner22').css('width', '57%');
                            $('.inner21, .inner22').css('margin-left', '6%');
                            $('.inner21, .inner22').css('margin-right', '6%');
                            $('.inner21, .inner22').css('max-width', '1000px');
                            
                            $('#base-shell').fadeOut(0);
                            
                            $('#picturefinal').fadeOut(0);
                            $('#picturefinal-mini').fadeIn(0);
                                                        
                            $('#load-background').css('zoom', '60%');
                            $('#load-background').css('padding-top', '20%');

                            $('.archive .main,.blog .main').css('width', '90%');
                            $('.excerpt').css('margin', '30px');
                            $('.excerpt').css('margin-top', '40px');
                            $('.excerpt').css('margin-bottom', '40px');
                            $('.excerpt:first-of-type').css('margin-top', '60px');

                            //$('#secondary').css('margin-left', 0);
                            //$('#secondary').css('right', 15);
                            if (w < 791) {
                                $('.archive .main,.blog .main').css('width', '100%');
                                $('.excerpt').css('margin', '20px');
                                $('.excerpt:first-of-type').css('margin-top', '40px');
                                //$('#secondary').css('position', 'relative');
                                //$('#secondary').css('right', '');
                                //$('#secondary').css('margin-left', '');
                                //$('#secondary').css('float', 'none');
                                //$('#secondary').css('width', 'auto');
                                //$('#secondary').css('margin', '0 0 40px');
                            } else {
                                //$('#secondary').css('position', 'fixed');
                                //$('#secondary').css('right', 15);
                                //$('#secondary').css('margin-left', 0);
                                //$('#secondary').css('float', 'left');
                                //$('#secondary').css('width', '300px');
                                //$('#secondary').css('margin', '');

                            }
                        } else {
                            $('.logos').css('margin-left', ((w - 940) / 2) - 30);
                            $('#line2').fadeIn(0);
                            $('.navigation-top').css('visibility', 'visible');
                            $('#hamburger').fadeOut(0);
                            $('#mini-menu, #mini-menu-background').fadeOut(0);
                            $('#mini-menu').css('right', '-300px');
                            $('#hamburger').css('right', '25px');
                            $('.inner20').css('width', '46%');
                            $('#morgan').css('background-position', 'center');
                            open = 0;
                            
                            $('.inner21, .inner22').css('width', '46%');
                            $('.inner21').css('margin-left', '1%');
                            $('.inner21').css('margin-right', '3%');
                            $('.inner22').css('margin-left', '3%');
                            $('.inner22').css('margin-right', '1%');
                            $('.inner21, .inner22').css('max-width', '428px');
                            
                            $('#base-shell').fadeIn(0);
                            
                            $('#picturefinal').fadeIn(0);
                            $('#picturefinal-mini').fadeOut(0);
                                                        
                            $('#load-background').css('zoom', '100%');
                            $('#load-background').css('padding-top', '0');

                            $('.archive .main,.blog .main').css('width', '90%');
                            $('.excerpt').css('margin', '30px');
                            $('.excerpt').css('margin-top', '40px');
                            $('.excerpt').css('margin-bottom', '40px');
                            $('.excerpt:first-of-type').css('margin-top', '60px');

                            //$('#secondary').css('margin-left', 610);
                            //$('#secondary').css('right', '');

                        }

                        $('.expand').css('margin-left', w - 52);
                    }

                }
                break;
            }
        }

        window.addEventListener('orientationchange', doOnOrientationChange);

        // Initial execution if needed
        doOnOrientationChange();


    }
    //alert(pathname);

    if (w < 940) {
        $('.logos').css('margin-left', '-2px');
        $('#line2').fadeOut(0);
        $('.navigation-top').css('visibility', 'hidden');
        $('#hamburger').fadeIn(0);
        $('.inner20').css('width', (w*.88)-30);
        $('#morgan').css('background-position', '80% 50%');
        //$('#secondary').css('margin-left', 0);
        //$('#secondary').css('right', 15);
        
        $('.inner21, .inner22').css('width', '57%');
        $('.inner21, .inner22').css('margin-left', '6%');
        $('.inner21, .inner22').css('margin-right', '6%');
        $('.inner21, .inner22').css('max-width', '1000px');
        
        $('#base-shell').fadeOut(0);
        
        $('#picturefinal').fadeOut(0);
        $('#picturefinal-mini').fadeIn(0);
                
        $('#load-background').css('zoom', '60%');
        $('#load-background').css('padding-top', '20%');

        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');

        if (w < 791) {
            $('.archive .main,.blog .main').css('width', '100%');
            $('.excerpt').css('margin', '20px');
            $('.excerpt:first-of-type').css('margin-top', '40px');
            //$('#secondary').css('position', 'relative');
            //$('#secondary').css('right', '');
            //$('#secondary').css('margin-left', '');
            //$('#secondary').css('float', 'none');
            //$('#secondary').css('width', 'auto');
            //$('#secondary').css('margin', '0 0 40px');
        } else {
            //$('#secondary').css('position', 'fixed');
            //$('#secondary').css('right', 15);
            //$('#secondary').css('margin-left', 0);
            //$('#secondary').css('float', 'left');
            //$('#secondary').css('width', '300px');
            //$('#secondary').css('margin', '');

        }
    } else {
        $('.logos').css('margin-left', ((w - 940) / 2) - 30);
        $('#line2').fadeIn(0);
        $('.navigation-top').css('visibility', 'visible');
        $('#hamburger').fadeOut(0);
        $('#mini-menu, #mini-menu-background').fadeOut(0);
        $('#mini-menu').css('right', '-300px');
        $('#hamburger').css('right', '25px');
        $('.inner20').css('width', '46%');
        $('#morgan').css('background-position', 'center');
        open = 0;
        
        $('.inner21, .inner22').css('width', '46%');
        $('.inner21').css('margin-left', '1%');
        $('.inner21').css('margin-right', '3%');
        $('.inner22').css('margin-left', '3%');
        $('.inner22').css('margin-right', '1%');
        $('.inner21, .inner22').css('max-width', '428px');
        
        $('#base-shell').fadeIn(0);
        
        $('#picturefinal').fadeIn(0);
        $('#picturefinal-mini').fadeOut(0);
                
        $('#load-background').css('zoom', '100%');
        $('#load-background').css('padding-top', '0');

        $('.archive .main,.blog .main').css('width', '90%');
        $('.excerpt').css('margin', '30px');
        $('.excerpt').css('margin-top', '40px');
        $('.excerpt').css('margin-bottom', '40px');
        $('.excerpt:first-of-type').css('margin-top', '60px');

        //$('#secondary').css('margin-left', 610);
        //$('#secondary').css('right', '');

    }
    $('.expand').css('margin-left', w - 52);



    $(window).on('resize', function () {

        w = $(window).width();
        if (w < 940) {
            $('.logos').css('margin-left', '-2px');
            $('#line2').fadeOut(0);
            $('.navigation-top').css('visibility', 'hidden');
            $('#hamburger').fadeIn(0);
            $('.inner20').css('width', (w*.88)-30);
            $('#morgan').css('background-position', '80% 50%');
            
            $('.inner21, .inner22').css('width', '57%');
            $('.inner21, .inner22').css('margin-left', '6%');
            $('.inner21, .inner22').css('margin-right', '6%');
            $('.inner21, .inner22').css('max-width', '1000px');
            
            $('#base-shell').fadeOut(0);
            
            $('#picturefinal').fadeOut(0);
            $('#picturefinal-mini').fadeIn(0);
                        
            $('#load-background').css('zoom', '60%');
            $('#load-background').css('padding-top', '20%');

            $('.archive .main,.blog .main').css('width', '90%');
            $('.excerpt').css('margin', '30px');
            $('.excerpt').css('margin-top', '40px');
            $('.excerpt').css('margin-bottom', '40px');
            $('.excerpt:first-of-type').css('margin-top', '60px');

            //$('#secondary').css('margin-left', 0);
            //$('#secondary').css('right', 15);
            if (w < 791) {
                $('.archive .main,.blog .main').css('width', '100%');
                $('.excerpt').css('margin', '20px');
                $('.excerpt:first-of-type').css('margin-top', '40px');

                //$('#secondary').css('position', 'relative');
                //$('#secondary').css('right', '');
                //$('#secondary').css('margin-left', '');
                //$('#secondary').css('float', 'none');
                //$('#secondary').css('width', 'auto');
                //$('#secondary').css('margin', '0 0 40px');
            } else {
                //$('#secondary').css('position', 'fixed');
                //$('#secondary').css('right', 15);
                //$('#secondary').css('margin-left', 0);
                //$('#secondary').css('float', 'left');
                //$('#secondary').css('width', '300px');
                //$('#secondary').css('margin', '');

            }
        } else {
            $('.logos').css('margin-left', ((w - 940) / 2) - 30);
            $('#line2').fadeIn(0);
            $('.navigation-top').css('visibility', 'visible');
            $('#hamburger').fadeOut(0);
            $('#mini-menu, #mini-menu-background').fadeOut(0);
            $('#mini-menu').css('right', '-300px');
            $('#hamburger').css('right', '25px');
            $('.inner20').css('width', '46%');
            $('#morgan').css('background-position', 'center');
            open = 0;
            
            $('.inner21, .inner22').css('width', '46%');
            $('.inner21').css('margin-left', '1%');
            $('.inner21').css('margin-right', '3%');
            $('.inner22').css('margin-left', '3%');
            $('.inner22').css('margin-right', '1%');
            $('.inner21, .inner22').css('max-width', '428px');
            
            $('#base-shell').fadeIn(0);
            
            $('#picturefinal').fadeIn(0);
            $('#picturefinal-mini').fadeOut(0);
                        
            $('#load-background').css('zoom', '100%');
            $('#load-background').css('padding-top', '0');


            $('.archive .main,.blog .main').css('width', '90%');
            $('.excerpt').css('margin', '30px');
            $('.excerpt').css('margin-top', '40px');
            $('.excerpt').css('margin-bottom', '40px');
            $('.excerpt:first-of-type').css('margin-top', '60px');

            //$('#secondary').css('margin-left', 610);
            //$('#secondary').css('right', '');

        }

        $('.expand').css('margin-left', w - 52);


    });


}); //]]> 
//************************************************************************************************

var open = 0;

//Hamburger Click**********************************************************0987
$(function () {

    $('#mini-menu-background, #mini-menu-item').click(function () {


        if (open == 0) {




        } else {
            
             $('#mini-menu-background').fadeOut(500);

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 25
            }, {
                duration: 500,
                queue: false
            });

           

            open = 0;




        }

    });

    $('#hamburger').click(function () {


        if (open == 0) {


            $('#mini-menu').fadeIn(500);

            $('#mini-menu').animate({
                right: 0
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: -4
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeIn(500);

            open = 1;


        } else {

            $('#mini-menu').fadeOut(500);


            $('#mini-menu').animate({
                right: -300
            }, {
                duration: 500,
                queue: false
            });

            $('#hamburger').animate({
                right: 25
            }, {
                duration: 500,
                queue: false
            });

            $('#mini-menu-background').fadeOut(500);

            open = 0;




        }

    });





}); //]]> 
//*************************************************************************************************

