// myrunday_login.js

$(document).ready(function () {

    // submenu slidedown
    $('.gnb').on('mouseenter', function () {
        $('.sub').stop().slideDown(300);
    });
    $('.gnb').on('mouseleave', function () {
        if ($('.gnb li:last-child').hasClass('on')) {

        } else {
            $('.sub').stop().slideUp(300);
        }
    });

    // selected menu li.on design
    $('.gnb > li > a').on('click', function () {
        $(this).parent('li').addClass('on').siblings().removeClass('on');
    });

    // #loginform / #joinform toggle
    $('#joinform').hide();
    $('form > p > a').on('click', function (e) {
        e.preventDefault();
        $('#loginform').fadeToggle(400);
        $('#joinform').fadeToggle(400);
    });

    // button hover effect - script or css?
    $('form input[type="submit"]').on('mouseenter',function(){
        $(this).stop().css({
            backgroundColor: 'rgba(90, 74, 248, 0.4)'
        });
    });
    $('form input[type="submit"]').on('mouseleave',function(){
        $(this).stop().css({
            backgroundColor: 'rgb(90,74,248)'
        },300);
    });

});