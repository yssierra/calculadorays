const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".boton");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonClik = boton.textContent;

        if (boton.id === "limpiar") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            // aca lo que hice para asegurarme que me generara un mensaje de error en pantalla fue
            // Verificar si la cadena contiene múltiples operadores de división consecutivos 
            //para esto use la funcion includes y le agregue pantalla.textContent = "¡Error!"; 
            //la asignación que establece el contenido del elemento HTML con la clase "pantalla"
            if (pantalla.textContent.includes('//')) {
                pantalla.textContent = "¡Error!";
            } else {
                try {
                    pantalla.textContent = eval(pantalla.textContent);
                } catch {
                    pantalla.textContent = "¡Error!";
                }
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonClik;
        } else {
            pantalla.textContent += botonClik;
        }
    });
});
