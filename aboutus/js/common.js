$(window).on("load", function () {
  setTimeout(function () {
    scrollTo(0, 0)
  }, 100)
});

//리사이즈
var deviceSize = 1024;
function scrollOX(status) {
  $("html").css({
    overflowY: status,
  });
  return $("html").width();
}

var scX = scrollOX("hidden");
var scO = scrollOX("scroll");
var scD = scX - scO;
if (scD > 0) {
  deviceSize = deviceSize - scD;
}

var ww = $(window).width();
if (ww > deviceSize) {
  $("html").addClass("pc");
} else {
  $("html").addClass("mobile");
}

$(window).on("resize", function () {
  let ww = $(window).width();
  if (ww > deviceSize && !$("html").hasClass("pc")) {
    $("html").addClass("pc").removeClass("mobile");
    location.reload();
  } else if (ww <= deviceSize && !$("html").hasClass("mobile")) {
    $("html").addClass("mobile").removeClass("pc");
    location.reload();
  }
});

// 헤더 scroll
$(window).scroll(function () {
  var num = $(this).scrollTop();
  if (num > 10) {
    $("#header").addClass("on");
  } else {
    $("#header").removeClass("on");
  }
});

// 햄버거버튼에 호버했을때 헤더 열림
$(".hamburger-button").mouseenter(function () {
  $(this).siblings('#header').addClass('on')
});

$(".hamburger-button").mouseleave(function () {
  $(this).siblings('#header').removeClass('on')
});

// 햄버거버튼 열기 닫기
$(".hamburger-button").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
  $(".m_menu").toggleClass("visible");
});

// // ABOUTUS
// let sub1img = $('.sub1').offset().top + $(window).height() / 2;

// $(window).on('scroll', function () {
//   // let sct = $(this).scrollTop()
//   let sct = $(this).scrollTop() + $(this).height();
//   if (sct >= sub1img) {
//     $('.sub1').addClass('on')
//   } else {
//     $('.sub1').removeClass('on')
//   }
// })

$(window).scroll( function(){
  $('.sub1 li').each( function(i){
      
      var ele = $(this).offset().top + $(this).outerHeight()/2;
      var wdw = $(window).scrollTop() + $(window).height();
      
      if( wdw > ele ){
        $(this).addClass('animate');
      }else {
        $(this).removeClass('animate');
      }
  }); 
});
