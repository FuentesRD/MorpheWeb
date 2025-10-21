// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

  // --- INTERACCIONES GENERALES (Alertas de ejemplo) ---

  const btnAR = document.getElementById('btn-ar');
  if (btnAR) {
    btnAR.addEventListener('click', () => {
      alert('Funcionalidad AR en desarrollo. ¡Regístrate para ser el primero en probarla!');
    });
  }

  const btnStressVideo = document.getElementById('btn-stress-video');
  if (btnStressVideo) {
    btnStressVideo.addEventListener('click', () => {
      // Aquí podrías abrir un modal con el video en lugar de un console.log
      console.log('Reproduciendo video de prueba de estrés...');
      alert('Mostrando video de prueba de estrés (ver consola).');
    });
  }

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