// Seleccionamos el formulario
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    // Evita el envío del formulario automáticamente
    event.preventDefault();

    // Variables para los campos del formulario
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Expresión regular para validar el email de Gmail
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Variable para verificar si el formulario es válido
    let formIsValid = true;

    // Validación del campo Nombre
    if (nombre.value.trim() === "") {
        alert("El campo de nombre es obligatorio.");
        formIsValid = false;
    } else if (nombre.value.length > 60) {
        alert("El nombre no puede tener más de 60 caracteres.");
        formIsValid = false;
    }

    // Validación del campo Apellido
    if (apellido.value.trim() === "") {
        alert("El campo de apellido es obligatorio.");
        formIsValid = false;
    } else if (apellido.value.length > 100) {
        alert("El apellido no puede tener más de 100 caracteres.");
        formIsValid = false;
    }

    // Validación del campo Email
    if (!gmailRegex.test(email.value.trim())) {
        alert("Por favor, introduce un correo electrónico válido de Gmail.");
        formIsValid = false;
    }

    // Validación del campo Mensaje
    if (mensaje.value.trim() === "") {
        alert("El campo de mensaje es obligatorio.");
        formIsValid = false;
    } else if (mensaje.value.length > 500) {
        alert("El mensaje no puede tener más de 500 caracteres.");
        formIsValid = false;
    }

    // Si todas las validaciones pasan, mostramos un mensaje de éxito
    if (formIsValid) {
        alert("Formulario enviado correctamente.");
        // Aquí puedes enviar el formulario con event.target.submit();
        // Descomenta la siguiente línea si quieres que el formulario se envíe al servidor
        // event.target.submit();
    }
});