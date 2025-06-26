//slide.js
//media 영역 슬라이드 

$(function(){

    $('.btn_prev').click(function(e){
        e.preventDefault();

        goSlide(0);
    });

    $('.btn_next').click(function(e){
        e.preventDefault();

        goSlide(1);
    });
});

function goSlide(direction){

    var tg = document.querySelector('.slide-wrap');

    var tg2 = tg.querySelectorAll('.slideimg');
    console.log('.slideimg 갯수: ' +tg2.length);

    if (direction === 0){
        //이전버튼

        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));

    } else if (direction === 1){
        //다음버튼

        tg.appendChild(tg2.item(0));
    }

    //변경된 .slideimg 읽어오기!
    tg2 = tg.querySelectorAll('.slideimg');

    for (var i=0; i < tg2.length; i++){
        tg2[i].setAttribute('class','slideimg s'+(i+1));
    }


}