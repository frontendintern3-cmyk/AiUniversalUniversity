const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

menuBtn.addEventListener("click", () => {
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  } else {
    mobileMenu.style.display = "block";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  }
});
const playBtn = document.getElementById("playBtn");
const thumbnail = document.querySelector(".video-thumbnail");
const iframe = document.getElementById("youtubeVideo");

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