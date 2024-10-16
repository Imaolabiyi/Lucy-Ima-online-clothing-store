function toggleNavigationMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // Add hamburger icon
        toggle.innerHTML = `<i class="fa fa-bars"></i>`;
    } else {
        menu.classList.add("active");
        // Add X icon
        toggle.innerHTML = `<i class="fa fa-times"></i>`;
    }
}
toggle.addEventListener("click", toggleNavigationMenu, false);
