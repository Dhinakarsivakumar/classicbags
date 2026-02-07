// Product Variant Selection
document.addEventListener('DOMContentLoaded', () => {
    // Color button functionality
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all color buttons in same variant
            const variantButtons = button.parentElement.querySelectorAll('.color-btn');
            variantButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
        });
    });
    
    // Variant select functionality
    const variantSelects = document.querySelectorAll('.variant-select');
    variantSelects.forEach(select => {
        select.addEventListener('change', () => {
            // You can add functionality here when variant changes
            console.log('Variant changed to:', select.value);
        });
    });
});

// Image Gallery Function
function changeImage(thumbnail, imageSrc) {
    // Remove active class from all thumbnails in same gallery
    const thumbnails = thumbnail.parentElement.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    
    // Add active class to clicked thumbnail
    thumbnail.classList.add('active');
    
    // Change main image
    const mainImage = thumbnail.closest('.product-gallery').querySelector('.product-img');
    mainImage.src = `images/${imageSrc}`;
}

// Fullscreen Image Viewer
function openFullscreen(imageSrc) {
    // Create fullscreen overlay
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <div class="fullscreen-content">
            <img src="images/${imageSrc}" alt="Fullscreen Image" class="fullscreen-img">
            <button class="fullscreen-close" onclick="closeFullscreen()">&times;</button>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(overlay);
    
    // Add click to close
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeFullscreen();
        }
    });
    
    // Add escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreen();
        }
    });
}

function closeFullscreen() {
    const overlay = document.querySelector('.fullscreen-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Product Category Filter
const tabBtns = document.querySelectorAll('.tab-btn');
const productItems = document.querySelectorAll('.product-item');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-category');
        
        productItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                // Add fade-in animation
                item.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const whatsappMessage = `Hello Classic Bags!%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappNumber = '919843275685'; // Updated with your new number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('Message sent! Redirecting to WhatsApp...', 'success');
    
    // Reset form
    contactForm.reset();
});

// Notification System
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#25D366' : '#8B4513'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add slide animations to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
window.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('section, .product-item, .design-item');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
    });
    
    // Add reveal styles
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(revealStyle);
});

window.addEventListener('scroll', revealOnScroll);

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Active Navigation Link Highlight
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.fontWeight = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#8B4513';
            link.style.fontWeight = '600';
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Image Lazy Loading Simulation (for placeholders)
function lazyLoadImages() {
    const placeholders = document.querySelectorAll('[class*="placeholder"]');
    
    placeholders.forEach(placeholder => {
        // Add loading animation
        placeholder.style.background = 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)';
        placeholder.style.backgroundSize = '200% 100%';
        placeholder.style.animation = 'loading 1.5s infinite';
        
        // Simulate image loading
        setTimeout(() => {
            placeholder.style.animation = '';
            placeholder.style.background = '';
        }, 1000);
    });
}

// Add loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    @keyframes loading {
        0% {
            background-position: 200% 0;
        }
        100% {
            background-position: -200% 0;
        }
    }
`;
document.head.appendChild(loadingStyle);

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    revealOnScroll();
    highlightActiveSection();
});

// WhatsApp Button Animation
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    // Add pulse animation
    whatsappFloat.style.animation = 'pulse 2s infinite';
    
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% {
                box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
            }
            50% {
                box-shadow: 0 10px 40px rgba(37, 211, 102, 0.5);
            }
            100% {
                box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
            }
        }
    `;
    document.head.appendChild(pulseStyle);
}

// Form Validation Enhancement
function validateForm() {
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Real-time validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.length < 2) {
            nameInput.style.borderColor = '#ff6b6b';
        } else {
            nameInput.style.borderColor = '#25D366';
        }
    });
    
    phoneInput.addEventListener('input', () => {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phoneInput.value) || phoneInput.value.length < 10) {
            phoneInput.style.borderColor = '#ff6b6b';
        } else {
            phoneInput.style.borderColor = '#25D366';
        }
    });
    
    messageInput.addEventListener('input', () => {
        if (messageInput.value.length < 10) {
            messageInput.style.borderColor = '#ff6b6b';
        } else {
            messageInput.style.borderColor = '#25D366';
        }
    });
}

// Initialize form validation
validateForm();

// Performance Optimization - Debounce scroll events
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
window.addEventListener('scroll', debounce(revealOnScroll, 10));
window.addEventListener('scroll', debounce(highlightActiveSection, 10));

// Error Handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    showNotification('Something went wrong. Please refresh the page.', 'error');
});

// Console welcome message
console.log('%c👜 Classic Bags Portfolio', 'font-size: 20px; font-weight: bold; color: #8B4513;');
console.log('%cPremium handbags and accessories showcase', 'font-size: 14px; color: #A0522D;');
