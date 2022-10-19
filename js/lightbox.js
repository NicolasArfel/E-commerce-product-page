const largeImage = document.querySelector('.main__left-large');
const closeEl = document.querySelector('.close');
const lightbox = document.querySelector('.ligth-box');

//i open light-box on click in the large image
function openLightbox() {
  largeImage.addEventListener('click', () => {
    addClass(lightbox, 'isActive');
  });
  closeEl.addEventListener('click', () => {
    removeClass(lightbox, 'isActive');
  });
}

openLightbox();
