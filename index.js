
// document.addEventListener('DOMContentLoaded', (event) => {
//   const hamMenu = document.querySelector('.ham-menu');
//   const menu = document.querySelector('.menu');

//   hamMenu.addEventListener('click', () => {
//     // The menu is hidden by default on small screens, so we toggle it
//     // const isMdScreen = window.matchMedia('(max-width: 768px)').matches; 
//     const isMenuHidden = menu.classList.contains('hidden');
//     if (isMenuHidden) {
//       menu.classList.remove('hidden');
//       menu.classList.add('max-md:flex-col');
//       console.log('menu is hidden');
//     } else {
//       menu.classList.remove('max-md:flex');
//       menu.classList.add('hidden');
//       console.log('menu is shown');
//     }
//   });
// });


document.addEventListener('DOMContentLoaded', (event) => {
  const hamMenu = document.querySelector('.ham-menu');
  const menu = document.querySelector('.menu');

  hamMenu.addEventListener('click', () => {
    // Toggle menu visibility on small screens
    const isMenuHidden = menu.classList.contains('hidden');
    if (isMenuHidden) {
      menu.classList.remove('hidden');
      console.log('Menu is now shown');
    } else {
      menu.classList.add('hidden');
      console.log('Menu is now hidden');
    }
  });
});

