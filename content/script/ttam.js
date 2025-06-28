// ttam.js

$(function () {

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').stop().slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').stop().slideUp(200);
    });

    // main slide, pager, desc txt change (no loop)
    var slideIdx = 1; // 1 2 3 4
    var slideLth = $('.slide').length; // 4
    console.log(slideLth);

    // initial setting
    $('.desc .txt li').hide().first().show();

    $('.next').on('click', function (e) {
        e.preventDefault();
        slideIdx++;
        if (slideIdx <= slideLth) {
            $('.slidewrap').animate({
                marginLeft: -($('.slide').width())*(slideIdx-1)
            }, 600);
            $('.slide').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
            $('.desc .txt li').hide().eq(slideIdx-1).fadeIn(600);
            $('.pager li').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
        } else {
            slideIdx = slideLth;
        }
    });

    $('.prev').on('click', function (e) {
        e.preventDefault();
        slideIdx--;
        if (slideIdx >= 1) {
            $('.slidewrap').animate({
                marginLeft: -($('.slide').width())*(slideIdx-1)
            },600);
            $('.slide').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
            $('.desc .txt li').hide().eq(slideIdx-1).fadeIn(600);
            $('.pager li').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
        } else {
            slideIdx = 1;
        }
    });

    
    $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();
        var winHeight = Math.ceil($(this).height() * 0.8); // window height 20%
         
        // company h4 span highlight
        if (scTop >= ($('.company h4').offset().top - winHeight)) {
            $('section .company h4 span').css({
                backgroundSize: '100% 40px'
            });
        }
         
        // apps logo fadeIn
        if (scTop >= ($('.apps .logos').offset().top - winHeight)) {
            $('.apps .logos img').animate({
                opacity: 1
            },1000,'linear');
        }
    });

});