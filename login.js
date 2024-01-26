document.getElementById("loginForm").addEventListener("submit", function(event) {
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var warning = document.getElementById("warning");

            // Expresión regular para validar el formato del correo electrónico
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email === "" || password === "") {
                warning.textContent = "Ingresa un correo y contraseña válidos.";
            } else if (!emailRegex.test(email)) {
                warning.textContent = "Ingresa un correo electrónico válido.";
            } else if (password.length <= 8) {
                warning.textContent = "La contraseña debe tener más de 8 caracteres.";
            } else {
                // Acción a realizar si la validación es exitosa
                warning.textContent = "¡Inicio de sesión exitoso!";
            }

            event.preventDefault(); // Evita que el formulario se envíe
        });
