// This file will contain your custom JavaScript.

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// You can add more interactive JavaScript here.
// For example, if you have a "Read More" button or a contact form.

// To trigger Animate.css animations on scroll, you typically use a library like WOW.js.
// Make sure you've included WOW.js in your HTML as shown in the HTML section.
// The initialization `new WOW().init();` is usually sufficient for most cases.

// If you want custom animations or more complex interactions,
// you might use plain JavaScript or a library like GSAP.

// Example: Simple animation for the "FIJI" brand on scroll (if not using Animate.css for this)
// window.addEventListener('scroll', function() {
//     const navbarBrand = document.querySelector('.navbar-brand');
//     if (window.scrollY > 50) {
//         navbarBrand.classList.add('animate__swing'); // Example animate.css class
//     } else {
//         navbarBrand.classList.remove('animate__swing');
//     }
// });