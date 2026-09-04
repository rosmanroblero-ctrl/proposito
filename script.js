const video = document.getElementById('videoPrincipal');
const locked = document.getElementById('mensajeBloqueado');
const unlocked = document.getElementById('contenidoDesbloqueado');

video.addEventListener('ended', () => {
  locked.style.display = 'none';
  unlocked.classList.add('show');
  unlocked.setAttribute('aria-hidden', 'false');
  unlocked.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
