let currentSlide = 1;
const totalSlides = 8;

// Función para mostrar una diapositiva específica
function showSlide(slideIndex) {
    document.getElementById('slide' + slideIndex).checked = true;
}

// Función para ir a la siguiente diapositiva
function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    showSlide(currentSlide);
}

// Función para ir a la diapositiva anterior
function prevSlide() {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
    showSlide(currentSlide);
}

// Configuración del bucle automático
setInterval(nextSlide, 3000); // Cambia de diapositiva cada 3 segundos
