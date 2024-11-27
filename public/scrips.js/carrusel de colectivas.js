(function() {
    const carousel = document.querySelector('.mi-carrusel #carousel'); // Selección específica del carrusel
    const prevButton = document.querySelector('.mi-carrusel #prev'); // Selección específica del botón anterior
    const nextButton = document.querySelector('.mi-carrusel #next'); // Selección específica del botón siguiente
    const dots = document.querySelectorAll('.mi-carrusel .dot'); // Selección específica de los dots
    let currentIndex = 0;
    const totalSlides = dots.length; // Total de diapositivas

    // Verificar que existan los elementos necesarios dentro del contenedor específico
    if (!carousel || !prevButton || !nextButton || dots.length === 0) return;

    function updateCarousel() {
        const width = carousel.clientWidth;
        // Calcular el desplazamiento en píxeles
        carousel.style.transform = `translateX(-${currentIndex * width}px)`;
        
        // Actualizar los puntos activos
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Mover al siguiente índice
        updateCarousel(); // Actualizar el carrusel
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Mover al índice anterior
        updateCarousel(); // Actualizar el carrusel
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index; // Establecer el índice al dot correspondiente
            updateCarousel(); // Actualizar el carrusel
        });
    });

    updateCarousel(); // Inicializar el carrusel
})();

