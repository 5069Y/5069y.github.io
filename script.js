const navbar = document.getElementById("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        navbar.classList.add("visible");
    } else {
        navbar.classList.remove("visible");
    }
});

const opeenButton = document.getElementById("menu_open");
const closeButton = document.getElementById("menu_close");
const sideMenu = document.getElementById("side_menu");
const contentBox = document.getElementById("menu_icon");
opeenButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    contentBox.classList.toggle("pushed");
});
