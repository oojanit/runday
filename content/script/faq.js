// faq.js

$(function(){

    // dropdown submenu
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').slideUp(200);
    });

    // accordion
    // initial: hide all answers
    $('.accordion li p.ans').hide();
    // on click, show answer
    $('a.que').on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('on');
        $(this).siblings('p.ans').slideToggle();
    });

});