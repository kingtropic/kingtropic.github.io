// ================================================================
// LOADER
// ================================================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => loader.classList.add('hidden'), 400);
    }
});

// ================================================================
// MOBILE MENU
// ================================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isActive = navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isActive);
    });
}

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ================================================================
// SMOOTH SCROLL
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({ top: targetPos, behavior: 'smooth' });
        }
    });
});

// ================================================================
// NAVIGATION ACTIVE STATE & SCROLL EFFECTS
// ================================================================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');
const nav = document.querySelector('nav');
const backToTop = document.getElementById('backToTop');

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            // Nav background
            if (nav) {
                nav.classList.toggle('scrolled', scrollY > 50);
            }

            // Back to top
            if (backToTop) {
                backToTop.classList.toggle('visible', scrollY > 400);
            }

            // Active section
            let current = '';
            const offset = 120;
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollY + offset >= top && scrollY + offset < top + height) {
                    current = section.getAttribute('id');
                }
            });

            navLinksAll.forEach((link) => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + current);
            });

            ticking = false;
        });
        ticking = true;
    }
});

// ================================================================
// BACK TO TOP
// ================================================================
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ================================================================
// SCROLL REVEAL
// ================================================================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
    }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ================================================================
// CONSOLE
// ================================================================
console.log('╔═══════════════════════════════════════╗');
console.log('║   GAJITHA NANAYAKKARA                ║');
console.log('║   Robotics Engineer & Researcher     ║');
console.log('║   Built with ❤️ & GitHub Pages       ║');
console.log('╚═══════════════════════════════════════╝');
