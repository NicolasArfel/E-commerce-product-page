let total = 0;
let price = 125.0;
let modaleActivated = false;
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
const modaleDescription = document.querySelector('.modale__description');
const modalePriceEl = document.querySelector('.modale__price');

// add product into the modale when clicking on Add to cart
function createProductInModale() {
  modaleDescription.remove();
  const modaleDescriptionEl = document.createElement('div');
  const firstEl = document.createElement('div');
  const imgEl = new Image();
  const descriptionEl = document.createElement('div');
  const titleEl = document.createElement('h1');
  const priceEl = document.createElement('p');
  const deleteEl = document.createElement('span');
  const checkoutEl = document.createElement('button');

  titleEl.textContent = 'Fall Limited Sneakers';
  priceEl.textContent = `$${price} x ${total} $${price * total}`;
  deleteEl.classList.add('material-symbols-outlined');
  deleteEl.textContent = 'delete';
  checkoutEl.textContent = 'Checkout';

  modale.appendChild(modaleDescriptionEl);
  modaleDescriptionEl.classList.add('modale__description');
  imgEl.src = 'http://127.0.0.1:5500/images/image-product-1.jpg';
  modaleDescriptionEl.appendChild(firstEl);
  imgEl.classList.add('modale__image');
  firstEl.classList.add('modale__top');
  firstEl.appendChild(imgEl);
  firstEl.appendChild(descriptionEl);
  descriptionEl.classList.add('modale__text');
  descriptionEl.appendChild(titleEl);
  descriptionEl.appendChild(priceEl);
  firstEl.appendChild(deleteEl);
  modaleDescriptionEl.appendChild(checkoutEl);
  checkoutEl.classList.add('checkout', 'add');
  priceEl.classList.add('modale__price');
}

//i open the modale on click on "cart"

function openModale() {
  cartIcon.addEventListener('click', () => {
    modale.classList.toggle('isActive');
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
    if (modaleActivated) {
      const modalePriceEl = document.querySelector('.modale__price');
      modalePriceEl.textContent = `$${price} x ${total} $${price * total}`;
      cartEl.textContent = total;
    }
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
    if (modaleActivated) {
      const modalePriceEl = document.querySelector('.modale__price');
      modalePriceEl.textContent = `$${price} x ${total} $${price * total}`;
      cartEl.textContent = total;
    }
  });
}

// if i click on "add to cart" i active
// the counter into the cart in the navbar

function setActived() {
  addEl.addEventListener('click', () => {
    cartEl.textContent = total;
    if (total > 0) {
      cartEl.classList.add('count-actived');
      //create the product into the modale
      if (!modaleActivated) {
        createProductInModale();
        modaleActivated = true;
      }
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
