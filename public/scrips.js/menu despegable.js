  // Alternar el menú móvil
  document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Función para activar el enlace actual y cerrar el menú móvil
function setActive(element) {
    // Remover clase active de todos los enlaces
    document.querySelectorAll('nav a, #mobile-menu a').forEach(function (link) {
        link.classList.remove('active');
    });
    // Agregar clase active al enlace seleccionado
    element.classList.add('active');

    // Ocultar el menú móvil al hacer clic en un enlace
    if (window.innerWidth < 1024) {
        document.getElementById('mobile-menu').classList.add('hidden');
    }
}

// Escucha el cambio de tamaño de la ventana para cerrar el menú móvil al cambiar a escritorio
window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
        document.getElementById('mobile-menu').classList.add('hidden');
    }
});