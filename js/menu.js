const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
});

nav.addEventListener("click", function () {
    nav.classList.remove("open");
});