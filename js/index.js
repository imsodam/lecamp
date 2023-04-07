(function ($) {
  $('.slide-group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    dots: true,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-arrow slick-next"><i class="fa-solid fa-angle-right"></i></button>',
  })

  let imgh = ($('.slide .img').height() / 2) - 35
  $('.article1 .slick-arrow').css({
    top: '0%',
    transform: `translateY(${imgh}px)`,
  })

  $(window).on('resize', function () {
    let imgh = ($('.slide .img').height() / 2) - 35
    $('.article1 .slick-arrow').css({
      top: '0%',
      transform: `translateY(${imgh}px)`,
    })
  })


})(jQuery);


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


