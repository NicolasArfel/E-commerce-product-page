// i create a function that changes the number
// of articles and changes it into DOM
let total = 0;
const countEl = document.querySelector('#counter');
const plusEl = document.querySelector('#add');
const minusEl = document.querySelector('#remove');
const cartEl = document.querySelector('.navbar__right-count');
const addEl = document.querySelector('.add');

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

changeArticleCount();
setActived();
