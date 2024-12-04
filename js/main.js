// let header = document.querySelector("header")
// let header_Inner = document.querySelector(".header_Inner")
// console.log(header)

// window.addEventListener("scroll", ()=> {
//     const windowSc = window.pageYOffset || document.documentElement.scrollTop;
//     console.log("현재 스크롤 위치:", windowSc);


//     if(windowSc > 0){
//         header.classList.add("on")
//     } 
// })


// // 헤더효과
// const HeaderCtrl = (() => {
//     let header = null; // 헤더 DOM 요소
//     let lastScroll = 0; // 마지막 스크롤 위치
//     let didScroll = false; // 스크롤 감지 플래그
//     let headerItem = document.querySelectorAll('header nav ul li a');
//     console.log(headerItem)
//     // 초기화 함수
//     const init = () => {
//         header = document.querySelector('header'); // 헤더 선택자
//         if (!header) {
//             console.error("헤더 요소를 찾을 수 없습니다. '.header' 클래스를 확인하세요.");
//             return;
//         }

//         window.addEventListener('scroll', onScroll);
//         setInterval(checkScroll, 100); // 100ms마다 스크롤 상태 확인
//     };

//     // 스크롤 이벤트 핸들러
//     const onScroll = () => {
//         didScroll = true; // 스크롤이 발생했음을 표시
//     };

//     // 스크롤 상태를 확인하고 헤더 표시/숨김 처리
//     const checkScroll = () => {
//         if (!didScroll) return;
//         didScroll = false;

//         const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//         if (currentScroll <= 0) {
//             // 스크롤이 최상단일 경우 헤더를 표시
//             header.classList.remove('hide');
//             header.classList.remove('on');
            
//         } else if (currentScroll > lastScroll) {
//             // 아래로 스크롤하면 헤더 숨김
//             header.classList.add('hide');
//             header.classList.remove('on');
            
//         } else {
//             // 위로 스크롤하면 헤더 표시
//             header.classList.remove('hide');
//             header.classList.add('on');
           
           
//         }

//         lastScroll = currentScroll; // 마지막 스크롤 위치 갱신
//     };

//     // 외부에서 사용 가능한 API 반환
//     return {
//         init,
//     };

// })();

// // 초기화 실행
// document.addEventListener('DOMContentLoaded', () => {
//     HeaderCtrl.init();
// });





// con1 메인슬라이드
let mainSlides = document.querySelector(".main_Slide")
// console.log(mainSlide)
let mainSlideItem = document.querySelectorAll(".main_Slide li")
// console.log(mainSlideItem)
let mainSlideTotal = mainSlideItem.length;
let current = 0;

slide();

function slide(){
    setInterval(mainSlide, 2800);
}

function mainSlide() {
    current++

    if(current == mainSlideTotal -1) {
        mainSlides.style.transition = "0.5s"
        mainSlides.style.marginLeft = `-${100 * (mainSlideTotal -1)}%`;

        mainSlides.addEventListener("transitionend", function reset(){
            mainSlides.style.transition = "none"
            mainSlides.style.marginLeft = "0";
            mainSlides.removeEventListener("transitionend", reset);
        })

        current = 0;

    } else {
        mainSlides.style.transition = "0.5s"
        mainSlides.style.marginLeft = `-${100 * current}%`;
    };
};


//  // con1 메인슬라이드 글씨 페이드
//  let mainTxtItem01 = document.querySelector(".main_txt h2")
//  let mainTxtItem02 = document.querySelector(".main_txt p")
//  let mainTxtItem03 = document.querySelector(".main_txt div")
// //  console.log(mainTxt)
//  let i = 0;

// if (i == 0) {
//     mainTxtItem01.classList.add("on")
// }

 


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

    //스크롤 효과
    $(window).on("scroll", function(){
        let wScroll = $(this).scrollTop();
        
        const HeaderCtrl = (() => {
            let $header = null; // 헤더 DOM 요소
            let lastScroll = 0; // 마지막 스크롤 위치
            let didScroll = false; // 스크롤 감지 플래그
            const $headerItem = $('header nav ul li a'); // jQuery로 요소 선택
            console.log($headerItem);
        
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
                    $("header").stop().removeClass("on")
                    $("header nav a").stop().removeClass("on")
                    $("header .logo_Gray").stop().removeClass("on")
                    $("header .logo_White").stop().addClass("on")
                } else if (currentScroll > lastScroll) {
                    // 아래로 스크롤하면 헤더 숨김
                    $("header").stop().addClass("slide")
                    
                    
                } else {
                    // 위로 스크롤하면 헤더 표시
                    $("header").stop().removeClass("slide")
                    $("header").stop().addClass("on")
                    $("header nav a").stop().addClass("on")
                    $("header .logo_White").stop().removeClass("on")
                    $("header .logo_Gray").stop().addClass("on")
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
            $(".con6 .left_Item").stop().addClass("on")
            $(".con6 .right_Item").stop().addClass("on")
        } else {
            $(".con6 .left_Item").stop().removeClass("on")
            $(".con6 .right_Item").stop().removeClass("on")
        };


        

    });


    //마우스엔터효과

    //헤더
    $("header").on("mouseenter", () =>{
        $("header").stop().addClass("on")
        $("header nav a").stop().addClass("on")
        $("header .logo_White").stop().removeClass("on")
        $("header .logo_Gray").stop().addClass("on")
    })
    $("header").on("mouseleave", () =>{
        $("header").stop().removeClass("on")
        $("header nav a").stop().removeClass("on")
        $("header .logo_White").stop().addClass("on")
        $("header .logo_Gray").stop().removeClass("on")
    })


});
