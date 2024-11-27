(function() {
    // Crear el botón "Volver arriba"
    const backToTopButton = document.createElement('button');
    
    // Estilos generales del botón
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none'; // Ocultar inicialmente
    backToTopButton.style.width = '60px';
    backToTopButton.style.height = '60px';
    backToTopButton.style.background = '#ffffff';
    backToTopButton.style.border = '2px solid #00796b'; // Borde verde claro
    backToTopButton.style.borderRadius = '50%'; // Hacerlo circular
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    backToTopButton.style.transition = 'all 0.3s ease';
    backToTopButton.style.padding = '0'; // Sin padding para la imagen
    
    // Añadir imagen dentro del botón
    const img = document.createElement('img');
    img.src = 'https://agenda2030lac.org/estadisticas/images/icon-top.png'; // Coloca aquí la ruta de la imagen ODS
    img.alt = 'ODS Icon';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.borderRadius = '50%'; // Asegurar que la imagen también sea circular
    backToTopButton.appendChild(img);

    document.body.appendChild(backToTopButton);

    // Efecto hover
    backToTopButton.addEventListener('mouseover', () => {
        backToTopButton.style.transform = 'scale(1.1)';
        backToTopButton.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.3)';
    });

    backToTopButton.addEventListener('mouseout', () => {
        backToTopButton.style.transform = 'scale(1)';
        backToTopButton.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
    });

    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Volver al inicio al hacer click en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
