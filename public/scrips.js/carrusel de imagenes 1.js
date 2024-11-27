let currentIndex = 1;
    
function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    currentIndex += direction;

    // Asegura que el índice se mantenga dentro de los límites
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Regresar al último elemento
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0; // Regresar al primer elemento
    }

    // Calcular el desplazamiento
    const offset = -currentIndex * (168 / totalSlides);
    document.getElementById('carousel').style.transform = `translateX(${offset}%)`;
}

// Avance automático
setInterval(() => {
    moveSlide(1);
}, 1000); // Cambia cada 3 segundos
