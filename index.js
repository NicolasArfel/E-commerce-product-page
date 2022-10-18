let total = 0;
const countEl = document.querySelector('#counter');
const plusEl = document.querySelector('#add');
const minusEl = document.querySelector('#remove');
const cartEl = document.querySelector('.navbar__right-count');
const cartIcon = document.querySelector('.navbar__right-cart');
const addEl = document.querySelector('.add');
const largeImage = document.querySelector('.main__left-large');
const lightbox = document.querySelector('.ligth-box');
const close = document.querySelector('.close');
const modale = document.querySelector('.modale');

// add product into the modale when clicking on Add to cart

//i open the modale on click on "cart"

function openModale() {
  cartIcon.addEventListener('click', () => {
    modale.classList.toggle('isActive');
    console.log('hi');
  });
}
//i open light-box on click in the large image
function openLightbox() {
  largeImage.addEventListener('click', () => {
    lightbox.classList.add('isActive');
  });
  close.addEventListener('click', () => {
    lightbox.classList.remove('isActive');
  });
}

// i create a function that changes the number
// of articles and changes it into DOM
function changeArticleCount() {
  plusEl.addEventListener('click', () => {
    total++;
    countEl.textContent = total;
    cartEl.textContent = total;
  });
  minusEl.addEventListener('click', () => {
    if (total < 1) {
      total = 0;
    } else {
      total--;
      if (total < 1) {
        cartEl.classList.remove('count-actived');
      }
    }
    countEl.textContent = total;
    cartEl.textContent = total;
  });
}

// if i click on "add to cart" i active
// the counter into the cart in the navbar

function setActived() {
  addEl.addEventListener('click', () => {
    cartEl.textContent = total;
    if (total > 0) {
      cartEl.classList.add('count-actived');
    }
  });
}

// if i click on an small image i want it to replace
// the big one and be selected with the style "selected"
function setSelected() {
  const imgEl = document.querySelectorAll('.main__left-small-container');
  imgEl.forEach((img) => {
    img.addEventListener('click', () => {
      imgEl.forEach((img) => img.classList.remove('selected'));
      img.classList.add('selected');
    });
  });
  const images = document.querySelectorAll('.image');
  const largeImage2 = document.querySelector('.large');
  images.forEach((img) => {
    img.addEventListener('click', () => {
      let source = img.src;
      if (
        source == 'http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg'
      ) {
        largeImage.src = 'http://127.0.0.1:5500/images/image-product-3.jpg';
        largeImage2.src = 'http://127.0.0.1:5500/images/image-product-3.jpg';
      }
      if (
        source == 'http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg'
      ) {
        largeImage.src = 'http://127.0.0.1:5500/images/image-product-1.jpg';
        largeImage2.src = 'http://127.0.0.1:5500/images/image-product-1.jpg';
      }
      if (
        source == 'http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg'
      ) {
        largeImage.src = 'http://127.0.0.1:5500/images/image-product-2.jpg';
        largeImage2.src = 'http://127.0.0.1:5500/images/image-product-2.jpg';
      }
      if (
        source == 'http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg'
      ) {
        largeImage.src = 'http://127.0.0.1:5500/images/image-product-4.jpg';
        largeImage2.src = 'http://127.0.0.1:5500/images/image-product-4.jpg';
      }
    });
  });
}

setSelected();
changeArticleCount();
setActived();
openLightbox();
openModale();
