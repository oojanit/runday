// ttam.js

$(function(){

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').slideUp(200);
    });

});