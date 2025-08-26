document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations with fallback
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1200,
            once: true,
            easing: 'ease-in-out',
            mirror: false
        });
    } else {
        console.warn('AOS library not loaded. Animations disabled.');
    }

    // Typed.js for animated name
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-name', {
            strings: ['full stack web developer', 'Full stack Desktop developer', 'Xamarin form developer cross platform app development'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            loop: true
        });
    } else {
        document.getElementById('typed-name').textContent = 'Jawad Ahmad';
        console.warn('Typed.js not loaded. Static text displayed.');
    }

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            alert(`Thank you, ${name}! Your message about "${subject}" has been sent. I'll get back to you soon at ${email}.`);
            this.reset();
        });
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(28, 37, 38, 0.95)';
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.backgroundColor = 'var(--dark-bg)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Image fallback
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/600x400?text=Image+Not+Found';
            this.alt = 'Image not available';
            this.style.objectFit = 'contain';
            this.style.backgroundColor = '#f5f5f5';
            this.style.padding = '1rem';
        };
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        const scrollPosition = window.pageYOffset;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Ensure text visibility on load
    document.querySelectorAll('.card-title, .card-text, .section-title').forEach(element => {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
    });
});