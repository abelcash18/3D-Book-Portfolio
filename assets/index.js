const book = document.querySelector(".book");
const cover = document.querySelector(".cover");
const pages = [...document.querySelectorAll(".page")];

let isOpen = false;
let currentPage = 0;

function setBookOpen(open) {
  isOpen = open;
  cover.style.transform = open ? "rotateY(-180deg)" : "rotateY(0deg)";

  pages.forEach((page, index) => {
    const angle = open ? -170 + index * 5 : 0;
    page.style.transitionDelay = open ? `${(index + 1) * 0.15}s` : `${(pages.length - index) * 0.1}s`;
    page.style.transform = `rotateY(${angle}deg)`;
  });
}

book.addEventListener("click", () => {
  currentPage = isOpen ? 0 : pages.length;
  setBookOpen(!isOpen);
});

pages.forEach((page, index) => {
  page.addEventListener("click", (event) => {
    event.stopPropagation();
    page.style.transitionDelay = "0s";
    page.style.transform = "rotateY(-180deg)";
    currentPage = Math.max(currentPage, index + 1);
  });
});

function openNextPage() {
  if (!isOpen) setBookOpen(true);
  if (currentPage >= pages.length) return;

  const page = pages[currentPage];
  page.style.transitionDelay = "0s";
  page.style.transform = "rotateY(-180deg)";
  currentPage += 1;
}

function closePreviousPage() {
  if (currentPage <= 0) {
    setBookOpen(false);
    return;
  }

  currentPage -= 1;
  const page = pages[currentPage];
  page.style.transitionDelay = "0s";
  page.style.transform = "rotateY(0deg)";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") book.click();
  if (event.key === "ArrowRight") openNextPage();
  if (event.key === "ArrowLeft") closePreviousPage();
});

document.addEventListener("mousemove", (event) => {
  const x = (window.innerWidth / 2 - event.clientX) / 40;
  const y = (window.innerHeight / 2 - event.clientY) / 40;
  book.style.rotate = `${y}deg ${x}deg`;
});

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1.2s ease";
  requestAnimationFrame(() => {
    document.body.style.opacity = "1";
  });
});
