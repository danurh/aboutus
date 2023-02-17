// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// switch button
const toggle = document.querySelector(".toggle");
const indicator = document.querySelector(".indicator");
const body = document.body;
const hero = document.querySelector(".hero");
const row = document.querySelector(".row");
const love = document.querySelector(".love");
const fMeet = document.querySelector(".first-meet");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  indicator.classList.toggle("active");
  body.classList.toggle("active");
  hero.classList.toggle("active");
  row.classList.toggle("active");
  love.classList.toggle("active");
  fMeet.classList.toggle("active");
};
