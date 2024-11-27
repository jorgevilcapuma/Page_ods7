document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("typewriter-text");
    const text = "Gracias por acompañarme en este viaje! Te invitamos a explorar más sobre los Objetivos de Desarrollo Sostenible ."; // Cambia este texto
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Velocidad de escritura
        } else {
            setTimeout(() => {
                textElement.innerHTML = ""; // Limpia el texto
                index = 0; // Reinicia el índice
                typeWriter(); // Reinicia la animación
            }, 2000); // Espera antes de reiniciar
        }
    }

    typeWriter(); // Inicia la animación
});