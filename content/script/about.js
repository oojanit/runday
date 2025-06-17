// about.js


$(function () {

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').slideUp(200);
    });

    // scroll - card
    $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();
        var winHeight = Math.ceil($(this).height() * 0.8); // window height 20%
        if (scTop >= ($('.card').eq(0).offset().top - winHeight)) {
            $('.card').eq(0).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(0).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.card').eq(1).offset().top - winHeight)) {
            $('.card').eq(1).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(1).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.card').eq(2).offset().top - winHeight)) {
            $('.card').eq(2).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(2).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.card').eq(3).offset().top - winHeight)) {
            $('.card').eq(3).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(3).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.card').eq(4).offset().top - winHeight)) {
            $('.card').eq(4).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(4).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.card').eq(5).offset().top - winHeight)) {
            $('.card').eq(5).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(5).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
    });

    // appslide
    $('.appslide .slider').on('click',function(){
        $('.slidewrap').animate({
            marginLeft: '-420px'
        },600).find('.slide').eq(1).animate({
            width: '400px'
        },600,function(){
            $('.slide').eq(0).appendTo($('.slidewrap'));
            $('.slidewrap').css({
                marginLeft: 0
            });
        });
        
    });





    });