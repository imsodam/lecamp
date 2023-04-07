$(function(){
	
	
	var ht = $(window).height();	
	$("section").height(ht);
	
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
		$("section").on("mousewheel",function(event,delta){    
			
          if (delta > 0) {  
             var prev = $(this).prev().offset().top;
			 $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutQuint");
			  
          }else if (delta < 0) {  
			 var next = $(this).next().offset().top;
			 $("html,body").stop().animate({"scrollTop":next},1400,"easeOutQuint");                                         
          }
          
     });

// sec1 부분 
      
const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2")
};

const texts = [
  "추억을 담고 싶은 곳이 안 떠오르시나요?",
  "저희가 추천해드릴께요 ! "
];

const morphTime = 1;
const cooldownTime = 0.5;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "1";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 3000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
      if (shouldIncrementIndex) {
          textIndex++;
      }

      doMorph();
  } else {
      doCooldown();
  }
}

animate();


     $('.slide-group').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true,
        fade:true,
        prevArrow:'<button class="slick-arrow slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow:'<button class="slick-arrow slick-next"><i class="fa-solid fa-angles-right"></i></button>',
    
    })
    $(".slide1 .slideright").on("click", function() {
        $(".wrap1").addClass("on");
      });
      $(".wrap1 i").on("click", function() {
        $(".wrap1").removeClass("on");
      });

      $(".slide2 .slideright").on("click", function() {
        $(".wrap2").addClass("on");
      });
      $(".wrap2 i").on("click", function() {
        $(".wrap2").removeClass("on");
      });

      $(".slide3 .slideright").on("click", function() {
        $(".wrap3").addClass("on");
      });
      $(".wrap3 i").on("click", function() {
        $(".wrap3").removeClass("on");
      });

      $(".slide4 .slideright").on("click", function() {
        $(".wrap4").addClass("on");
      });
      $(".wrap4 i").on("click", function() {
        $(".wrap4").removeClass("on");
      });

      $(".slide5 .slideright").on("click", function() {
        $(".wrap5").addClass("on");
      });
      $(".wrap5 i").on("click", function() {
        $(".wrap5").removeClass("on");
      });
       // 헤더 scroll
  $(window).scroll(function () {
    var num = $(this).scrollTop();
    if (num > 10) {
      $("#header").addClass("on");
      $("#header").css('display', 'none');
    } else {
      $("#header").removeClass("on");
      $("#header").css('display', 'block');
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

  
  // 인트로 애니메이션 관련 

setTimeout(function(){

  let count = 0;
  let timer = setInterval(add, 46)
  function add() {
      count++
      if (count>=100) { 
          clearInterval(timer) 
          // $(".introAni").on("click", ".wrap", function () {
  $('.introAni').fadeOut(
   600, function(){
      $(this).remove()
  })
// });
      }
  }
  
}, 10)
});