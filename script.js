document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        const isOpen = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Open navigation');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetSelector = this.getAttribute('href');
            e.preventDefault();

            if (targetSelector === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            const target = document.querySelector(targetSelector);
            if (!target) return;

            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});
