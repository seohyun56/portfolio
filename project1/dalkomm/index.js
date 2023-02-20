// a
const as = document.querySelectorAll("a");
// nav
const nav = document.querySelector("nav");
const logo = document.querySelector("nav h1");
const lastMenu = document.querySelector(".gnb > li:last-child");
const gnbHover = document.querySelector("nav .gnbHover");
// header
const swiperContents = document.querySelector(".swiperContainer .Swiper .swiper-wrapper");
// supporter
const circle = document.querySelector(".supporter .mouseImg .circle");
const circleBig = document.querySelector(".supporter .mouseImg .circleBig");
const circleSmall = document.querySelector(".supporter .mouseImg .circleSmall");
// footer
const portfolio = document.querySelector(".footer2 .site p");

// scroll animation 호출
AOS.init();

// a 새로고침 방지
as.forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
  })
})

// 로고 클릭 시 index.html
logo.addEventListener("click", () => {
  location.href = "./index.html";
})

// footer 포트폴리오 바로가기 a
portfolio.addEventListener("click", () => {
  location.href = "../../index.html";
})

// nav scroll
addEventListener("scroll", scrolled);

let prevScroll = scrollY;
function scrolled() {
  const navHt = nav.offsetHeight;
  let nowScroll = scrollY;
  if (prevScroll < nowScroll) {
    nav.style.top = `-${navHt}px`;
  } else if (prevScroll >= nowScroll) {
    nav.style.top = 0;
  }
  prevScroll = nowScroll;

  if (scrollY > 0) {
    nav.classList.add("on");
  } else {
    nav.classList.remove("on");
  }
}

// nav 마지막 메뉴에 마우스를 올렸을 때 하단 div opacity 조절
lastMenu.addEventListener("mouseover", () => {
  gnbHover.style.opacity = 0;
});
lastMenu.addEventListener("mouseout", () => {
  gnbHover.style.opacity = 1;
});

// swiper 
const mainSwiper = new Swiper('.mySwiper', {
    parallax: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',//패이지내이션 역할의 요소와 연결
    },
    autoplay: {
      delay: 3000,
    }
});

// supporter 마우스 좌표
addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  circle.style.transform = `translate(${x / 20}px, ${y / 40}px)`; // 브라우저 크기에서 나눈 크기만큼만 이동
  circleBig.style.transform = `translate(${x / 40}px, ${y / 70}px)`;
  circleSmall.style.transform = `translate(${x / 40}px, ${y / 20}px)`;
})