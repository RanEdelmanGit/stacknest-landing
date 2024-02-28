document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navDropdown = document.querySelector('.nav-dropdown');

    hamburger.addEventListener('click', () => {
        navDropdown.classList.toggle('hidden');
    });
});
