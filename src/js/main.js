// Import necessary functions and assets
import { toggleMenu } from './toggleMenu.js';
import { login, register } from './accountForms.js';
import './imagePreview.js'; // Assuming this handles the image preview without needing exports
import myImage from './images/myImage.png'; // Correct image import

// DOM ready function to ensure elements exist when the script runs
document.addEventListener("DOMContentLoaded", function() {

    // Handle image rendering in HTML
    const imgElement = document.createElement('img');
    imgElement.src = myImage;
    imgElement.alt = "example";
    document.body.appendChild(imgElement); // Appending the image dynamically to the body (or any specific element)

    // Header adjustment for <768px
    const toggle = document.querySelector(".toggle");
    const menu = document.querySelector(".nav-menu");

    toggle.addEventListener("click", function() {
        if (menu.classList.contains("active")) {
            menu.classList.remove("active");
            // add hamburger icon
            toggle.innerHTML = `<i class="fa fa-bars"></i>`;
        } else {
            menu.classList.add("active");
            // add X icon
            toggle.innerHTML = `<i class="fa fa-times"></i>`;
        }
    });

    // Account Page, hide and show elements when required
    const logForm = document.getElementById("loginForm");
    const regForm = document.getElementById("registerForm");
    const remLog = document.getElementById("removeLog");
    const remReg = document.getElementById("removeReg");

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
    const prodImg = document.getElementById("prodImg");
    const smallImg = document.getElementsByClassName("small-img");

    if (smallImg.length > 0) {
        smallImg[0].onclick = () => prodImg.src = smallImg[0].src;
        smallImg[1].onclick = () => prodImg.src = smallImg[1].src;
        smallImg[2].onclick = () => prodImg.src = smallImg[2].src;
        smallImg[3].onclick = () => prodImg.src = smallImg[3].src;
    }

    // Set up event listeners for login and register buttons
    document.getElementById("loginButton").addEventListener("click", login);
    document.getElementById("registerButton").addEventListener("click", register);
});
