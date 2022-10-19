const burgerMenu = document.querySelector('.navbar__menu');
const burgerIcon = document.querySelector('.navbar__left-burger');
const closeIcon = document.querySelector('.navbar__left-close');
const links = document.querySelectorAll('.navbar__left-links');

function openMenuBurger() {
  burgerIcon.addEventListener('click', () => {
    burgerMenu.classList.add('open');
  });
}

function remove(element) {
  element.addEventListener('click', () => {
    burgerMenu.classList.remove('open');
  });
}
remove(closeIcon);
links.forEach((link) => {
  remove(link);
});

openMenuBurger();
