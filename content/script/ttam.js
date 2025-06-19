// ttam.js

$(function(){

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').stop().slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').stop().slideUp(200);
    });

    // main slide
    $('.slider .btn a.next').on('click',function(){
        $('.slider .slidewrap').animate({
            marginLeft: '-='+($('.slide').width())
        },600);
    });

});