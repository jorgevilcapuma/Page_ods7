(function() {
    const carouselContainer = document.querySelector('.mi-carrusel .carousel');
    const dots = document.querySelectorAll('.mi-carrusel .dot');
    let currentIndex = 0;

    if (!carouselContainer || dots.length === 0) return; // Verifica que existan los elementos necesarios

    function updateCarousel() {
        const itemWidth = carouselContainer.querySelector('.carousel-item').clientWidth + 30; // Width + gap
        carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Auto-slide every 3 seconds
    setInterval(autoSlide, 3000);

    updateCarousel();
})();
