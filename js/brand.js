$(function () {
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



    //스크롤 이벤트
    $(window).on("scroll", function() {
       let wScroll = $(this).scrollTop()
       con2Scroll = $(".con2").offset().top
       con3Scroll = $(".con3").offset().top
       con4Scroll = $(".con4").offset().top
       con4ItemScroll = $(".con4 .logo_Explanation03").offset().top
       con5Scroll = $(".con5").offset().top

        //con2
        if(wScroll >= con2Scroll - $(window).height()/1.5) {
            $(".color_System_Wrap, .logo_Wrap").addClass("on")
        } else {
            $(".color_System_Wrap, .logo_Wrap").removeClass("on")
        }
        //con2 끝

         //con3 
        if(wScroll >= con3Scroll - $(window).height()/2) {
            $(".txt_Box").addClass("on")
        } else {
            $(".txt_Box").removeClass("on")
        }
        //con3 끝

        //con4
        if(wScroll >= con4Scroll - $(window).height()/2) {
            $(".inner_Red .red_Txt_Wrap").addClass("on")
        } else {
            $(".inner_Red .red_Txt_Wrap").removeClass("on")
        }

        if(wScroll >= con4ItemScroll - $(window).height()/2) {
            $(".inner_Gray .gray_Txt_Wrap").addClass("on")
        } else {
            $(".inner_Gray .gray_Txt_Wrap").removeClass("on")
        }
        //con4 끝

        //con5
        if(wScroll >= con5Scroll - $(window).height()/2) {
            $(".noslide_Img .txt_Wrap").addClass("on")
        } else {
            $(".noslide_Img .txt_Wrap").removeClass("on")
        }
        //con5 끝



    })










    





    //con1 글씨 페이드
    con1Show();
    function con1Show(){
       $(".con1_Wrap .video_Txt span").addClass("on")
       $(".con1_Wrap .video_Txt p").addClass("on") 
    }

})


// // Gsap 효과
//         gsap.registerPlugin(ScrollTrigger);
//         let upBox = document.querySelector(".slide_Img_Inner ul");
        
//         let tl = gsap.timeline({
//             scrollTrigger: {
//             trigger:".con5",
//             pin:true,
//             scrub:1,
//             start:"top top",
//             end:"+=200%", //시작부분에서 400%까지 스크롤한 후 종료
//             markers:false,
            
//             },
//         });

//         tl.from(upBox, {y:"200%", duration:"2", ease:"none", stagger:"4", });
//         tl.to(upBox, {y:"0",})


gsap.registerPlugin(ScrollTrigger);

// 미디어 쿼리 설정
let mediaQuery = window.matchMedia("(min-width: 768px)"); // PC 해상도 (1024px 이상)

// 애니메이션 함수 정의
function setupAnimation() {

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    if (mediaQuery.matches) {
        let upBox = document.querySelector(".slide_Img_Inner ul");

        // 기존 GSAP 애니메이션 설정
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".con5",
                pin: true,
                scrub: 1,
                start: "top top",
                end: "+=200%",
                markers: false,
            },
        });

        tl.from(upBox, { y: "200%", duration: 2, ease: "none", stagger: 4 });
        tl.to(upBox, { y: "0" });
    }
}

// 초기 실행
setupAnimation();

// 미디어 쿼리 변화 감지
mediaQuery.addEventListener("change", setupAnimation);


    


