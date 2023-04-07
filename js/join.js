// 회원 정보 입력
$(function () {
  //각 항목 유효체크 변수
  var is_id = $("#id").val() == "" ? false : true;
  var is_password = $("#pass").val() == "" ? false : true;
  var is_username = $("#name").val() == "" ? false : true;
  var is_phone = $("#hp2").val() == "" ? false : true;
  var is_email = $("#email1").val() == "" ? false : true;

  //아이디 유효체크
  $("#id").on("input", function () {
    var id = $("#id").val();
    if (RegExp(/^[A-Za-z0-9_\-]{6,20}$/).test(id)) {
      //아이디 유효하면 중복체크
      $("#check_id").html("6자 이상의 영문 혹은 영문과 숫자를 조합");
      $("#check_id").removeClass("bad");
      $("#check_id").addClass("good");
      is_id = true;
    } else {
      $("#check_id").html("6자 이상의 영문 혹은 영문과 숫자를 조합");
      $("#check_id").removeClass("good");
      $("#check_id").addClass("bad");
      is_id = false;
    }
  });

  //비밀번호 유효 체크
  $("#pass").on("input", function () {
    var user_pwd = $("#pass").val();
    if (
      RegExp(
        /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,20}$/
      ).test(user_pwd)
    ) {
      //비밀번호 유효하면 같은지 체크
      $("#check_pwd").html("비밀번호는 8자이상 영문, 숫자, 특수문자로 구성");
      $("#check_pwd").removeClass("bad");
      $("#check_pwd").addClass("good");
      is_password = true;
    } else {
      $("#check_pwd").html("비밀번호는 8자이상 영문, 숫자, 특수문자로 구성");
      $("#check_pwd").removeClass("good");
      $("#check_pwd").addClass("bad");
      is_password = false;
    }
  });

  //비밀번호 같은지 체크
  $("#pass_confirm").on("input", function () {
    var user_pwd = $("#pass").val();
    var user_repwd = $("#pass_confirm").val();
    if (user_pwd == user_repwd) {
      //비밀번호 유효하면 같은지 체크
      $("#check_repwd").html("비밀번호가 같습니다");
      $("#check_repwd").removeClass("bad");
      $("#check_repwd").addClass("good");
      is_password = true;
    } else {
      $("#check_repwd").html("비밀번호가 다릅니다");
      $("#check_repwd").removeClass("good");
      $("#check_repwd").addClass("bad");
      is_password = false;
    }
  });

  //이름 유효성 체크
  $("#name").on("input", function () {
    $(".txt_guide").css("display", "block");
    if (RegExp(/^[가-힣]{2,6}$/).test($("#name").val())) {
      $("#check_username").html("이름 입력이 올바르게 되었습니다");
      $("#check_username").removeClass("bad");
      $("#check_username").addClass("good");
      is_username = true;
    } else {
      $("#check_username").html("이름을 정확하게 입력하세요");
      $("#check_username").removeClass("good");
      $("#check_username").addClass("bad");
      is_username = false;
    }
  });


  //회원가입 submit
  $("form").submit(function (e) {
    e.preventDefault()
    if ($("#id").val() == "") {
      alert("아이디를 확인해주세요.");
      $("#id").focus();
      return false;
    }
    if ($("#pass").val() == "" || !is_password) {
      alert("비밀번호를 확인해주세요.");
      $("#pass").focus();
      return false;
    }
    if ($("#pass_confirm").val() == "" || !is_password) {
      alert("비밀번호를 확인해주세요.");
      $("#pass_confirm").focus();
      return false;
    }
    if ($("#name").val() == "" || !is_username) {
      alert("이름을 확인해주세요.");
      $("#name").focus();
      return false;
    }

    if ($("#hp2").val() == "") {
      alert("휴대폰 번호를 입력하세요.");
      $("#hp2").focus();
      return false;
    } else {
      let hp2 = $("#hp2").val();
      let hp3 = $("#hp3").val();
      let check3 = /[0-9]{3,4}/;
      let check4 = /[0-9]{4}/;
      if (!check3.test(hp2)) {
        alert("번호 형식이 맞지 않습니다.");
        $("#hp2").focus();
        return false;
      }
      if (!check4.test(hp3)) {
        alert("번호 형식이 맞지 않습니다.");
        $("#hp3").focus();
        return false;
      }
    }

    if ($("#email1").val() == "") {
      alert("이메일주소를 확인해주세요.");
      $("#email1").focus();
      return false;
    } else {
      let email1 = $("#email1").val();
      let check5 = /^[a-zA-Z0-9]+$/;
      let email2 = $("#email2").val();
      let check6 = /^[a-zA-Z0-9]+[\.][a-z]+([\.][a-z]+)*$/;
      if (!check5.test(email1)) {
        alert("이메일 아이디 형식이 맞지 않습니다.");
        $("#email1").focus();
        return false;
      }

      if (!check6.test(email2)) {
        alert("이메일을 정확하게 입력하세요.");
        $("#email2").focus();
        return false;
      }
    }
    // return false

    location.href = "./joinok.html"

  });
});
