(function() {
    // URLs de imágenes de alta resolución
    const images = [
        "https://tse3.mm.bing.net/th?id=OIP.OmAXvoZyEaoHicER2Q8eJQHaEn&pid=Api&P=0&h=180",
        "https://tse3.mm.bing.net/th?id=OIP.-F3mNmil9Zt_dofWFOI-KwHaE8&pid=Api&P=0&h=180",
        "https://tse1.mm.bing.net/th?id=OIP.zN543URuYUmcWqKYKhtNEgHaEK&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.Nu9X8JlN9IXEkpPe-Vi0SgHaD3&pid=Api&P=0&h=180",
        "https://tse4.mm.bing.net/th?id=OIP.bGKyrJ9uwWqi8YONeeiRnQHaEj&pid=Api&P=0&h=180",
        "https://tse2.mm.bing.net/th?id=OIP.oHytvQy334tClm7UPXoCVgHaFQ&pid=Api&P=0&h=180"
    ];

    let currentIndex = 0; // Índice actual de la imagen

    // Función para cambiar la imagen
    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById('carouselImage').src = images[currentIndex];
    }

    // Cambia la imagen automáticamente cada 4 segundos
    setInterval(changeImage, 4000);

    // Permite cambiar la imagen al hacer clic
    document.getElementById('carouselImage').addEventListener('click', changeImage);
})();