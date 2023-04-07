

$(window).on('load', function(){

    //새로고침시 맨 위로
    setTimeout (function () {
      scrollTo(0,0);
      },100);
  
  });


//스크롤 이벤트 

//article2, article4 부분 

let article2Near = $('.article2').offset().top - $(window).height()/2
let article4Near = $('.article4').offset().top - $(window).height()/2

$(window).on('scroll', function(){
   let sct =  $(this).scrollTop()
   if(sct >= article2Near){
    $('.article2').addClass('on')
   }else{
    $('.article2').removeClass('on')
   }
});

$(window).on('scroll', function(){
   let sct =  $(this).scrollTop()
   if(sct >= article4Near){
    $('.article4').addClass('on')
   }else{
    $('.article4').removeClass('on')
   }
});



// article4 이미지 클릭하면 모달창에서 크게 보기

$('.article4 .movie .img img').on('click', function(){
    let src = $(this).attr('data-src')
    let modal = '<div class="modal">'
    modal += `<div class="imgbox">`
    modal += `<iframe src="${src}" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    modal += `<button type="button"><i class="fa-solid fa-x"></i></button>`
    modal += `</div>`
    modal += `</div>`

    $('body').append(modal)

    $('.modal').css({
        zIndex:'9999999',
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        paddingTop:'56.25%',
        background:'rgba(0,0,0,0.7)',
    })

   
     $('.modal .imgbox').css({
        position:'absolute',
        width:'50vw',
        height:'30vw',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -60%)'
     })

     if (window.innerWidth < 1024){
        $('.modal .imgbox').css({
            position:'absolute',
            width:'90%',
            height:'30%',
            top:'50%',
            left:'50%',
            transform:'translate(-50%, -60%)'
         })
     } 

    //else if( window.innerWidth < 768){
    //     $('.modal .imgbox').css({
    //         position:'absolute',
    //         width:'300px',
    //         height:'200px',
    //         top:'50%',
    //         left:'50%',
    //         transform:'translate(-50%, -60%)'
    //      })
    //  }

    $('.imgbox button').css({
        
        position:'absolute',
        top:'0',
        right:'0',
        background:'#000',
        color:'#fff',
        padding:'4px 4px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer'
    })

})


// 모달창의 닫기 버튼 클릭하면 모달창 닫게 하기
$('body').on('click', '.modal button, .modal', function(){
    $('.modal').remove()
})



var words = ['캠핑 떠날 준비는 다 하셨나요 ?', '출발 전 아래의 안전 수칙을 확인해 주세요 ! ', 'CHECK SAFETY RULES BEFORE GOING CAMPING!'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 10,
    speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('#container p').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});