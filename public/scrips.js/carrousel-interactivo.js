
const squareImages = document.querySelectorAll(".square-carousel-item");
let currentIndex = 0;

function showSquareImage(index) {
    const carousel = document.getElementById("tema-carousel");
    const offset = -index * 320; // Ancho de cada item (80 + 6px de margen)

    // Desplazamiento con animación
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSquareImage() {
    currentIndex = (currentIndex + 1) % squareImages.length; // Incrementa y asegura el bucle infinito
    showSquareImage(currentIndex);
}

function previousSquareImage() {
    currentIndex = (currentIndex - 1 + squareImages.length) % squareImages.length; // Decrementa y asegura el bucle infinito
    showSquareImage(currentIndex);
}

// Control de botones
document.getElementById("next").addEventListener("click", nextSquareImage);
document.getElementById("prev").addEventListener("click", previousSquareImage);

// Desplazamiento automático cada  3 segundos
setInterval(nextSquareImage, 3000);



