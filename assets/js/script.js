document.addEventListener('DOMContentLoaded', function() {
    // Atualiza dinamicamente o ano no rodapé
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    // Animação de fade-in para as seções ao rolar a página
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Anima apenas uma vez
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll('.fade-in').forEach(element => {
      observer.observe(element);
    });
  });
  
  // Lógica para o botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.classList.remove('d-none');
  } else {
    backToTopButton.classList.add('d-none');
  }
};
