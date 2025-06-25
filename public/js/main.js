// DOM Elements
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav__link');
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const backToTopBtn = document.querySelector('.back-to-top');
const preloader = document.querySelector('.preloader');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.style.overflow = 'auto';
        
        // Trigger animations after preloader
        setTimeout(() => {
            preloader.style.display = 'none';
            animateOnScroll();
        }, 500);
    }, 1500);
});

// Theme Toggle
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

if (currentTheme === 'light') {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Mobile Navigation
navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});

// Sticky Header
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > header.offsetHeight) {
        // Scroll down
        header.style.transform = `translateY(-${header.offsetHeight}px)`;
    } else {
        // Scroll up
        header.style.transform = 'translateY(0)';
        header.classList.add('scrolled');
    }
    
    lastScroll = currentScroll;
    
    // Show/hide back to top button
    if (window.pageYOffset > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Back to Top Button
backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// // Form Submission
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(this);
//         const name = formData.get('name');
//         const email = formData.get('email');
//         const subject = formData.get('subject');
//         const message = formData.get('message');
        
//         // Simple validation
//         if (!name || !email || !subject || !message) {
//             showAlert('Please fill in all fields', 'error');
//             return;
//         }
        
//         // Here you would typically send the form data to a server
//         // For this example, we'll just show a success message
//         showAlert('Message sent successfully! I\'ll get back to you soon.', 'success');
//         this.reset();
//     });
// }

// Show Alert Message
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.textContent = message;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 5 seconds
    setTimeout(() => {
        alertDiv.classList.add('fade-out');
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }, 5000);
}

// Set current year in footer
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Add fade-in class to project cards with delay
    document.querySelectorAll('.project__card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Add animation to skills progress bars
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill__progress');
    
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Intersection Observer for skills animation
const skillsSection = document.querySelector('.skills');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

if (skillsSection) {
    observer.observe(skillsSection);
}

// Add animation to timeline items
const timelineItems = document.querySelectorAll('.timeline__item');
timelineItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
    item.classList.add('fade-in');
});
