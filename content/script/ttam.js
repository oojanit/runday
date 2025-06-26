// ttam.js

$(function () {

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').stop().slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').stop().slideUp(200);
    });

    // main slide, no loop, pager, desc txt change
    var slideIdx = 1; // 1 2 3 4
    var slideLth = $('.slide').length; // 4
    console.log(slideLth);

    //초기설정
    $('.desc .txt li').hide().first().show();

    $('.next').on('click', function (e) {
        e.preventDefault();
        slideIdx++;
        if (slideIdx <= slideLth) {
            $('.slidewrap').animate({
                marginLeft: -($('.slide').width())*(slideIdx-1)
            }, 600);

            $('.slide').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
            $('.desc .txt li').hide().eq(slideIdx-1).fadeIn(800);
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
            $('.desc .txt li').hide().eq(slideIdx-1).fadeIn(800);
            $('.pager li').eq(slideIdx-1).addClass('on').siblings().removeClass('on');
        } else {
            slideIdx = 1;
        }
    });

    // company h4 span highlight
    /* $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();
        var winHeight = Math.ceil($(this).height() * 0.5); // window height 50%

        if (scTop >= ($('.company').offset().top - winHeight)) {
            $('section .company h4 span').find(':before').animate({
                width: '100%'
            },600);
        }
    }); */

    // apps logo fadeIn
    $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();
        var winHeight = Math.ceil($(this).height() * 0.8); // window height 20%

        if (scTop >= ($('.apps .logos').offset().top - winHeight)) {
            $('.apps .logos img').animate({
                opacity: 1
            },1000,'linear');
        }
    });

});