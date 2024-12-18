// con1 메인슬라이드
let mainSlides01 = document.querySelector(".main_Slide")
// console.log(mainSlide)
let mainSlideItem01 = document.querySelectorAll(".main_Slide li")
// console.log(mainSlideItem)
let mainSlideTotal01 = mainSlideItem01.length;

let current = 0;

slide01();

function slide01(){
    setInterval(mainSlide01, 2900);
}

function mainSlide01() {
    current++

    if(current == mainSlideTotal01 -1) {
        mainSlides01.style.transition = "0.5s"
        mainSlides01.style.marginLeft = `-${100 * (mainSlideTotal01 -1)}%`;

        mainSlides01.addEventListener("transitionend", function reset(){
            mainSlides01.style.transition = "none"
            mainSlides01.style.marginLeft = "0";
            mainSlides01.removeEventListener("transitionend", reset);
        })

        current = 0;

    } else {
        mainSlides01.style.transition = "0.5s"
        mainSlides01.style.marginLeft = `-${100 * current}%`;
    };
};



// con2 list 페이드효과
// let 

let styleNavi = document.querySelectorAll(".con3list_Navi ul li")
// console.log(styleNavi)
let con3styleList = document.querySelectorAll(".con3style_List li")

styleNavi.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        
        con3styleList.forEach((btn) => {
            btn.classList.remove("show")
        });
        con3styleList[index].classList.add("show");
        
        styleNavi.forEach((btn) => {
            btn.classList.remove("on")
        });
        styleNavi[index].classList.add("on");

    });
});




/*--------------제이쿼리--------------*/
$(function (){

    //헤더 스크롤효과
    const HeaderCtrl = (() => {
        let $header = null; // 헤더 DOM 요소
        let lastScroll = 0; // 마지막 스크롤 위치
        let didScroll = false; // 스크롤 감지 플래그
        const $headerItem = $('header nav ul li a'); // 
        // console.log($headerItem);
    
        // 초기화 함수
        const init = () => {
            $header = $('header'); // 헤더 선택자
            if ($header.length === 0) {
                console.error("헤더 요소를 찾을 수 없습니다. '.header' 클래스를 확인하세요.");
                return;
            }
    
            $(window).on('scroll', onScroll);
            setInterval(checkScroll, 100); // 100ms마다 스크롤 상태 확인
        };
    
        // 스크롤 이벤트 핸들러
        const onScroll = () => {
            didScroll = true; // 스크롤이 발생했음을 표시
        };
    
        // 스크롤 상태를 확인하고 헤더 표시/숨김 처리
        const checkScroll = () => {
            if (!didScroll) return;
            didScroll = false;
    
            const currentScroll = $(window).scrollTop();
    
            if (currentScroll <= 0) {
                // 스크롤이 최상단일 경우 헤더를 표시
                $("header").stop().removeClass("slide")
                $("header, header nav a, header .logo_Gray, .header_Btn .menu_Btn i").stop().removeClass("on")
                $("header .logo_White").stop().addClass("on")
            } else if (currentScroll > lastScroll) {
                // 아래로 스크롤하면 헤더 숨김
                $("header").stop().addClass("slide")
                
                
            } else {
                // 위로 스크롤하면 헤더 표시
                $("header").stop().removeClass("slide")
                $("header, header nav a, header .logo_Gray, .header_Btn .menu_Btn i").stop().addClass("on")
                $("header .logo_White").stop().removeClass("on")
            }
    
            lastScroll = currentScroll; // 마지막 스크롤 위치 갱신
        };
    
        // 외부에서 사용 가능한 API 반환
        return {
            init,
        };
    })();
    
    // 초기화 실행
    $(document).ready(() => {
        HeaderCtrl.init();
    });
    // 헤더스크롤 효과 끝



    //스크롤 효과
    $(window).on("scroll", function(){
        let wScroll = $(this).scrollTop();
        


         //con2 페이드효과
        if(wScroll >= $(".con2").offset().top - $(window).height()/2){
          
            $(".con2 .con2_txt").stop().addClass("on")
            $(".con2 ul .left_img_wrap").stop().addClass("on")
            $(".con2 ul .right_img_wrap").stop().addClass("on")
        } else {
            $(".con2 .con2_txt").stop().removeClass("on")
            $(".con2 ul .left_img_wrap").stop().removeClass("on")
            $(".con2 ul .right_img_wrap").stop().removeClass("on")
        };
        //con2 끝


        //con3 페이드효과
        if(wScroll >= $(".con3style_List li").offset().top - $(window).height()/2){
                $(".con3style_List .left_ImgWrap").stop().addClass("on")
                $(".con3style_List .right_ImgWrap").stop().addClass("on")
        } else {
            $(".con3style_List .left_ImgWrap").stop().removeClass("on")
            $(".con3style_List .right_ImgWrap").stop().removeClass("on")
        };
    
        if(wScroll >= $(".con3style_List li").offset().top - $(window).height()/5){
            $(".con3style_List .center_txt span").stop().addClass("on")
            $(".con3style_List .bottom_Img").stop().addClass("on")
        } else {
            $(".con3style_List .center_txt span").stop().removeClass("on")
            $(".con3style_List .bottom_Img").stop().removeClass("on")
        };
        //con3 끝


        //con4 페이드효과
        if(wScroll >= $(".con4_Wrap").offset().top - $(window).height()){
            $(".con4_Wrap .category").stop().addClass("on")
            $(".con4_Wrap .list_Title").stop().addClass("on")
            $(".con4_Wrap p").stop().addClass("on")
            $(".con4_Wrap .list_Img img").stop().addClass("on")
        } else {
            $(".con4_Wrap .category").stop().removeClass("on")
            $(".con4_Wrap .list_Title").stop().removeClass("on")
            $(".con4_Wrap p").stop().removeClass("on")
            $(".con4_Wrap .list_Img img").stop().removeClass("on")
        };
        //con4 끝


        //con5 페이드효과
        if(wScroll >= $(".con6 ul li").offset().top - $(window).height()){
            $(".con6 .left_Item, .con6 .right_Item").stop().addClass("on")
        } else {
            $(".con6 .left_Item, .con6 .right_Item").stop().removeClass("on")
        };


        
    
    });


    //마우스엔터효과

    //헤더
    $("header").on("mouseenter", () =>{
        $("header, header nav a, header .logo_Gray, .header_Btn .menu_Btn i").stop().addClass("on")
        $("header .logo_White").stop().removeClass("on")
    })
    $("header").on("mouseleave", () =>{
        $("header, header nav a, header .logo_Gray, .header_Btn .menu_Btn i").stop().removeClass("on")
        $("header .logo_White").stop().addClass("on")
    })
    

    //헤더 바 메뉴
    $(".header_Btn .menu_Btn").on("click", () => {
        $(".header_Btn .menu_Btn").removeClass("on");
        $(".header_Btn .close_Btn, .header_bar_Menu").addClass("on");
        setTimeout(() => {
            $(".header_bar_Menu .main_Menu li a, .header_bar_Menu .sub_Menu").addClass("on");
        }, 10);
        $("body").addClass("no-scroll");
    })

    $(".header_Btn .close_Btn").on("click", () => {
        $(".header_Btn .menu_Btn").addClass("on");
        $(".header_Btn .close_Btn, .header_bar_Menu").removeClass("on");
        setTimeout(() => {
            $(".header_bar_Menu .main_Menu li a, .header_bar_Menu .sub_Menu").removeClass("on");
        }, 10);
        $("body").removeClass("no-scroll");
    })

     //헤더 바 후버효과
     $(document).ready(function() {
        $("nav ul li a").hover(
          function() {
            $(this).addClass("hovered");
          },
          function() {
            $(this).removeClass("hovered");
          }
        );
      });



        //con1 애니메이션 효과
        con1Show(); 
        function con1Show() {
        
        $(".con1 .bg_Inner").addClass("on") 
        $(".con1 .main_txt h2, .con1 .main_txt p, .con1 .main_txt .more_Box").addClass("on") 
        }




});
