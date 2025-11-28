// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const answer = this.nextElementSibling;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth scrolling for internal links
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

// Scroll animations
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

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Enhanced button interactions
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
        this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(-2px) scale(0.98)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
});

// Problem card hover effects
document.querySelectorAll('.problem-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Benefit items animation
document.querySelectorAll('.benefit-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
        this.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
    });
});

// Testimonial cards staggered animation
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Social proof counter (if added to page)
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(counter, target);
                    observer.unobserve(counter);
                }
            });
        });
        observer.observe(counter);
    });
}

// Parallax effect disabled: keep header fixed at the top
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        header.style.transform = 'translateY(0)';
    }
});

// Typing effect for headline (optional enhancement)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Enhanced form validation (if forms are added)
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
    return re.test(phone);
}

// Loading animation for CTA button
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Prevent default if it's a form submission
        if (this.type === 'submit') {
            e.preventDefault();
        }
        
        // Add loading state
        const originalText = this.textContent;
        this.textContent = 'PROCESSANDO...';
        this.disabled = true;
        this.style.background = 'linear-gradient(45deg, #95a5a6, #bdc3c7)';
        
        // Simulate processing time
        setTimeout(() => {
            this.textContent = originalText;
            this.disabled = false;
            this.style.background = 'linear-gradient(45deg, var(--gold), #f1c40f)';
            
            // Track conversion
            trackConversion('Purchase');
            
            // Redirect or show success message
            // window.location.href = 'https://pagamento.seusite.com';
            alert('Redirecionando para a página de pagamento...');
        }, 2000);
    });
});


// Track conversions and events
function trackConversion(event) {
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', event);
    }
    
    // Google Analytics (if added)
    if (typeof gtag !== 'undefined') {
        gtag('event', event);
    }
    
    // Custom event tracking
    console.log('Conversion tracked:', event);
}

// Page load animations
window.addEventListener('load', function() {
    // Animate header elements
    const header = document.querySelector('.header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            header.style.transition = 'all 1s ease';
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Initialize counters if they exist
    initCounters();
    
    // Track page view
    trackConversion('PageView');
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--gold), var(--accent));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add smooth reveal for mobile
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // Simpler animations for mobile
        document.querySelectorAll('.problem-card, .benefit-item, .testimonial-card').forEach(el => {
            el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        });
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const debouncedScroll = debounce(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', debouncedScroll);