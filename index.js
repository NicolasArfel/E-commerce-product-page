// i create a function that changes the number
// of articles and changes it into DOM
let total = 0;
const countEl = document.querySelector('#counter');
const plusEl = document.querySelector('#add');
const minusEl = document.querySelector('#remove');

function changeArticleCount() {
  plusEl.addEventListener('click', () => {
    total++;
    countEl.textContent = total;
  });
  minusEl.addEventListener('click', () => {
    if (total < 1) {
      total = 0;
    } else {
      total--;
    }
    countEl.textContent = total;
  });
}

changeArticleCount();
