jQuery(function($) {
//     let bWidth = window.innerWidth;
// window.addEventListener("resize", () => {
// const nWidth = window.innerWidth;
// if ((bWidth < 1024 && nWidth >= 1024) || (bWidth > 1023 && nWidth <= 1023)) {
// location.reload();
// }
// beforeWidth = nowWidth;
// });
  //새로고침시 맨 위로
  setTimeout (function () {
    scrollTo(0,0);
    },100);
    $('#acc_gugun').val('서울특별시 강남구 캠핑장').prop("selected",true);
$("#searchBtn").click(function() {
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/local/search/keyword.json?",
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" },
        data: {
            query: $("#acc_gugun option:selected").val(),
            size:15,
    }
    })
    .done(function (msg) { 
        $('.box .result').remove()
        $( ".box" ).append( `<div class="result"> </div>` );
        $( ".result" ).css("animation", "fadeInDown 0.6s alternate");
        console.log(msg);
        for (var i = 0; i < msg.documents.length; i++){
        $( '.box .result' ).append( `<div class="resultContents"><h2 id="${msg.documents[i].address_name}">${msg.documents[i].place_name}</h2>
            <p id="${msg.documents[i].address_name}" class="adrs" data-num="${msg.documents[i].phone}" data-url="${msg.documents[i].place_url}" data-value="${msg.documents[i].place_name}">주소 : ${msg.documents[i].address_name}</p></div>`);
        }
    });
});
$(".back").click(function() {
    $("#sectionbox").css('opacity', '0')
});
setTimeout(function(){
    $('#searchBtn').trigger('click');
}, 100);
});