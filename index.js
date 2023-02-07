// a
const a = document.querySelectorAll("a");
// nav
const nav = document.querySelector("nav");
const span = document.querySelector("nav span");
const gnb = document.querySelector("nav .gnb");
const prjBtn = document.querySelector("nav .gnb li:nth-child(1)");
const skillBtn = document.querySelector("nav .gnb li:nth-child(2)");
const aboutBtn = document.querySelector("nav .gnb li:nth-child(3)");
const navA = document.querySelector("nav .gnb li a");
const navToggle = document.querySelector("nav .toggleBtn");
// project container
const prj = document.querySelectorAll(".projectContainer .prjBox .prj");
const prjBox2 = document.querySelector(".projectContainer .prjBox2");
const moreBtn = document.querySelector(".projectContainer .moreBtn");
// skill container
const skillContainer = document.querySelector(".skillContainer");
// about container
const aboutContainer = document.querySelector(".aboutContainer");
const txt1 = document.querySelector(".consoleText .autoTextBox .txt1");
const txt2 = document.querySelector(".consoleText .autoTextBox .txt2");
// mouse cursor
const mouseCursor = document.querySelector(".mouseCursor");
const cursorSvg = document.querySelector(".mouseCursor svg");
// goUp
const goUp = document.querySelector(".goUp");

// a hover cursor
a.forEach(item => {
    item.addEventListener("mouseover", () => {
        cursorSvg.classList.add("over");
    });
    item.addEventListener("mouseout", () => {
        cursorSvg.classList.remove("over");
    });
});

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
const colorArr = ["#4E79E8", "#56E04D","hotpink"];
const autoColor = setInterval(() => {
    let ran = Math.trunc(Math.random() * 3);
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
        top: skillContainer.offsetTop - 150,
        behavior: "smooth",
    });
    gnb.classList.remove("active");
});
aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollTo({
        top: aboutContainer.offsetTop,
        behavior: "smooth",
    });
    gnb.classList.remove("active");
});

// project container link, hover cursor
const prjArray = [
    "./project1/project1.html",
    "./project2/project2.html",
    "./project3/project3.html"
]
prj.forEach((project, idx) => {
    project.addEventListener("click", () => {
        location.href = prjArray[idx];
    });
    project.addEventListener("mouseover", () => {
        cursorSvg.classList.add("over");
    });
    project.addEventListener("mouseout", () => {
        cursorSvg.classList.remove("over");
    });
});

// project container prjBox2 toggle
moreBtn.addEventListener("click", () => {
    prjBox2.classList.toggle("morePrj");
});
moreBtn.addEventListener("mouseover", () => {
    cursorSvg.classList.add("over");
});
// project container moreBtn hover cursor
moreBtn.addEventListener("mouseout", () => {
    cursorSvg.classList.remove("over");
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
const txtInterval2 = setInterval(() => {
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
goUp.addEventListener("mouseover", () => {
    cursorSvg.classList.add("over");
});
goUp.addEventListener("mouseout", () => {
    cursorSvg.classList.remove("over");
});