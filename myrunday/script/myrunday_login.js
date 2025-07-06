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
    $('#loginform > p > a').on('click', function (e) {
        e.preventDefault();
        $('#loginform').hide();
        $('#joinform').fadeIn(400);
    });
    $('#joinform > p > a').on('click', function (e) {
        e.preventDefault();
        $('#joinform').hide();
        $('#loginform').fadeIn(400);
    });

});