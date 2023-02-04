// nav
const nav = document.querySelector("nav");
const span = document.querySelector("nav span");
const gnb = document.querySelector("nav .gnb");
const prjBtn = document.querySelector("nav .gnb li:nth-child(1)");
const skillBtn = document.querySelector("nav .gnb li:nth-child(2)");
const aboutBtn = document.querySelector("nav .gnb li:nth-child(3)");
// nav toggle
const navToggle = document.querySelector("nav .toggle_btn");
// skill container
const skillContainer = document.querySelector(".skillContainer");
// about container
const aboutContainer = document.querySelector(".aboutContainer");
const txt1 = document.querySelector(".consoleText .autoTextBox .txt1");
const txt2 = document.querySelector(".consoleText .autoTextBox .txt2");

// mouse cursor
const mouseCursor = document.querySelector(".mouseCursor");

// goUp
const goUp = document.querySelector(".goUp");

// nav, goUp scroll
addEventListener("scroll", () => {
    if (scrollY > 150) {
        nav.classList.add("on");
        goUp.style.opacity = 1;
    } else {
        nav.classList.remove("on");
        goUp.style.opacity = 0;
    };
});

// nav span color
const colorArr = ["#4E79E8", "yellowgreen","lightpink", "lightskyblue"];
const autoColor = setInterval(() => {
    let ran = Math.trunc(Math.random() * 4);
    span.style.color = colorArr[ran];
}, 500);

// nav toggle
navToggle.addEventListener("click", (e) => {
    e.preventDefault();
    gnb.classList.toggle("active");
})

// nav menu click
prjBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
    gnb.classList.remove("active");
});
skillBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({
        top: skillContainer.offsetTop - 130,
        behavior: "smooth",
    });
    gnb.classList.remove("active");
});
aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({
        top: aboutContainer.offsetTop - 10,
        behavior: "smooth",
    });
    gnb.classList.remove("active");
});

// about container auto text1
const text1 = '맡은 일에 "최선"을 다하겠습니다.';
let n = 0; 
const txtInterval1 = setInterval(() => {
    if (n < text1.length) {
        txt1.textContent += text1[n];
        n++;
    } else {
        txt1.textContent = "";
        n = 0;
    };
}, 230);
// about container auto text2
const text2 = '변화에 맞게 끊임없이 "노력"하겠습니다.';
let i = 0;
const txtInterval2 = setInterval((e) => {
    if (i < text2.length) {
        txt2.textContent += text2[i];
        i++;
    } else {
        txt2.textContent = "";
        i = 0;
    };
}, 200);

// mouse cursor
addEventListener("mousemove", e => {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY + "px";
})

// goUp 
goUp.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: "smooth",
    });
});