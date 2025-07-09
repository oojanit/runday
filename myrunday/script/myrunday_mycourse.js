// myrunday_main.js

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

    // listtitle click function
    $('.listtitle a').on('click', function (e) {
        e.preventDefault();

        // selected listtitle.on design
        $(this).parent('li').addClass('on').siblings().removeClass('on');

        //selected menu display listcontent
        if ($(this).text() == '달리기') {
            $('.listwrap .listcontent').show();
            $('.list_my').hide();
            $('.list_run').show();
        } else if ($(this).text() == '나의 운동') {
            $('.listwrap .listcontent').show();
            $('.list_run').hide();
            $('.list_my').show();
        } else {
            $('.list_run').hide();
            $('.list_my').hide();
        }

    });

    // close button
    $('.listcontent .closebtn').on('click', function (e) {
        e.preventDefault();
        $('.listcontent').hide();
    });

    // listcontent click effect


});