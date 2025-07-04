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

    // calendar plugin
    $('.calendar-container').calendar({
        date: new Date(), // today
        weekDayLength: 1, // length of names of days of the week, default 1
        prevButton: "<",
        nextButton: ">",
        showTodayButton: false,
        highlightSelectedWeekday: true,
        highlightSelectedWeek: false,
        onClickDate: function (date) { // date click function
            if ($(this).hasClass('.highlight')){} else {}
        } 
    });


});