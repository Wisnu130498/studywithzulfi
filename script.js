/* ======================
   NAVBAR
====================== */

const navbarToggle = document.getElementById("navbar-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

// OPEN / CLOSE MENU
navbarToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("active");

    navbarToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navbarToggle.setAttribute("aria-expanded", "false");
    });
});