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
        $(".con1 .bg_Left").addClass("on")
        $(".con1 .bg_Right").addClass("on") 
        $(".con1 .main_Txt").addClass("on") 
    }

 

    // 스크롤효과
    $(window).on("scroll", function() {
        let wScroll = $(this).scrollTop()
        con2Kitchen01 = $(".Kitchen01").offset().top;
        con2Kitchen02_01 = $(".Kitchen02 .right_Img").offset().top;
        con2Kitchen02_02 = $(".Kitchen02 .left_Img").offset().top;

        con2door01 = $(".door01").offset().top;
        con2door02_01 = $(".door02 .right_Img").offset().top;
        con2door02_02 = $(".door02 .left_Img").offset().top;

        con4Fade01 = $("#con4_Fade01").offset().top;
        con4Fade02 = $("#con4_Fade02").offset().top;
        con4Fade03 = $("#con4_Fade03").offset().top;

        con5Fade01 = $("#con5_Fade01").offset().top;
        con5Fade02 = $("#con5_Fade02").offset().top;
        con5Fade03 = $("#con5_Fade03").offset().top;
    
        if(wScroll >= con2Kitchen01 - $(window).height() / 1.7) {
            $(".Kitchen01 .left_Img, .Kitchen01 .right_Txt").addClass("on")
        } else {
            $(".Kitchen01 .left_Img, .Kitchen01 .right_Txt").removeClass("on")
        }

        if(wScroll >= con2Kitchen02_01 - $(window).height() / 1.7) {
            $(".Kitchen02 .right_Img").addClass("on")
        } else {
            $(".Kitchen02 .right_Img").removeClass("on")
        }

        if(wScroll >= con2Kitchen02_02 - $(window).height() / 2.1) {
            $(".Kitchen02 .left_Img div").addClass("on")
        } else {
            $(".Kitchen02 .left_Img div").removeClass("on")
        }


        if(wScroll >= con2door01 - $(window).height() / 1.7) {
            $(".door01 .left_Img, .door01 .right_Txt").addClass("on")
        } else {
            $(".door01 .left_Img, .door01 .right_Txt").removeClass("on")
        }

        if(wScroll >= con2door02_01 - $(window).height() / 1.7) {
            $(".door02 .right_Img").addClass("on")
        } else {
            $(".door02 .right_Img").removeClass("on")
        }

        if(wScroll >= con2door02_02 - $(window).height() / 2.1) {
            $(".door02 .left_Img div").addClass("on")
        } else {
            $(".door02 .left_Img div").removeClass("on")
        }

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

        if(wScroll >= con5Fade03 - $(window).height() / 1.1) {
            $("#con5_Fade03").addClass("on")
        } else {
            $("#con5_Fade03").removeClass("on")
        }


        
    })




    //con3 이미지슬라이드
    // 초기 변수 설정
let total = $(".panel li").length; // 슬라이드 총 개수
let i = 0; // 현재 슬라이드 인덱스
let timer; // 자동 슬라이드 타이머

// 초기 슬라이드 및 타이머 시작
sld();
start();

function sld() {
    // 슬라이드 이동
    $(".panel").stop().animate({"margin-left": -i * 100 + "%"});
    updateChangeNum(); // change_Num 업데이트
}

function updateChangeNum() {
    // change_Num 업데이트 (1부터 시작)
    $(".change_Num").text(i + 1);
}

function start() {
    timer = setInterval(function () {
        i++;
        if (i == total - 1) {
            $(".panel").stop().animate({"margin-left": -400 + "%"}, function () {
                $(".panel").css({"margin-left": 0});
            });
            i = 0;
        } else {
            $(".panel").stop().animate({"margin-left": -i * 100 + "%"});
        }

        // 텍스트 및 change_Num 업데이트
        $(".con3_Txt li").removeClass("on");
        $(".con3_Txt li").eq(i).addClass("on");
        updateChangeNum();
    }, 2500);
}

// next 버튼 클릭 이벤트
$(".next").on("click", function () {
    clearInterval(timer); // 자동 슬라이드 일시 중지
    i++;
    if (i == total - 1) {
        $(".panel").stop().animate({"margin-left": -400 + "%"}, function () {
            $(".panel").css({"margin-left": 0});
        });
        i = 0;
    } else {
        $(".panel").stop().animate({"margin-left": -i * 100 + "%"});
    }

    // 텍스트 및 change_Num 업데이트
    $(".con3_Txt li").removeClass("on");
    $(".con3_Txt li").eq(i).addClass("on");
    updateChangeNum();
    start(); // 자동 슬라이드 재시작
});

// prev 버튼 클릭 이벤트
$(".prev").on("click", function () {
    clearInterval(timer); // 자동 슬라이드 일시 중지
    i--;
    if (i < 0) {
       
        $(".panel").css({"margin-left":- 400 + "%"})
        i = 3;
        $(".change_Num").text(i + 1);
    } else {
        $(".panel").stop().animate({"margin-left": -i * 100 + "%"});
        $(".change_Num").text(i + 1);
    }

    // 텍스트 및 change_Num 업데이트
    $(".con3_Txt li").removeClass("on");
    $(".con3_Txt li").eq(i).addClass("on");
    sld();
    start(); // 자동 슬라이드 재시작
});






    /* 
    let changeNum = 1; // 초기 숫자 설정
        const maxNum = total - 1 // 최대 숫자
        const changeNumElement = $(".change_Num"); // 숫자 요소 선택


    changeNum++;
           if (changeNum > maxNum) {
               changeNum = 1; // 최대 숫자를 넘어가면 다시 1로 설정
           }
           changeNumElement.text(changeNum); // change_Num 요소에 텍스트 업데이트*/ 

    

});