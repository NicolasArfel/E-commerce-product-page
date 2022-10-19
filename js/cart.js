let total = 0;
let price = 125.0;
let modaleActivated = false;

const cartEl = document.querySelector('.navbar__right-count');
const cartIcon = document.querySelector('.navbar__right-cart');
const modalePriceEl = document.querySelector('.modale__price');
const plusEl = document.querySelector('#add');
const minusEl = document.querySelector('#remove');
const addEl = document.querySelector('.add');

//i open/close the modale on click on "cart"
function toggleModale() {
  cartIcon.addEventListener('click', () => {
    modale.classList.toggle('isActive');
  });
}

function getTotalOfProducts() {
  countEl.textContent = total;
}

// i create a function that changes the number
// of articles and changes it into DOM
function changeArticleCount() {
  plusEl.addEventListener('click', () => {
    total++;
    getTotalOfProducts();
  });
  minusEl.addEventListener('click', () => {
    if (total < 1) {
      total = 0;
    } else {
      total--;
      if (total < 1) {
        removeClass(cartEl, 'isActive');
      }
    }
    getTotalOfProducts();
  });
}

// if i click on "add to cart" i active
// the counter into the cart in the navbar

function setActived() {
  addEl.addEventListener('click', () => {
    cartEl.textContent = total;
    if (total > 0) {
      addClass(cartEl, 'isActive');
      //create the product into the modale
      createProductInModale();
      modaleActivated = true;
    } else {
      clearBox();
      createEmptyModale();
    }
  });
}

changeArticleCount();
toggleModale();
setActived();
