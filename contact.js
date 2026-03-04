document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const contactForm = document.getElementById('contactForm');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const contactModal = document.getElementById('contact-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const newsletterForm = document.querySelector('.newsletter-form');

    // Initialize
    function init() {
        setupEventListeners();
    }

    // Setup event listeners
    function setupEventListeners() {
        // FAQ accordion functionality
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.closest('.faq-item');
                const isActive = faqItem.classList.contains('active');

                // Close all FAQs
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Toggle current one
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // Contact form submission
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // In a real app, you would send the form data to a server
                // Here we just show the success modal
                contactModal.classList.add('active');
                
                // Reset form
                this.reset();
            });
        }

        // Close modal
        modalCloseBtn.addEventListener('click', function() {
            contactModal.classList.remove('active');
        });

        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });

        // Newsletter form
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                if (emailInput.value.trim() !== '') {
                    alert(`Thank you for subscribing with ${emailInput.value}!`);
                    emailInput.value = '';
                }
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offset = 80; // Adjust for fixed header
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    } else {
                        window.location.hash = targetId;
                    }
                }
            });
        });
    }

    // Initialize the page
    init();
});