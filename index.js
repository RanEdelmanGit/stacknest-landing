document.addEventListener('DOMContentLoaded', (event) => {
  const hamMenu = document.querySelector('.ham-menu');
  const menu = document.querySelector('.menu');

  hamMenu.addEventListener('click', () => {
    // Toggle menu visibility on small screens
    const isMenuHidden = menu.classList.contains('hidden');
    if (isMenuHidden) {
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
    }
  });
});

