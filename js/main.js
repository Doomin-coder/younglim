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

const HeaderCtrl = (() => {
    let header = null; // 헤더 DOM 요소
    let lastScroll = 0; // 마지막 스크롤 위치
    let didScroll = false; // 스크롤 감지 플래그
    let headerItem = document.querySelectorAll('header nav ul li a');
    console.log(headerItem)
    // 초기화 함수
    const init = () => {
        header = document.querySelector('header'); // 헤더 선택자
        if (!header) {
            console.error("헤더 요소를 찾을 수 없습니다. '.header' 클래스를 확인하세요.");
            return;
        }

        window.addEventListener('scroll', onScroll);
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

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll <= 0) {
            // 스크롤이 최상단일 경우 헤더를 표시
            header.classList.remove('hide');
            header.classList.remove('on');
            
        } else if (currentScroll > lastScroll) {
            // 아래로 스크롤하면 헤더 숨김
            header.classList.add('hide');
            header.classList.remove('on');
            
        } else {
            // 위로 스크롤하면 헤더 표시
            header.classList.remove('hide');
            header.classList.add('on');
           
           
        }

        lastScroll = currentScroll; // 마지막 스크롤 위치 갱신
    };

    // 외부에서 사용 가능한 API 반환
    return {
        init,
    };

})();

// 초기화 실행
document.addEventListener('DOMContentLoaded', () => {
    HeaderCtrl.init();
});





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

