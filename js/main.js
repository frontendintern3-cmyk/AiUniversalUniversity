const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  });
});

const playBtn = document.getElementById("playBtn");
const thumbnail = document.querySelector(".video-thumbnail");
const iframe = document.getElementById("youtubeVideo");
const fixedFooterBar = document.querySelector(".fixed-footer-bar");

function updateFixedFooterBar() {
  if (!fixedFooterBar) {
    return;
  }

  fixedFooterBar.classList.toggle("is-visible", window.scrollY > 40);
}

window.addEventListener("scroll", updateFixedFooterBar, { passive: true });
updateFixedFooterBar();

playBtn.addEventListener("click", playVideo);
thumbnail.addEventListener("click", playVideo);

function playVideo() {

  // Hide thumbnail
  thumbnail.style.display = "none";

  // Hide play button
  playBtn.style.display = "none";

  // Play youtube video
  iframe.src += "&autoplay=1";
}

const whyTopWrapper = document.getElementById("whyTopWrapper");
const whyNextBtn = document.querySelector(".why-next");
const whyPrevBtn = document.querySelector(".why-prev");

if (whyTopWrapper && whyNextBtn && whyPrevBtn) {
  const getStep = () => whyTopWrapper.clientWidth;

  whyNextBtn.addEventListener("click", () => {
    whyTopWrapper.scrollBy({ left: getStep(), behavior: "smooth" });
  });

  whyPrevBtn.addEventListener("click", () => {
    whyTopWrapper.scrollBy({ left: -getStep(), behavior: "smooth" });
  });
}