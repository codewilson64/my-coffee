const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarMid = document.querySelector(".navbar-mid");
const searchIcon = document.getElementById("search");
const searchForm = document.querySelector(".search-form");

hamburgerMenu.addEventListener("click", function () {
  navbarMid.classList.toggle("active");
});

searchIcon.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  e.preventDefault();
});

// Click anywhere to close hamburger menu
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarMid.contains(e.target)) {
    navbarMid.classList.remove("active");
  }
});
document.addEventListener("click", function (e) {
  if (!searchIcon.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
