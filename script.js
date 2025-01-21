let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon to cross
    navbar.classList.toggle('active'); // Show/hide navbar
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon
    navbar.classList.toggle('active'); // Show/hide navbar
};

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentNode;
        
        // Toggle the active class
        faqItem.classList.toggle('active');
        
        // Collapse other open answers
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle intersection
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }

    // Options for the observer (which part of the item is in view)
    const observerOptions = {
        threshold: 0.1
    };

    // Creating an observer
    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Selecting all elements that should be animated on scroll
    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });

    // Selecting all elements with image slide-in animation
    document.querySelectorAll('.image-slide').forEach(element => {
        observer.observe(element);
    });

    // Selecting all elements with text fade-in animation
    document.querySelectorAll('.text-fade').forEach(element => {
        observer.observe(element);
    });
});
