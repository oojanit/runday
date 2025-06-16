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
        scTop = $(this).scrollTop();
        console.log(scTop);
        if (scTop >= 700) {
            $('.card').eq(0).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(0).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 1200) {
            $('.card').eq(1).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(1).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 1700) {
            $('.card').eq(2).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(2).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 3800) { // 스크롤 값 내용추가 후 수정
            $('.card').eq(3).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(3).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 4400) {
            $('.card').eq(4).find('.cardimg').animate({
                opacity: 1
            }, 600)
            $('.card').eq(4).find('.desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 5000) {
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
    $('.appslide .slider .slide').on('click',function(){
        
    });





    });