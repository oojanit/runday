// index.js

$(function(){

// gnb submenu dropdown
    $('.submenu').on('mouseenter',function(){
        $('.gnb .submenu ul').slideDown(100,function(){
            $(this).on('mouseenter',function(){
                $(this).css('display','block');
            });
        });
    });
    /* $('.submenu').on('mouseleave',function(){
        $('.gnb .submenu ul').slideUp(100);
    }); */

// gnb hover effect
    $('.menu .gnb').children('li').on('mouseover',function(){
        $(this).css('font-weight','700');
        $(this).children('ul, li').css('font-weight','400');
    });
    $('.menu .gnb').children('li').on('mouseout',function(){
        $(this).css('font-weight','400');
    });

    $('.submenu ul').children('li').on('mouseover',function(){
        $(this).css('font-weight','700');
    });
    $('.submenu ul').children('li').on('mouseout',function(){
        $(this).css('font-weight','400');
    });

// main img slide + catch text change

// promo slide in

// score pop up

// marquee

// media image slide

});