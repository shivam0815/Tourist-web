'use strict';

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const header = document.querySelector("[data-header]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("active");
});



/**
 * show go top btn when scroll window to 500px
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500 ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

let change = document.getElementById('change');
    let images = [
        './assets/images/1.png', './assets/images/2.png', '3.png', './assets/images/4.png', 
        '5.png', '6.png'
    ];
    
    setInterval(function () {
        let random = Math.floor(Math.random() * images.length);
        change.src = images[random];
    }, 1000);
