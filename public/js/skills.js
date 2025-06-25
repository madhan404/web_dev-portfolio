document.addEventListener('DOMContentLoaded', function() {
    // Animate skills when they come into view
    const skills = document.querySelectorAll('.skill');
    
    // Set initial state
    skills.forEach(skill => {
        const level = skill.getAttribute('data-level');
        const levelBar = skill.querySelector('.skill__level-bar');
        if (levelBar) {
            levelBar.style.width = '0%';
        }
    });

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skill = entry.target;
                const level = skill.getAttribute('data-level');
                const levelBar = skill.querySelector('.skill__level-bar');
                
                if (levelBar) {
                    // Add animation class
                    skill.classList.add('animate');
                    
                    // Set the width to the specified level
                    setTimeout(() => {
                        levelBar.style.width = level + '%';
                        levelBar.style.opacity = '1';
                    }, 100);
                    
                    // Unobserve after animation
                    observer.unobserve(skill);
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe each skill
    skills.forEach(skill => {
        observer.observe(skill);
    });
});
