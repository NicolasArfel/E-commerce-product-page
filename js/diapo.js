const largeImageArray = [
  'http://127.0.0.1:5500/images/image-product-1.jpg',
  'http://127.0.0.1:5500/images/image-product-2.jpg',
  'http://127.0.0.1:5500/images/image-product-3.jpg',
  'http://127.0.0.1:5500/images/image-product-4.jpg',
];
const smallImageArray = [
  'http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg',
  'http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg',
  'http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg',
  'http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg',
];
let index = 0;
const images = document.querySelectorAll('.image');
const image = document.querySelector(`.image${index}`);
const largeImage1 = document.querySelector('.main__left-large');
const largeImage2 = document.querySelector('.large');

function changeImage() {
  const leftArrow = document.querySelectorAll('.left');
  const rightArrow = document.querySelectorAll('.right');

  leftArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      index--;
      if (index < 0) {
        index = 3;
      }

      largeImage1.src = largeImageArray[index];
      largeImage2.src = largeImageArray[index];
    });
  });

  rightArrow.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      index++;
      if (index > 3) {
        index = 0;
      }
      largeImage1.src = largeImageArray[index];
      largeImage2.src = largeImageArray[index];
    });
  });
}
changeImage();
// if i click on an small image i want it to replace
// the big one and be selected with the style "selected"
function setSelected() {
  const imgEl = document.querySelectorAll('.main__left-small-container');
  imgEl.forEach((img) => {
    img.addEventListener('click', () => {
      imgEl.forEach((img) => removeClass(img, 'selected'));
      addClass(img, 'selected');
    });
  });
}
images.forEach((img) => {
  img.addEventListener('click', () => {
    let source = img.src;

    switch (source) {
      case smallImageArray[0]:
        largeImage1.src = largeImageArray[0];
        largeImage2.src = largeImageArray[0];
        break;
      case smallImageArray[1]:
        largeImage1.src = largeImageArray[1];
        largeImage2.src = largeImageArray[1];
        break;
      case smallImageArray[2]:
        largeImage1.src = largeImageArray[2];
        largeImage2.src = largeImageArray[2];
        break;
      case smallImageArray[3]:
        largeImage1.src = largeImageArray[3];
        largeImage2.src = largeImageArray[3];
        break;

      default:
        largeImage1.src = largeImageArray[0];
        largeImage2.src = largeImageArray[0];
    }
  });
});

setSelected();
