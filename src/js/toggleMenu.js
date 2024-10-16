// toggleMenu.js
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

export function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // add hamburger icon
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    } else {
        menu.classList.add("active");
        // add X icon
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}

toggle.addEventListener("click", toggleMenu, false);
