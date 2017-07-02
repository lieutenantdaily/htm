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
    var speed = 1000;
    var ex = 0;
    var w = $(window).width();
    var h = $(window).height();


    blogs.css({
        left: w - 460
    });

    blogs.css({
        marginLeft: 0
    });


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



    function setFocusThickboxIframe() {
        var iframe = $("#blog-frame")[0];
        iframe.contentWindow.focus();
    }


    var pathname = $(location).attr('href');

    if ((/#show-blog/.test(pathname))) {
        var blogurlraw = window.location.hash;
        var blogurl = blogurlraw.substring(10, blogurlraw.length);
        //alert(blogurl);

        $("#blog-frame").attr("src", "http://hungthemoonphotography.com" + blogurl + "#hide-header");

        var h = $(window).height();
        //alert("huh?");
        open = 1
        $('#social-bar').fadeIn(0);
        $('#blog').addClass("touchscroll");
        var newMargin = 320;
        //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
        if (ex == 1) {
            divs2.animate({
                height: h - 76
            }, 500);
            $('#main').animate({
                opacity: 0
            }, 0, function () {
                $('#main').css('display', 'none');
            });
        }
        if (ex == 0) {
            var hi = h;


            blogframe.css({
                height: hi
            });
            $('.close').css({
                marginTop: hi - 106
            });
            $('.expand').css({
                marginTop: hi - 106
            });


            divs2.animate({
                height: hi - 76
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

    $('.social3').click(function (e) {

        e.preventDefault();

        var mobilecheck = 0;
        var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
        var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
        var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

        if (isiPhone > -1) {
            mobilecheck = 1;
        }
        if (isiPad > -1) {
            mobilecheck = 1;
        }
        if (isiPod > -1) {
            mobilecheck = 1;
        }


        var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
        if (isAndroid > -1) {
            mobilecheck = 1;
        }


        if (mobilecheck == 1) {
            window.location.href = './blog/';
        } else {

            if (divs.is(':not(:animated)')) {
                var h = $(window).height();
                //alert("huh?");
                open = 1
                $('#social-bar').fadeIn(0);
                $('#blog').addClass("touchscroll");
                var newMargin = 320;
                //divs.animate({ marginLeft: newMargin }, SlideSpeed, function () { SetNavigationDisplay() });
                if (ex == 1) {
                    divs2.css({
                        height: h - 76
                    });
                    $('#main').animate({
                        opacity: 0
                    }, 500, function () {
                        $('#main').css('display', 'none');
                    });
                    
                            if (divs.is(':not(:animated)')) {
            var blogurlraw = document.getElementById("blog-frame").contentWindow.location.href;
            var trunc = 12;
            var blogurl = blogurlraw.substring(0, blogurlraw.length - trunc);
            //alert(blogurl);

            if (ex == 0) {
                w = $(window).width();
                h = $(window).height();

                blogs.css({
                    width: w
                });
                blogs.css({
                    height: h
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
                blogframe.css({
                    width: w
                });
                blogframe.css({
                    height: h
                });
                $('.close').css({
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
                    blogframe.css({
                        width: w
                    });
                    blogs.css({
                        width: w
                    });
                    window.location.href = blogurl;
                });


            }
            if (ex == 1) {
                w = $(window).width();
                h = $(window).height();

                blogs.css({
                    width: 460
                }, {
                    duration: speed,
                    queue: false
                });
                blogs.animate({
                    height: h
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
                    height: h
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
                }
                if (ex == 0) {
                    var hi = h;


                    blogframe.css({
                        height: hi
                    });
                    $('.close').css({
                        marginTop: hi - 106
                    });
                    $('.expand').css({
                        marginTop: hi - 106
                    });


                    divs2.css({
                        height: hi - 76
                    });
                    
                            if (divs.is(':not(:animated)')) {
            var blogurlraw = document.getElementById("blog-frame").contentWindow.location.href;
            var trunc = 12;
            var blogurl = blogurlraw.substring(0, blogurlraw.length - trunc);
            //alert(blogurl);

            if (ex == 0) {
                w = $(window).width();
                h = $(window).height();
                
                //blogs.css('margin-top', '-2.6%');
                //$('#email').css('height', h);
                
                blogs.css({
                    width: w
                });
                blogs.css({
                    height: h
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
                blogframe.css({
                    width: w
                });
                blogframe.css({
                    height: h
                });
                $('.close').animate({
                    marginTop: h - 106 +76 +35
                }, {
                    duration: speed,
                    queue: false
                });
                $('.expand').animate({
                    marginTop: h - 106 +76 +35
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
                    blogframe.css({
                        width: w
                    });
                    blogs.css({
                        width: w
                    });
                    window.location.href = blogurl;
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
                    height: h
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
                    height: h
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

                }
                

                $('#social-background').fadeIn(500);


                //divs3.animate({ opacity: 0.55 }, 500, function () { SetNavigationDisplay() });
                clicks.css('border-top', 'none');
                clicks2.css('opacity', '1');
                clicks3.css('visibility', 'hidden');
                iframe.fadeOut(0);

                $('#email').css('visibility', 'visible');
                $('.social3').css('border-top', 'solid 6px #878787');
                
                //$('#logo-background').fadeOut(200);
                //$('#logo-background-dark').fadeIn(200);
                
                //$('#logo').fadeOut(200);
                //$('#logo-dark').fadeIn(200);
                
                $('.social-label3').css('opacity', '0');
                //$('#fs-background-transparent2').css("visibility","visible");
                $('#social-bar').css("visibility", "visible");
                $('#social-bar').animate({opacity: 1}, 600);
                
            }
        }
    });


    $('.social1').click(function () {

        window.location.href = 'https://www.instagram.com/morgan_hungthemoon/';

    });

    $('.social2').click(function () {

        window.location.href = 'http://facebook.com/hungthemoonphotography';

    });



    $(".all-button").click(function () {

        //alert(document.getElementById("blog-frame").contentWindow.location.href);
        $("#blog-frame").attr("src", "http://hungthemoonphotography.com/blog/#hide-header");

    });

    $('.expand').click(function (e) {
        e.preventDefault();
        if (divs.is(':not(:animated)')) {
            var blogurlraw = document.getElementById("blog-frame").contentWindow.location.href;
            var trunc = 12;
            var blogurl = blogurlraw.substring(0, blogurlraw.length - trunc);
            //alert(blogurl);

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
                    height: h
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
                    window.location.href = blogurl;
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
                    height: h
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
                    height: h
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
            $('#social-bar').delay(501).fadeOut(0);
            $('#blog').removeClass("touchscroll");
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
                    height: h
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
                height: h
            });
            blogframe.css({
                height: h
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
                left: w - 460
            });

            blogs.css({
                marginLeft: 0
            });

            var hi = h;

            divs2.css({
                height: hi - 76
            });
            blogframe.css({
                height: hi
            });
            $('.close').css({
                marginTop: hi - 106
            });
            $('.expand').css({
                marginTop: hi - 106
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
                //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(32, 32, 32, 0.92);'});
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
                    //$('#logo-background').animate({backgroundColor: 'none repeat scroll 0% 0% rgba(255, 255, 255, 0.92);'});

                }
            }
        }





    });


});
//**********************************************************************