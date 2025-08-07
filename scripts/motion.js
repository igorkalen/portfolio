/*
   Developed by: Igor Kalen  
   Contact: igor@igorkalen.dev  
   Creation Date: August 5, 2025  
   Last Updated: August 7, 2025
   Version: 1.1.0
   File: motion.js
   
   ----
   © 2025 Igor Kalen. All rights reserved.
   
   This code is the exclusive property of Igor Kalen.  
   Unauthorized use, copying, distribution, or modification  
   is strictly prohibited.
   
   For internal use only on systems, services, and domains  
   officially managed by Igor Kalen.
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 200) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});