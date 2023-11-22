let slideIndex = 0;
const slides = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');
const totalSlides = images.length;

function moveSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 300}px)`; // Adjust image width
}