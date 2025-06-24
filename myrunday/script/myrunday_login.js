// myrunday_login.js

$(document).ready(function(){
    
    // submenu slidedown
    $('.gnb li:last-child').on('mouseenter',function(){
        $('.sub').stop().slideDown(300);
    });
    $('.gnb').on('mouseleave',function(){
        if($('.gnb li:last-child').hasClass('on')){

        } else {
            $('.sub').stop().slideUp(300);
        }        
    });

    // selected menu li.on design
    $('.gnb > li > a').on('click',function(){
        $(this).parent('li').addClass('on').siblings().removeClass('on');
    });
    
    // #loginform / #joinform toggle
    $('#joinform').hide();
    $('form > p > a').on('click',function(e){
        e.preventDefault();
        $('#loginform').slideToggle(400);
        $('#joinform').slideToggle(400);
    });

    // button hover effect

});