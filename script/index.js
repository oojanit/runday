// index.js

$(function () {

    // gnb submenu dropdown
    $('.submenu').on('mouseenter', function () {
        $('.gnb .submenu ul').stop().slideDown(200);
    });
    $('.submenu').on('mouseleave', function () {
        $('.gnb .submenu ul').stop().slideUp(200);
    });

    // main img slide + catch text change
    var catch1 = $('.catch').html();
    var catch2 = '<h2>오직 나만을 위한 <br>달리기 전문 트레이너!</h2><p>달리기는 외로운 운동이다?<br>여러분은 혼자가 아닙니다!<br>나만의 100% 풀 보이스 트레이너와 함께 달려보는 건 어떨까요?</p>';
    var page = 0;
    function mainSlide() {
        page++;
        $('.catch').css('display', 'none');
        if (page === 2) {
            $('.catch').html(catch1).fadeIn(700);
        } else if (page === 3) {
            page = 1;
            $('.main_box').css('margin-left', '0');
            $('.catch').html(catch2).fadeIn(700);
        } else if (page === 1) {
            $('.catch').html(catch2).fadeIn(700);
        }
        $('.main_box').animate({
            marginLeft: -page * ($('.main_img').width())
        }, 700);
    }
    setInterval(mainSlide, 3000);

    // promo slide in 900, 1400
    var scTop = 0;
    $(window).on('scroll', function () {
        scTop = $(this).scrollTop();
        /* console.log(scTop); */
        if (scTop >= 400) {
            $('.promo h3').animate({
                opacity: 1
            }, 600);
        };
        if (scTop >= 900) {
            $('.left .cardimg').animate({
                opacity: 1
            }, 600)
            $('.left .desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= 1400) {
            $('.right .cardimg').animate({
                opacity: 1
            }, 600)
            $('.right .desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }

        // score pop up 2100~
        if (scTop >= 2100) {
            $('.pop').eq(0).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            }, 500);
            var id0 = setInterval(count0Fn, 12.5);
        }
        if (scTop >= 2300) {
            $('.pop').eq(1).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            }, 500);
            var id1 = setInterval(count1Fn, 135);
        }
        if (scTop >= 2400) {
            $('.pop').eq(2).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            }, 500);
            var id2 = setInterval(count2Fn, 333);
        }
        if (scTop >= 2600) {
            $('.pop').eq(3).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            }, 500);
            var id3 = setInterval(count3Fn, 55);
        }

    });

    // score pop number count
    var count0 = count1 = count2 = count3 = 0;

    function count0Fn() {
        count0++;
        if (count0 > 400) {
            clearInterval(id0);
        } else {
            $(".pop").eq(0).find('.no').text(count0);
        }
    }
    function count1Fn() {
        count1++;
        if (count1 > 37) {
            clearInterval(id1);
        } else {
            $(".pop").eq(1).find('.no').text(count1);
        }
    }
    function count2Fn() {
        count2++;
        if (count2 > 15) {
            clearInterval(id2);
        } else {
            $(".pop").eq(2).find('.no').text(count2);
        }
    }
    function count3Fn() {
        count3++;
        if (count3 > 90) {
            clearInterval(id2);
        } else {
            $(".pop").eq(3).find('.no').text(count3);
        }
    }

    // marquee
    setInterval(flow, 10);
    var moveNum = 0; // 이동하는 left값을 담을 변수!

    // 함수 flow() 기능: 컨텐츠를 왼쪽으로 흐르게 함
    function flow() {
        moveNum++; // left 이동값을 1씩 증가

        // (무한반복을 위해) 다음을 위한 준비!
        // li 하나의 너비를 구함: 그 너비보다 이동한 left값(moveNum)이 커졌을 때 
        var boxWidth = $('.mrq1 .txt').first().outerWidth();
        if (moveNum > boxWidth) {
            // 이동한 픽셀수가 li 하나의 너비보다 커졌을 때! >> 다음을 위한 준비!
            // (왼쪽으로 흘러가서) 사라진 첫번째 li를 .flow의 맨 뒤로 이동 >> append
            // .flow의 li 순서가 변경되었으므로 left값 초기화!
            // 동시에 이동값(moveNum) 초기화        
            $('.mrq1').append($('.mrq1 .txt').first()).css({
                marginLeft: 0
            });
            moveNum = 0;
        } else { // 실제로 움직이기
            $('.mrq1').css({
                marginLeft: -moveNum
            });
        }
    }

    // media image slide
    $('.slidebtn .btn_prev').click(function (e) {
        e.preventDefault();

        /* $('.slidebox .desc').slideUp(300);
        $('.slidebox .desc').slideDown(300); */

        $('.slider.next').children('.slideimg').last().prependTo($('.slider.hide'));
        $('.slider.hide').children('.slideimg').last().prependTo($('.slider.prev'));
        $('.slider.prev').children('.slideimg').last().prependTo($('.slider.next'));
    });

    $('.slidebtn .btn_next').click(function (e) {
        e.preventDefault();

        /* $('.slidebox .desc').slideUp(300);
        $('.slidebox .desc').slideDown(300); */

        $('.slider.hide').children('.slideimg').first().appendTo($('.slider.next'));
        $('.slider.prev').children('.slideimg').first().appendTo($('.slider.hide'));
        $('.slider.next').children('.slideimg').first().appendTo($('.slider.prev'));
    });

});