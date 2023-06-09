// article1
$(window).load(function () {
  var $slick_carousel = $(".slide-group");

  $slick_carousel.on('init', function (event, slick) {

    $(".slide .img").eq(0).addClass("slick-animation");
  });
  $slick_carousel.on('afterChange', function (event, slick, currentSlide) {
    $(".slide .img").removeClass("slick-animation");
    $(this).find(".slide .img").eq(currentSlide).addClass("slick-animation")
  });
  // 메인 비주얼 롤링
  $slick_carousel.slick({
    dots: true,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

//pause&play
var sw = 0;
$('.btn_pause').click(function () {
  if (sw == 0) {
    $('.btn_pause').addClass('on');
    $('.slide-group').slick('slickPause');
    sw = 1;
  } else {
    $('.btn_pause').removeClass('on');
    $('.slide-group').slick('slickPlay');
    sw = 0;
  }
});

// article2
$(window).scroll(function () {
  $('article').each(function (i) {

    var ele = $(this).offset().top + $(this).outerHeight() / 1.5;
    var wdw = $(window).scrollTop() + $(window).height();

    if (wdw > ele) {
      $(this).addClass('animate');
    } else {
      $(this).removeClass('animate');
    }
  });
});


$(".search-btn").click(function (e) {
  e.preventDefault();
  $(".checklist").toggleClass("on");
});

let flag1 = []
$('.group1 span').each(function (i) {
  flag1[i] = true
})
let flag2 = []
$('.group2 span').each(function (i) {
  flag2[i] = true
})
let flag3 = []
$('.group3 span').each(function (i) {
  flag3[i] = true
})
let flag = ""

$(".checklist span").on("click", function () {
  let idx = $(this).index()
  let group = $(this).parent().parent().attr('id')

  switch (group) {
    case 'group1': flag = flag1; break;
    case 'group2': flag = flag2; break;
    case 'group3': flag = flag3; break;
  }
  checklist(idx, group, flag)
});
function checklist(idx, group, arr) {
  if (arr[idx]) {
    let ch = $(`.${group} span`).eq(idx).attr('data-check')
    $('.chlbottom').append(`<p class="chk" data-type="${ch}" data-group="${group}" data-idx="${idx}">${ch}<span><i class="fa-solid fa-circle-xmark"></i></span></p>`)
    arr[idx] = false

  }
}
$(".chlbottom").on("click", ".chk span", function () {
  let datag = $(this).parent('.chk').attr("data-group")
  let datai = $(this).parent('.chk').attr("data-idx")
  switch (datag) {
    case "group1": flag1[datai] = true; break;
    case "group2": flag2[datai] = true; break;
    case "group3": flag3[datai] = true; break;
  }
  $(this).parent().remove('p')
});

$("#btn1").on("click", function () {
  $(".cont2 .result").removeClass("on");
  $(".chlbottom p").remove();
});
$("#btn2").on("click", function () {
  let type = $('.chlbottom p').attr("data-type")
  $(".cont2 .result").addClass("on");
  if (type = '산') {
    $('.bottomWrap:first-child .resultContents').css("background", "url(../img/cont2_img1.png)")
  } else if (type = '바다') {

  }
});
$(".cont2 .search-btn").on("click", function () {
  $(".cont2 .search-btn").toggleClass("on");
});

$("#btn2").click(function () {

  let searc = document.getElementById("bottom").innerText

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v2/local/search/keyword.json?",
    headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" },
    data: {
      query: `${searc} 캠핑장`,
      size: 4,
    }
  })
    .done(function (msg) {
      $('.result .resultbox').remove()
      $(".result").append(`<div class="resultbox"> </div>`);
      $(".resultbox").css("animation", "slide-in-topp 0.8s normal");
      console.log(msg);
      if (msg.documents.length <= 0) {
        $('.result .resultbox').append(`<div class="none"><span>검색결과가 없습니다</span><img src="./img/cont2_none.png"></div>`)
      } else {
        for (var i = 0; i < msg.documents.length; i++) {
          $('.result .resultbox').append(`<div class="bottomWrap"><div class="resultContents"></div><div class="contentsBottom"><h2 id="${msg.documents[i].address_name}">${msg.documents[i].place_name}</h2>
          <p id="${msg.documents[i].address_name}" class="adrs" data-num="${msg.documents[i].phone}" data-url="${msg.documents[i].place_url}" data-value="${msg.documents[i].place_name}">${msg.documents[i].address_name}</p><a href="${msg.documents[i].place_url}">상세페이지로 바로가기</a></div></div>`);
        }
      }
    });
});
(function ($) {

  $("#datepicker").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'yy-mm-dd',
    yearSuffix: "년"
    , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
    , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
    , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
    , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    , showMonthAfterYear: true
  });

  $('#datepicker').datepicker('setDate', 'today');

})(jQuery);

(function ($) {

  $("#datepicker2").datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    dateFormat: 'yy-mm-dd',
    yearSuffix: "년"
    , monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 텍스트
    , monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'] //달력의 월 부분 Tooltip
    , dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
    , dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
    , showMonthAfterYear: true
  });

  $('#datepicker2').datepicker('setDate', 'today + 1');

})(jQuery);

new Vue({
  el: '.people',
  data: {
    count: 0
  },
  methods: {
    countUp: function (value) {
      this.count += value;
    },
    countDown: function (value) {
      this.count -= value;
    },
  }
});


// article3
const slide = new Swiper('.swiper-container', {
  slidesPerView: 3, // 한 슬라이드에 보여줄 갯수
  spaceBetween: 3, // 슬라이드 사이 여백
  loop: true, // 슬라이드 반복 여부
  loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
  pagination: false, // pager 여부
  // autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
  //   delay : 3000,   // 시간 설정
  //   disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  // },
  navigation: {   // 버튼 사용자 지정
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})


// article4
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}

// section animation
var $section = $('.ani'),
  bodyScroll, windowHeight;

function sectionAni() {
  bodyScroll = $(document).scrollTop(),
    windowHeight = $(window).height() / 1;

  $section.each(function () {
    if (bodyScroll >= $(this).offset().top + 80 - windowHeight && bodyScroll < $(this).offset().top + $(this).height()) {
      $(this).addClass('on');
    } else {
      $(this).removeClass('on');
    }
  });
}
$(function () {
  sectionAni();
});
$(window).on('scroll', function () {
  sectionAni();
});
