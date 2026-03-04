document.addEventListener('DOMContentLoaded', function () {

    // =============================================
    // PRELOADER
    // =============================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('done');
                setTimeout(() => preloader.remove(), 600);
            }, 800);
        });
        // Fallback: hide after 4s no matter what
        setTimeout(() => {
            if (preloader && !preloader.classList.contains('done')) {
                preloader.classList.add('done');
                setTimeout(() => preloader.remove(), 600);
            }
        }, 4000);
    }

    // Also handle old preloader class for sub-pages
    const oldPreloader = document.querySelector('.preloader:not(#preloader)');
    if (oldPreloader) {
        window.addEventListener('load', () => {
            oldPreloader.classList.add('fade-out');
            setTimeout(() => { oldPreloader.style.display = 'none'; }, 500);
        });
    }

    // =============================================
    // CUSTOM CURSOR
    // =============================================
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (cursorDot && cursorRing && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        // Smooth ring follow
        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover states
        const hoverTargets = document.querySelectorAll('a, button, .recipe-card, .region-card, .seasonal-card, .tilt-card, input');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hovering');
                cursorRing.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hovering');
                cursorRing.classList.remove('hovering');
            });
        });
    }

    // =============================================
    // NAVBAR
    // =============================================
    const navbar = document.getElementById('navbar') || document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        });
    }

    // Mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    // =============================================
    // HERO BACKGROUND SLIDER
    // =============================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 6000);
    }

    // =============================================
    // TYPED TEXT EFFECT
    // =============================================
    const typedEl = document.getElementById('typed-text');
    if (typedEl) {
        const words = ['World Cuisine', 'Italian Cooking', 'Japanese Flavors', 'Thai Spices', 'Mexican Heat', 'French Elegance', 'Indian Richness'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typeSpeed = 100;

        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                typedEl.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typeSpeed = 50;
            } else {
                typedEl.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typeSpeed = 120;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2500;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 400;
            }

            setTimeout(type, typeSpeed);
        }
        setTimeout(type, 1200);
    }

    // =============================================
    // SCROLL REVEAL ANIMATIONS
    // =============================================
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for sibling elements
                    const parent = entry.target.parentElement;
                    const siblings = parent ? parent.querySelectorAll('.reveal-up, .reveal-left, .reveal-right') : [];
                    let delay = 0;
                    siblings.forEach((sib, i) => {
                        if (sib === entry.target) delay = i * 100;
                    });
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, Math.min(delay, 400));
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // =============================================
    // ANIMATED COUNTERS
    // =============================================
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.target);
                    const duration = 2000;
                    const start = performance.now();

                    function updateCounter(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);

                        if (target >= 10000) {
                            el.textContent = (current / 1000).toFixed(current < target ? 1 : 0) + 'K';
                        } else {
                            el.textContent = current.toLocaleString();
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        }
                    }
                    requestAnimationFrame(updateCounter);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => counterObserver.observe(el));
    }

    // =============================================
    // RECIPE CAROUSEL
    // =============================================
    const carousel = document.getElementById('recipe-carousel');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');

    if (carousel && prevBtn && nextBtn && dotsContainer) {
        const cards = carousel.querySelectorAll('.recipe-card');
        const cardWidth = 348; // card width + gap
        const totalCards = cards.length;

        // Create dots
        const visibleCards = Math.floor(carousel.clientWidth / cardWidth) || 1;
        const totalDots = Math.max(1, totalCards - visibleCards + 1);
        for (let i = 0; i < Math.min(totalDots, 6); i++) {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => {
                carousel.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
            });
            dotsContainer.appendChild(dot);
        }

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        // Update dots on scroll
        carousel.addEventListener('scroll', () => {
            const scrollPos = carousel.scrollLeft;
            const activeIndex = Math.round(scrollPos / cardWidth);
            dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === Math.min(activeIndex, dotsContainer.children.length - 1));
            });
        });
    }

    // =============================================
    // SAVE RECIPE (Bookmark)
    // =============================================
    const toast = document.getElementById('recipe-toast');
    document.querySelectorAll('.save-recipe').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const icon = btn.querySelector('i');
            btn.classList.toggle('saved');

            if (btn.classList.contains('saved')) {
                icon.classList.replace('far', 'fas');
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 3000);
                }
            } else {
                icon.classList.replace('fas', 'far');
            }
        });
    });

    // =============================================
    // BACK TO TOP with progress
    // =============================================
    const backToTopBtn = document.getElementById('back-to-top') || document.querySelector('.back-to-top');
    const progressCircle = document.querySelector('.progress-ring-circle');

    if (backToTopBtn) {
        const circumference = progressCircle ? 2 * Math.PI * 20 : 0;
        if (progressCircle) {
            progressCircle.style.strokeDasharray = circumference;
            progressCircle.style.strokeDashoffset = circumference;
        }

        window.addEventListener('scroll', () => {
            const show = window.scrollY > 400;
            backToTopBtn.classList.toggle('visible', show);

            if (progressCircle) {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = scrollTop / docHeight;
                progressCircle.style.strokeDashoffset = circumference - (progress * circumference);
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =============================================
    // HERO SCROLL BUTTON
    // =============================================
    const heroScroll = document.getElementById('hero-scroll') || document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', () => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        });
    }

    // =============================================
    // TILT EFFECT ON CARDS
    // =============================================
    if (window.innerWidth > 768) {
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // =============================================
    // PARALLAX ON SPOTLIGHT
    // =============================================
    const spotlightBg = document.querySelector('.spotlight-bg');
    if (spotlightBg && window.innerWidth > 768) {
        window.addEventListener('scroll', () => {
            const section = spotlightBg.parentElement;
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.3;
                const yPos = -(rect.top * speed);
                spotlightBg.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    // =============================================
    // NEWSLETTER FORM
    // =============================================
    const newsletterForm = document.getElementById('newsletter-form') || document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input[type="email"]');
            if (input && input.value.trim()) {
                const btn = newsletterForm.querySelector('button');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> <span>Subscribed!</span>';
                btn.style.background = 'var(--primary)';
                input.value = '';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                }, 3000);
            }
        });
    }

    // =============================================
    // SEARCH
    // =============================================
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = searchContainer.querySelector('.search-input');
            if (input && input.value.trim()) {
                window.location.href = `recipes.html?search=${encodeURIComponent(input.value.trim())}`;
            }
        });
    }

    // =============================================
    // SMOOTH ANCHOR LINKS
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // =============================================
    // DUPLICATE TESTIMONIAL CARDS FOR INFINITE SCROLL
    // =============================================
    const testimonialTrack = document.getElementById('testimonial-track');
    if (testimonialTrack) {
        const cards = testimonialTrack.innerHTML;
        testimonialTrack.innerHTML = cards + cards; // duplicate for infinite loop
    }

    // =============================================
    // COOKIE BANNER
    // =============================================
    if (!document.cookie.includes('cookies_accepted=true')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.style.cssText = `
            position: fixed; bottom: 0; left: 0; right: 0;
            background: rgba(26,60,52,0.95); backdrop-filter: blur(12px);
            color: #fff; padding: 18px 30px;
            display: flex; align-items: center; justify-content: space-between;
            gap: 20px; z-index: 9999;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.15);
        `;
        banner.innerHTML = `
            <p style="margin:0;font-size:0.85rem;opacity:0.85;font-weight:300;">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button class="btn btn-primary" style="white-space:nowrap;padding:10px 24px;font-size:0.8rem;cursor:pointer;" onclick="
                const d=new Date();d.setTime(d.getTime()+30*24*60*60*1000);
                document.cookie='cookies_accepted=true;expires='+d.toUTCString()+';path=/';
                this.parentElement.style.opacity='0';
                setTimeout(()=>this.parentElement.remove(),300);
            ">Accept</button>
        `;
        document.body.appendChild(banner);
    }

    // =============================================
    // FOOTER YEAR
    // =============================================
    const footerCopyright = document.querySelector('.footer-bottom p');
    if (footerCopyright) {
        footerCopyright.innerHTML = footerCopyright.innerHTML.replace('2025', new Date().getFullYear());
    }

});
