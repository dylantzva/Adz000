document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('contactModal');

  // Open modal
  window.openModal = function () {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
  };

  // Close modal
  window.closeModal = function () {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  };

  // Click outside to close
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };

  // Animate sections on scroll
  function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    const elements = document.querySelectorAll('.section-desc, .steps div, .benefits li, .animated-list li, .final-text');

    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
});
