'use strict';

/* navbar */
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i=0; i< elemArr.length; i++){
    elemArr[i].addEventListener("click",function(){
        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
    })
}

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

navbarLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        
        // Force close the navbar
        navbar.classList.remove('active');
        overlay.classList.remove('active');
        
        const href = this.getAttribute('href');
        
        // If it's the home link, just scroll to top
        if (href === '#' || href === '#home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // For other links, scroll to section
            const targetSection = document.querySelector(href);
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


/**
 * header & go-to-top-btn active 
 * when window scroll down to 400px
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-do-top]");

window.addEventListener("scroll", function (){
    if(this.window.scrollY >= 400){
        header.classList.add("active");
        goTopBtn.classList.add("active");
    }else{
        header.classList.remove("active"); 
        goTopBtn.classList.remove("active");
    }
})