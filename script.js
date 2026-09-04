const video = document.getElementById("videoPrincipal");
const locked = document.getElementById("mensajeBloqueado");
const unlocked = document.getElementById("contenidoDesbloqueado");

let ultimoTiempo = 0;
let completado = false;

// Evitar que el usuario pueda adelantar
video.addEventListener("timeupdate", () => {
    if (!video.seeking && video.currentTime > ultimoTiempo) {
        ultimoTiempo = video.currentTime;
    }
});

// Detectar intento de mover la barra
video.addEventListener("seeking", () => {
    if (video.currentTime > ultimoTiempo + 0.5) {
        video.currentTime = ultimoTiempo;
    }
});

// Evitar retroceder también
video.addEventListener("seeked", () => {
    if (!completado && video.currentTime < ultimoTiempo - 0.5) {
        video.currentTime = ultimoTiempo;
    }
});

// Cuando llega realmente al final
video.addEventListener("ended", () => {
    completado = true;

    locked.style.display = "none";

    unlocked.classList.add("show");
    unlocked.setAttribute("aria-hidden", "false");

    unlocked.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});
