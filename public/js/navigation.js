document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav__menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 991) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && window.innerWidth <= 991) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Prevent event propagation on mobile menu
    navMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Add active class to current section in navigation
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 200;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(`.nav__link[href*=${sectionId}]`).classList.add('active');
            } else {
                document.querySelector(`.nav__link[href*=${sectionId}]`).classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
});
