// Import necessary functions
import { toggleMenu } from './toggleMenu.js';
import { login, register } from './accountForms.js';
import './imagePreview.js'; // Assuming this handles the image preview without needing exports

// Header adjustment for <768px
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
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

// Account Page, hide and show elements when required
var logForm = document.getElementById("loginForm");
var regForm = document.getElementById("registerForm");
var remLog = document.getElementById("removeLog");
var remReg = document.getElementById("removeReg");

function login() {
    remLog.style.display = "none";
    remReg.style.display = "block";
    logForm.style.display = "flex";
    regForm.style.display = "none";
}

function register() {
    remReg.style.display = "none";
    remLog.style.display = "block";
    regForm.style.display = "flex";
    logForm.style.display = "none";
}

// Preview images for the same product slider
var prodImg = document.getElementById("prodImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function () {
    prodImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    prodImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    prodImg.src = smallImg[2].src; // corrected here
}
smallImg[3].onclick = function () {
    prodImg.src = smallImg[3].src;
}

// Set up event listeners for login and register buttons
document.getElementById("loginButton").addEventListener("click", login);
document.getElementById("registerButton").addEventListener("click", register);
