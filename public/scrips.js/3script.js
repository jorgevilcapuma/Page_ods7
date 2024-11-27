// Lista de mensajes que irán rotando en el cuadro de diálogo
const messages = [
    "Recuerda que para saber más, ve a la sección de Noticias.",
    "Recuerda buscar usar energias renovables.",
    "¿Sabías que en Perú la huella de carbono ha disminuido un X%?"
];

// Lista de imágenes correspondientes a los mensajes (solo 2 imágenes)
const images = [
    "/public/imagen/personaje 1.png",
    "/public/imagen/personaje 2.png",
    "/public/imagen/personaje 3.png",
];

// Elementos donde se mostrarán el texto y la imagen
let dialogueText = document.getElementById('dialogue-text');
let characterImage = document.getElementById('character-image');

// Índice para controlar qué mensaje e imagen se muestran
let messageIndex = 0;

// Función para cambiar el mensaje y la imagen
function changeMessageAndImage() {
    // Cambiar el mensaje
    dialogueText.innerHTML = messages[messageIndex];

    // Cambiar la imagen (alternar entre las 2 imágenes)
    let imageIndex = messageIndex % images.length;
    characterImage.src = images[imageIndex]; // Rotar las dos imágenes

    // Avanzar al siguiente mensaje
    messageIndex = (messageIndex + 1) % messages.length; // Rotar los mensajes
}

// Cambiar mensaje e imagen inmediatamente al cargar
changeMessageAndImage();

// Cambiar el mensaje y la imagen cada 5 segundos (5000 ms)
setInterval(changeMessageAndImage, 5000);