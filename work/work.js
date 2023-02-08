// a
const a = document.querySelector("a");
// nav
const nav = document.querySelector("nav");
// mouse cursor
const mouseCursor = document.querySelector(".mouseCursor");
const cursorSvg = document.querySelector(".mouseCursor svg");
// goUp
const goUp = document.querySelector(".goUp");

// nav, goUp scroll
addEventListener("scroll", () => {
    if (scrollY > 150) {
        nav.style.backgroundColor = "#fff";
        goUp.style.opacity = 1;
    } else {
        nav.style.backgroundColor = "transparent";
        goUp.style.opacity = 0;
    };
});

// a mouseover cursor
a.addEventListener("mouseover", () => {
    cursorSvg.classList.add("over");
});
a.addEventListener("mouseout", () => {
    cursorSvg.classList.remove("over");
});

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