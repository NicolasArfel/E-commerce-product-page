const countEl = document.querySelector('#counter');
const modale = document.querySelector('.modale');
const modaleDescription = document.querySelector('.modale__description');
const modaleContainer = document.querySelector('.modale__container');

function createEmptyModale() {
  const modaleDescriptionEl = document.createElement('div');
  modaleContainer.appendChild(modaleDescriptionEl);
  modaleDescriptionEl.classList.add('modale__description');
  const textEl = document.createElement('p');
  textEl.textContent = 'Your cart is Empty';
  modaleDescriptionEl.appendChild(textEl);
}

// add product into the modale when clicking on Add to cart
function createProductInModale() {
  clearBox();
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

  modaleContainer.appendChild(modaleDescriptionEl);
  modaleDescriptionEl.appendChild(firstEl);
  firstEl.appendChild(imgEl);
  firstEl.appendChild(descriptionEl);
  firstEl.appendChild(deleteEl);
  descriptionEl.appendChild(titleEl);
  descriptionEl.appendChild(priceEl);
  modaleDescriptionEl.appendChild(checkoutEl);

  modaleDescriptionEl.classList.add('modale__description');
  imgEl.src = 'http://127.0.0.1:5500/images/image-product-1.jpg';
  imgEl.classList.add('modale__image');
  firstEl.classList.add('modale__top');
  descriptionEl.classList.add('modale__text');
  checkoutEl.classList.add('checkout', 'add');
  priceEl.classList.add('modale__price');
  // delete the cart
  function deleteProduct() {
    deleteEl.addEventListener('click', () => {
      total = 0;
      countEl.textContent = total;
      removeClass(cartEl, 'isActive');
      modaleActivated = false;
      clearBox();
      createEmptyModale();
    });
  }
  deleteProduct();
}
