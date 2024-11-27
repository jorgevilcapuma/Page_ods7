let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slideWidth = 450; // Fijar el ancho de desplazamiento en 168 píxeles
  carousel.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(currentSlide);
}

// Mostrar la primera diapositiva
showSlide(currentSlide);
