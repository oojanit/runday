// index.js

$(function(){

// gnb submenu dropdown
    $('.submenu').on('mouseenter',function(){
        $('.gnb .submenu ul').slideDown(200);
    });
    $('.submenu').on('mouseleave',function(){
        $('.gnb .submenu ul').slideUp(200);
    });

// main img slide + catch text change
    var catch1 = $('.catch').html();
    var catch2 = '<h2>오직 나만을 위한 <br>달리기 전문 트레이너!</h2><p>달리기는 외로운 운동이다?<br>여러분은 혼자가 아닙니다!<br>나만의 100% 풀 보이스 트레이너와 함께 달려보는 건 어떨까요?</p>';
    var page = 0;
    function mainSlide (){
        page++;
        $('.catch').css('display','none');
        if (page === 2) {
            $('.catch').html(catch1).fadeIn(700);
        } else if (page === 3) {
            page = 1;
            $('.main_box').css('margin-left','0');
            $('.catch').html(catch2).fadeIn(700);
        } else if (page === 1) {
            $('.catch').html(catch2).fadeIn(700);
        }
        $('.main_box').animate({
            marginLeft: -page * ($('.main_img').width())
        },700);
    }
    setInterval(mainSlide,3000);    

// promo slide in 900, 1400
    var scTop = 0;
    $(window).on('scroll',function(){
        scTop = $(this).scrollTop();
        /* console.log(scTop); */
        if (scTop >= 400) {
            $('.promo h3').animate({
                opacity: 1
            },600);
        };
        if (scTop >= 900) {
            $('.left .cardimg').animate({
                opacity: 1
            },600)
            $('.left .desc').animate({
                marginTop: '10%',
                opacity: 1
            },300);
        }
        if (scTop >= 1400) {
            $('.right .cardimg').animate({
                opacity: 1
            },600)
            $('.right .desc').animate({
                marginTop: '10%',
                opacity: 1
            },300);
        }

// score pop up 2100~
        if (scTop >= 2100) {
            $('.pop').eq(0).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }
        if (scTop >= 2300) {
            $('.pop').eq(1).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }
        if (scTop >= 2400) {
            $('.pop').eq(2).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }
        if (scTop >= 2600) {
            $('.pop').eq(3).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }

    });    

// marquee
    $('.mrq1').marquee({
        speed: 100,
	    gap: 20, //gap in pixels between the tickers
	    delayBeforeStart: 0, //time in milliseconds before the marquee will start animating
	    direction: 'right', //'left' or 'right'
	    duplicated: true, //true or false - should the marquee be duplicated to show an effect of continues flow
        startVisible: true
    });
    $('.mrq2').marquee({
        speed: 100,
	    gap: 20,
	    delayBeforeStart: 0,
	    direction: 'left',
	    duplicated: true,
        startVisible: true
    });
    // 스크롤 내렸을 때 새로고침 되듯이 위로 스크롤 돌아가는 현상 수정하기

// media image slide
    $('.slidebtn .btn_prev').click(function(e){
        e.preventDefault();
        
        /* $('.slidebox .desc').slideUp(300);
        $('.slidebox .desc').slideDown(300); */

        $('.slider.prev .slideimg').last().prependTo($('.slider.next'));
        /*
        $('.slider.next').children('.slideimg').last().prependTo($('.slider.hide'));
        $('.slider.hide').children('.slideimg').last().prependTo($('.slider.prev'));
        $('.slider.prev').children('.slideimg').last().prependTo($('.slider.next'));
        */

    });

    $('.slidebtn .btn_next').click(function(e){
        e.preventDefault();

        /* $('.slidebox .desc').slideUp(300);
        $('.slidebox .desc').slideDown(300); */

        $('.slider.hide').children('.slideimg').first().appendTo($('.slider.next'));
        $('.slider.prev').children('.slideimg').first().appendTo($('.slider.hide'));
        $('.slider.next').children('.slideimg').first().appendTo($('.slider.prev'));
    });

});