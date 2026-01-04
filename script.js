document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('.mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');

            // Toggle icon
            const icon = btn.querySelector('span');
            if (icon) {
                if (menu.classList.contains('flex')) {
                    icon.textContent = 'close';
                } else {
                    icon.textContent = 'menu';
                }
            }
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                const icon = btn.querySelector('span');
                if (icon) icon.textContent = 'menu';
            });
        });
    }

    // Typing Effect Logic
    const textElement = document.querySelector('.typewriter');
    // Disable CSS animation if present so JS can take over
    if (textElement) {
        textElement.style.animation = 'none';
        textElement.style.width = 'auto';
        textElement.style.borderRight = '3px solid #0ea5e9'; // retain cursor
    }

    const texts = ["Software Developer", "TY B.Tech Student", "Tech Enthusiast"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        if (!textElement) return;

        const currentText = texts[textIndex];

        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    if (textElement) type();

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.glass-card, .glass-panel, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
