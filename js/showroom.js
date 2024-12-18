$(function () {
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

    $(".prev_Inner").on("mouseenter", () => {
        $(".prev").addClass("on")
    })
    $(".next_Inner").on("mouseenter", () => {
        $(".next").addClass("on")
    })

    $(".prev_Inner").on("mouseleave", () => {
        $(".prev").removeClass("on")
    })
    $(".next_Inner").on("mouseleave", () => {
        $(".next").removeClass("on")
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
        $(".con1 .main_Txt").addClass("on") 
    }

    //con3 모듈
    $(".con3_Module_Btn li").on("click", function (){
        let i = $(this).index();
        $(".con3_Module_Btn li").removeClass("on");
        $(this).addClass("on");
        $(".con3_Module_Img li").removeClass("on");
        $(".con3_Module_Img li").eq(i).addClass("on");
    })

    //con4 모듈
    $(".con4 .map_Btn li").on("click", function (){
        let i = $(this).index();
        $(".con4 .map_Btn li").removeClass("on");
        $(this).addClass("on");
        $(".con4_MapItem li, .con4_MapTxt_Item").removeClass("on");
        $(".con4_MapItem li").eq(i).addClass("on");
        $(".con4_MapTxt_Item").eq(i).addClass("on");
    })


    $(window).on("scroll", function() {
        let wScroll = $(this).scrollTop()
       
        con2Fade01 = $(".item01_LeftImg").offset().top;
        con2Fade02 = $(".item01_RightImg").offset().top;
        con2Fade03 = $(".item02_ImgWrap").offset().top;

        con5Fade01 = $("#con5_Fade01").offset().top;
        con5Fade02 = $("#con5_Fade02").offset().top;

        //con2 효과
        if(wScroll >= con2Fade01 - $(window).height() / 1.3) {
            $(".item01_LeftImg").addClass("on")
        } else {
            $(".item01_LeftImg").removeClass("on")
        }
        if(wScroll >= con2Fade02 - $(window).height() / 1.3) {
            $(".item01_RightImg").addClass("on")
        } else {
            $(".item01_RightImg").removeClass("on")
        }
        if(wScroll >= con2Fade03 - $(window).height() / 1.3) {
            $(".item02_ImgWrap").addClass("on")
        } else {
            $(".item02_ImgWrap").removeClass("on")
        }



        //con5 효과
        if(wScroll >= con5Fade01 - $(window).height() / 1.1) {
            $("#con5_Fade01").addClass("on")
        } else {
            $("#con5_Fade01").removeClass("on")
        }
    
        if(wScroll >= con5Fade02 - $(window).height() / 1.1) {
            $("#con5_Fade02").addClass("on")
        } else {
            $("#con5_Fade02").removeClass("on")
        }



    })



})