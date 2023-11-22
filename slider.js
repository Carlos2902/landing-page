let index = 0;
const images = document.querySelectorAll('.slider-images img');

function slide() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  images[index].style.display = 'block';
}

setInterval(slide, 2000);