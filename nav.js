document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('nav');
    const body = document.body;

    // Toggle the menu when the hamburger is clicked
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click event from bubbling to the body
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.style.overflow = navbar.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close the menu when clicking anywhere outside the menu
    document.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            hamburger.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // Prevent closing the menu when clicking inside it
    navbar.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from propagating to the body
    });
});
