// START OF FILE: script.js

document.addEventListener("DOMContentLoaded", () => {
    // ======== 1. Mobile Menu Toggle ========
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  
    // ======== 2. Dynamic Year in Footer ========
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
    
    // ======== 3. Animate on Scroll (Intersection Observer) ========
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });
  
    // Observe all elements with the class 'section-title', etc.
    // We will add a general class like 'fade-in' in CSS and apply it to elements
    const animatedElements = document.querySelectorAll('.section-title, .category-card, .product-card, .feature-item');
    animatedElements.forEach(el => observer.observe(el));
  
  });
  
  // We can add more interactivity later, like a "scroll-to-top" button
  // or handling form submissions with AJAX.
  
  // END OF FILE: script.js