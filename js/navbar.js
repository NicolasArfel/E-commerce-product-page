//DOM Elements
const burgerMenu = document.querySelector('.navbar__menu');
const burgerIcon = document.querySelector('.navbar__left-burger');
const closeIcon = document.querySelector('.navbar__left-close');
const links = document.querySelectorAll('.navbar__left-links');

//open burger menu
function openMenuBurger() {
  burgerIcon.addEventListener('click', () => {
    addClass(burgerMenu, 'isOpen');
  });
}

// close burger menu
function closeMenuBurger() {
  closeIcon.addEventListener('click', () => {
    removeClass(burgerMenu, 'isOpen');
  });
  links.forEach((link) => {
    link.addEventListener('click', () => {
      removeClass(burgerMenu, 'isOpen');
    });
  });
}

openMenuBurger();
closeMenuBurger();
