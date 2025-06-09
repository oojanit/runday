// index.js

$(function(){

// gnb submenu dropdown
    $('.submenu').on('mouseenter',function(){
        $('.gnb .submenu ul').slideDown(200);
    });
    $('.submenu').on('mouseleave',function(){
        $('.gnb .submenu ul').slideUp(200);
    });

// gnb hover effect
    /* $('.menu .gnb').children('li').on('mouseover',function(){
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
    }); */

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
        if (scTop >= 2500) {
            $('.pop').eq(2).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }
        if (scTop >= 2700) {
            $('.pop').eq(3).animate({
                opacity: 1,
                backgroundPositionY: '200px'
            },500);
        }

    });    

// marquee

// media image slide
    $('.slidebtn .btn_prev').click(function(e){
        e.preventDefault();
        
        $('.slidebox .desc').slideUp(600);
        $('.slidebox .desc').slideDown(600);

        var slideDis = ($('.slider.next').children('.slideimg').first().position().left)-($('.slider.prev').children('.slideimg').last().position().left);

        $('.slider.next').animate({
            marginLeft: $('.slider.next .slideimg').width()
        },600,function(){
            $('.slider.next').children('.slideimg').last().prependTo($('.slider.hide'));
            $('.slider.hide').children('.slideimg').last().prependTo($('.slider.prev'));
            $(this).css('margin-left','0');
        });

        $('.slider.prev').animate({
            marginLeft: slideDis+'px'
        },600,function(){
            $(this).css('margin-left','0');
            $('.slider.prev').children('.slideimg').last().prependTo($('.slider.next'));
        });
        

    });

    $('.slidebtn .btn_next').click(function(e){
        e.preventDefault();
        $('.slider.hide').children('.slideimg').first().appendTo($('.slider.next'));
        $('.slider.prev').children('.slideimg').first().appendTo($('.slider.hide'));
        $('.slider.next').children('.slideimg').first().appendTo($('.slider.prev'));
    });

});