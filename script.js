const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarMid = document.querySelector(".navbar-mid");

hamburgerMenu.addEventListener("click", function () {
  navbarMid.classList.toggle("active");
});
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarMid.contains(e.target)) {
    navbarMid.classList.remove("active");
  }
});
