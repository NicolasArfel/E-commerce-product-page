function openMenuBurger() {
  const burgerIcon = document.querySelector('.navbar__left-burger');
  burgerIcon.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.navbar__menu');
    burgerMenu.classList.add('open');
    console.log('hello');
  });
}
function closeMenuBurger() {
  const closeIcon = document.querySelector('.navbar__left-close');
  closeIcon.addEventListener('click', () => {
    const burgerMenu = document.querySelector('.navbar__menu');
    burgerMenu.classList.remove('open');
    console.log('hello');
  });
}

openMenuBurger();
closeMenuBurger();
