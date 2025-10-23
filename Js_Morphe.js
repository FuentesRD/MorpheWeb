// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // --- INTERACCIONES GENERALES (Alertas de ejemplo) ---

  const btnAR = document.getElementById('btn-ar');
  if (btnAR) {
    btnAR.addEventListener('click', () => {
      alert('Funcionalidad AR en desarrollo. ¡Regístrate para ser el primero en probarla!');
    });
  }

 const videoModalEl = document.getElementById('videoModal');
  const btnStressVideo = document.getElementById('btn-stress-video');
  const videoPlayer = document.getElementById('stressVideoPlayer');

  if (videoModalEl && btnStressVideo && videoPlayer) {
    // 1. Crea una instancia del Modal de Bootstrap
    const videoModal = new bootstrap.Modal(videoModalEl);

    // 2. Asigna el evento de clic al botón para MOSTRAR el modal
    btnStressVideo.addEventListener('click', () => {
      videoModal.show();
      // Opcional: inicia el video automáticamente al abrir
       videoPlayer.play(); 
    });

    // 3. Asigna un evento para cuando el modal se OCULTE
    videoModalEl.addEventListener('hidden.bs.modal', () => {
      // Pausa el video y reinicia al segundo 0
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    });
  }
  // --- FIN DE MODAL DE VIDEO ---
  
  const subscribeForm = document.getElementById('subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita que la página se recargue
      alert('¡Gracias por suscribirte!');
      subscribeForm.reset(); // Limpia el campo de email
    });
  }
  
  // Selecciona TODOS los botones de "Comprar"
  const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.dataset.productName; // Obtiene el nombre del data-attribute
      alert(`Añadido al carrito: ${productName}`);
    });
  });


  // --- SIMULADOR DE MODULARIDAD ---

  const modularViz = document.getElementById('modular-viz');
  const addModuleBtn = document.getElementById('add-module-btn');

  if (modularViz && addModuleBtn) {
    addModuleBtn.addEventListener('click', () => {
      // toggleClass cambia la clase: si la tiene, la quita; si no, la pone.
      modularViz.classList.toggle('is-expanded');

      // Cambia el texto del botón basado en si el módulo está expandido
      if (modularViz.classList.contains('is-expanded')) {
        addModuleBtn.textContent = '−';
        addModuleBtn.setAttribute('aria-label', 'Quitar módulo de escritorio');
      } else {
        addModuleBtn.textContent = '+';
        addModuleBtn.setAttribute('aria-label', 'Añadir módulo de escritorio');
      }
    });
  }

  



});