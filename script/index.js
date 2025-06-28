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

    // scroll events
    $(window).on('scroll', function () {
        var scTop = $(this).scrollTop();
        var winHeight = Math.ceil($(this).height() * 0.8); // window height 20%

        // show contents along as scroll goes down
        if (scTop >= ($('.promo h3').offset().top - winHeight)) {
            $('.promo h3').animate({
                opacity: 1
            }, 600);
        };
        if (scTop >= ($('.left').offset().top - winHeight)) {
            $('.left .cardimg').animate({
                opacity: 1
            }, 600)
            $('.left .desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }
        if (scTop >= ($('.right').offset().top - winHeight)) {
            $('.right .cardimg').animate({
                opacity: 1
            }, 600)
            $('.right .desc').animate({
                marginTop: '10%',
                opacity: 1
            }, 300);
        }

        // score pop up & number count function call
        if (scTop >= ($('.pop').offset().top - winHeight)) {
            $('.pop').eq(0).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            }, 300, function () {
                var id0 = setInterval(count0Fn, 5);
                $('.pop').eq(1).animate({
                    opacity: 1,
                    backgroundPositionY: '200px'
                }, 300, function () {
                    var id1 = setInterval(count1Fn, 54.05);
                    $('.pop').eq(2).animate({
                        opacity: 1,
                        backgroundPositionY: '200px'
                    }, 300, function () {
                        var id2 = setInterval(count2Fn, 133.33);
                        $('.pop').eq(3).animate({
                            opacity: 1,
                            backgroundPositionY: '200px'
                        }, 300, function () {
                            var id3 = setInterval(count3Fn, 22.22);
                        });
                    });
                });
            });
        }
    }); // scroll events end

    // marquee
    setInterval(flow, 10);
    var moveNum = 0;
    function flow() {
        moveNum++;
        // li 하나의 너비보다 이동한 left값(moveNum)이 커졌을 때
        var boxWidth = $('.mrq1 .txt').first().outerWidth();
        if (moveNum > boxWidth) {
            // append 1st li as it disappears
            // reset margin-left & moveNum
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

    // media image slide function call
    $('.btn.prev').click(function (e) {
        e.preventDefault();
        goSlide(0);
    });
    $('.btn.next').click(function (e) {
        e.preventDefault();
        goSlide(1);
    });

});

// FUNCTIONS //

// score pop number count function
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

// media slide function
function goSlide(direction) {
    var tg = document.querySelector('.slide-wrap');
    var tg2 = tg.querySelectorAll('.slideimg');
    console.log('.slideimg 갯수: ' + tg2.length);
    if (direction === 0) {
        // prev
        $('.media_slide .desc').animate({
            opacity: 0
        },200);
        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));
    } else if (direction === 1) {
        // next
        $('.media_slide .desc').animate({
            opacity: 0
        },200);
        tg.appendChild(tg2.item(0));
    }
    // read new .slideimg
    tg2 = tg.querySelectorAll('.slideimg');
    // reset the class
    for (var i = 0; i < tg2.length; i++) {
        tg2[i].setAttribute('class', 'slideimg s' + (i + 1));
    }
    $('.media_slide .desc').animate({
            opacity: 1
        },200);
}