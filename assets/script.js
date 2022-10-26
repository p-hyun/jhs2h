let pictureArr = [
  "../img/1.jpg",
  "../img/2.jpg",
  "../img/3.jpg",
  "../img/4.jpg",
  "../img/5.jpg",
  "../img/6.jpg",
  "../img/7.jpg",
  "../img/8.jpg",
  "../img/9.jpg",
  "../img/10.jpg",
  "../img/11.jpg",
  "../img/12.jpg",
  "../img/13.jpg",
  "../img/14.jpg",
  "../img/15.jpg",
  "../img/16.jpg",
  "../img/17.jpg",
  "../img/18.jpg",
  "../img/19.jpg",
  "../img/20.jpg",
  "../img/21.jpg",
  "../img/22.jpg",
  "../img/23.jpg",
  "../img/24.jpg",
  "../img/25.jpg",
  "../img/26.jpg",
  "../img/27.jpg",
  "../img/28.jpg",
  "../img/29.jpg",
  "../img/0.jpg",
];

document.addEventListener("DOMContentLoaded", function(){
  pictureArr.forEach(function(src) {
    console.log(src);
    let str =  `<div class="swiper-slide swiper-img"><img class="imgSrc" src=`+ src +` style="oject-fit:cover;"></div>`;
     $(".wrapSwiper").append(str);
    let popStr = `<div class="swiper-slide popSwiperImg"><img class="imgSrc" src=`+ src +`></div>`;
    $(".wrapSwiperPop").append(popStr);
  });

  $(".imgSrc").on("click", function(e) {
    let img = e.target;
    let src = $(img).attr("src");
    let idx = pictureArr.findIndex(e => e == src);
    swiper.slideTo(idx,200,false);
    fn_layer('layer01', 600);
  })
  
});

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

  new Swiper('.swiper-container', {

    slidesPerView : 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween : 30, // 슬라이드간 간격
    slidesPerGroup : 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
  
    // 그룹수가 맞지 않을 경우 빈칸으로 메우기
    // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank : true,
  
    loop : true, // 무한 반복

    navigation : { // 네비게이션
      nextEl : '.swiper-button-next', // 다음 버튼 클래스명
      prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
    },
  });


// var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// var options = { //지도를 생성할 때 필요한 기본 옵션
//   center: new kakao.maps.LatLng(37.2617874, 127.0334682), //지도의 중심좌표.
//   level: 4 //지도의 레벨(확대, 축소 정도)
// };
  
  
// var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// var markerPosition  = new kakao.maps.LatLng(37.2617874, 127.0334682); 

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);


//modal

const layerPop = document.querySelector('.layerPop');

layerPop.addEventListener('click', () => {
// 뒷배경 비활성화시키기 
  // fn_layer('layer01', 600);
  $(".layerPop").css("display", block);
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

