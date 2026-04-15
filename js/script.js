// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.textContent = navLinks.classList.contains('active') ? 'Close' : 'Menu';
    });

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.textContent = 'Menu';
        });
    });
});
