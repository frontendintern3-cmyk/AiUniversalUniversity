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