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
            if (menu.classList.contains('flex')) {
                icon.textContent = 'close';
            } else {
                icon.textContent = 'menu';
            }
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                btn.querySelector('span').textContent = 'menu';
            });
        });
    }

    // Typing Effect Logic
    const textElement = document.querySelector('.typewriter');
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

        // Adjust animation logic to match the cursor blink
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
            textElement.style.borderRight = '3px solid #0ea5e9'; // Keep cursor blinking
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next word
        } else {
            // Ensure cursor is visible during typing
            textElement.style.borderRight = '3px solid #0ea5e9';
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    if (textElement) type();

    // Scroll Reveal (Optional enhancement for the new design)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.glass-card, .project-card, .section-title');
    animatedElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
