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

function changeImage() {
  const leftArrow = document.querySelector('.left');
  const rightArrow = document.querySelector('.right');

  leftArrow.addEventListener('click', () => {
    console.log('hi');
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
