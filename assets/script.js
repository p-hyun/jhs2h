const swiper = new Swiper('.swiper', {
    lazy: {
        loadPrevNext: true,
      },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.2617874, 127.0334682), //지도의 중심좌표.
  level: 4 //지도의 레벨(확대, 축소 정도)
};
  
  
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

var markerPosition  = new kakao.maps.LatLng(37.2617874, 127.0334682); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//modal
const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');

const layerPop = document.querySelector('.layerPop');

btnOpenPopup.addEventListener('click', () => {
// 뒷배경 비활성화시키기 
  fn_layer('layer01', 600);
});

layerPop.addEventListener('click', (e) => {
  if(!$(e.target).is('.layer01 .container')) {
    $(".layer01").fadeOut(200).removeClass("on");
    $("body, html").removeAttr('style');}
});

// 레이어팝업
function fn_layer(e,s) {
	var pdt = $("."+e).find(".inner").css('padding-top').replace(/[^-\d\.]/g, ''),
		pdb = $("."+e).find(".inner").css('padding-bottom').replace(/[^-\d\.]/g, '');
	$("."+e).fadeIn(200).addClass("on");
	$("body, html").css({"overflow":"hidden"});
	$("."+e).find(".inner").css({width:s+"px"});
	$("."+e).find(".container").css({"max-height":($("."+e).height()*0.9) - (Number(pdt) + Number(pdb))});

	$(window).resize(function(){
		$("."+e).find(".inner").css({width:s+"px"});
		$("."+e).find(".container").css({"max-height":($("."+e).height()*0.9) - (Number(pdt) + Number(pdb))});
	}).resize();
}

// 레이어 팝업 닫기
function fn_layer_close(t){
	$(t).closest(".inner").parent().fadeOut(200).removeClass("on");
	$("body, html").removeAttr('style');
}

