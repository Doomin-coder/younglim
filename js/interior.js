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



    // 스크롤효과
    $(window).on("scroll", function() {
        let wScroll = $(this).scrollTop()

        con2Item01 = $(".con2_Contents_Item01").offset().top;
        con2Item02 = $(".con2_Contents_Item02").offset().top;
        con2Item03 = $(".con2_Contents_Item03").offset().top;

        modern = $("#modern").offset().top;
        natural = $("#natural").offset().top;
        classic = $("#classic").offset().top;
        unique = $("#unique").offset().top;
        
        con4Fade01 = $("#con4_Fade01").offset().top;
        con4Fade02 = $("#con4_Fade02").offset().top;
        con4Fade03 = $("#con4_Fade03").offset().top;

        //con2효과
        if(wScroll >= con2Item01 - $(window).height()) {
            $(".con2_Wrap .con2_Title").addClass("on")
            $(".con2_Contents_Item01").addClass("on")
        } else {
            $(".con2_Wrap .con2_Title").removeClass("on")
            $(".con2_Contents_Item01").removeClass("on")
        }

        if(wScroll >= con2Item02 - $(window).height()) {
            $(".con2_Contents_Item02 .left_ImgWrap").addClass("on")
            $(".con2_Contents_Item02 .right_ImgWrap").addClass("on")
        } else {
            $(".con2_Contents_Item02 .left_ImgWrap").removeClass("on")
            $(".con2_Contents_Item02 .right_ImgWrap").removeClass("on")
        }

        if(wScroll >= con2Item03 - $(window).height()) {
            $(".con2_Contents_Item03").addClass("on")
        } else {
            $(".con2_Contents_Item03").removeClass("on")
        }
        //con2 효과끝


       // con3 효과
const toggleClass = (selector, condition) => {
    $(selector).toggleClass("on", condition);
};

// 섹션과 배경색 매핑
const sections = [
    { id: "#modern", color: "#d8cfbe" },
    { id: "#natural", color: "#a8a58b" },
    { id: "#classic", color: "#baac9f" },
    { id: "#unique", color: "#fbedce" }
];

const items = [
    { selector: ".con3_Item01 .module_Img", offsetDiv: 1 },
    { selector: ".con3_Item02 .right_Img", offsetDiv: 2.8 },
    { selector: ".con3_Item02 .left_Img", offsetDiv: 3.5 }
];

const checkScroll = () => {
    let appliedColor = ""; // 현재 적용된 배경색을 추적

    sections.forEach((section) => {
        const sectionTop = $(section.id).offset().top;
        const sectionCondition = wScroll >= sectionTop - $(window).height();

        // 배경색 변경
        if (sectionCondition) {
            appliedColor = section.color; // 가장 마지막으로 조건을 만족한 색상 선택
        }

        // 이미지 효과 처리
        items.forEach((item) => {
            const offset = $(window).height() / item.offsetDiv;
            const condition = wScroll >= sectionTop - offset;
            toggleClass(`${section.id} ${item.selector}`, condition);
        });
    });

    // con3 배경색 설정: transition 활용
    $(".con3").css("background-color", appliedColor);
    };

    $(document).ready(() => {
    // CSS transition 추가
    $(".con3").css({
        transition: "background-color 0.5s ease-in-out" // 부드러운 전환
    });
    });

    checkScroll(); // 스크롤 이벤트 핸들러에 호출


        
    if(wScroll >= con4Fade01 - $(window).height() / 1.1) {
        $("#con4_Fade01").addClass("on")
    } else {
        $("#con4_Fade01").removeClass("on")
    }

    if(wScroll >= con4Fade02 - $(window).height() / 1.1) {
        $("#con4_Fade02").addClass("on")
    } else {
        $("#con4_Fade02").removeClass("on")
    }

    if(wScroll >= con4Fade03 - $(window).height() / 1.1) {
        $("#con4_Fade03").addClass("on")
    } else {
        $("#con4_Fade03").removeClass("on")
    }










    })
















})