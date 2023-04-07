// 카카오맵 지도 생성하여 중심좌표 설정하기
var container = document.getElementById('map'); 
var options = { 
   center: new kakao.maps.LatLng(37.501284, 127.029039), 
           // 지도의 중심좌표 설정(스마트폰에서 구글지도 실행후 주소검색후 빨간색 마커를 꾹 누르면 위도, 경도가 보임)
   level: 3 
};
var map = new kakao.maps.Map(container, options); 


// 원하는 위치에 마커 설정하기
var markerPosition  = new kakao.maps.LatLng(37.501284, 127.029039); 
var marker = new kakao.maps.Marker({
   position: markerPosition
});

marker.setMap(map);
$(".box").on("click",".resultContents", function() {
   let d = $(this).find('p');
   let adress = d.attr("id");
   let searc = d.attr("data-value");
   let gourl = d.attr("data-url")
   let num = d.attr("data-num")
   
   // 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

geocoder.addressSearch(adress, function(result, status) {
if (status === kakao.maps.services.Status.OK) {
 var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
 var marker = new kakao.maps.Marker({
       map: map,
       position: coords
 });
 
 var infowindow = new kakao.maps.InfoWindow({
       content: `<div class="mapbox"><a href="${gourl}"><h3>${searc}<h3><p class="adr">주소 : ${adress}<p><p class="pnum">전화번호 : ${num}</p></a></div>`
 });
 infowindow.open(map, marker);
 map.setCenter(coords);
} 
});    
   });
   setTimeout(function(){
      $(".resultContents p:first").trigger('click');
  }, 700);
   
 