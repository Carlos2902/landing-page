const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');

let index = 0;

function changeSlide() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  const offset = -index * images[0].clientWidth;
  sliderImages.style.transform = `translateX(${offset}px)`;
}

setInterval(changeSlide, 2000); // Change slide every 2 seconds (2000 milliseconds)
