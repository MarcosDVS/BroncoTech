// Inicializar EmailJS
emailjs.init("j3EUJKJKx3rKRt8pB");
                    
// Manejar el envío del formulario
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir recarga de la página

    // Obtener valores del formulario
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Enviar el email
    emailjs.send("service_620hf89", "template_0ri6egp", params)
        .then(function (response) {
            alert("¡Correo enviado correctamente!");
            console.log("Éxito:", response.status, response.text);
            document.getElementById("contact-form").reset(); // Reiniciar formulario
        })
        .catch(function (error) {
            alert("Error al enviar el correo. Por favor, intenta nuevamente.");
            console.error("Error:", error);
        });
});