const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const pages = document.querySelectorAll(".page");

let isOpen = false;

// Open / Close Book
book.addEventListener("click", () => {

if (!isOpen) {

cover.style.transform = "rotateY(-180deg)";

pages.forEach((page, index) => {
setTimeout(() => {

page.style.transform =
rotateY(${-170 + (index * 5)}deg)`;
}, (index + 1) * 250);
});

isOpen = true;

} else {

pages.forEach((page, index) => {
setTimeout(() => {
page.style.transform = "rotateY(0deg)";
}, (pages.length - index) * 200);
});

setTimeout(() => {
cover.style.transform = "rotateY(0deg)";
}, 800);

isOpen = false;

}

});

// =========================
// Floating Animation
// =========================

let float = 0;

function animateBook() {

float += 0.02;

book.style.transform =
translateY(${Math.sin(float) * 10}px)`;

requestAnimationFrame(animateBook);

}


animateBook();


// =========================
// Mouse Tilt Effect
// =========================

document.addEventListener("mousemove", (e) => {

let x =
(window.innerWidth / 2 - e.pageX) / 40;

let y =
(window.innerHeight / 2 - e.pageY) / 40;

book.style.rotate =
${y}deg ${x}deg;

});


// =========================
// Keyboard Controls
// =========================

document.addEventListener("keydown", (e) => {

if (e.key === "Enter") {

book.click();

}

});


// =========================
// Page Flip on Click

// =========================

pages.forEach((page, index) => {

page.addEventListener("click", (e) => {

e.stopPropagation();

page.style.transform =
rotateY(-180deg);

});

});


// =========================
// Smooth Fade-in
// =========================

window.addEventListener("load", () => {

document.body.style.opacity = "0";

setTimeout(() => {

document.body.style.transition =
"opacity 1.2s ease";

document.body.style.opacity = "1";

}, 200);

});