// ================================================================
// MOBILE HAMBURGER MENU
// ================================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ================================================================
// SMOOTH SCROLLING FOR ALL ANCHOR LINKS
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // ignore empty links
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ================================================================
// CONSOLE WELCOME (Technical touch)
// ================================================================
console.log("╔═══════════════════════════════════════╗");
console.log("║   GAJITHA NANAYAKKARA                ║");
console.log("║   Robotics Engineer & Researcher     ║");
console.log("║   Built with ❤️ & GitHub Pages       ║");
console.log("╚═══════════════════════════════════════╝");

// ================================================================
// (Optional) INTERSECTION OBSERVER FOR FUTURE ANIMATIONS
// ================================================================
// You can uncomment this later if you want to add fade-in effects.
// const cards = document.querySelectorAll('.project-card, .area-card, .timeline-year');
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.opacity = 1;
//             entry.target.style.transform = 'translateY(0)';
//         }
//     });
// }, { threshold: 0.1 });
// cards.forEach(card => {
//     card.style.opacity = 0;
//     card.style.transform = 'translateY(20px)';
//     card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//     observer.observe(card);
// });
