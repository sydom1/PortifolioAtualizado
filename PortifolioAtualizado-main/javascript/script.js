// Animação da imagem (efeito de fade-in)
window.onload = function() {
  const image = document.querySelector('.imagem__principal');
  image.style.opacity = 0; // Inicializa a imagem invisível
  let opacity = 0;

  function fadeIn() {
    opacity += 0.05;
    image.style.opacity = opacity;
    if (opacity < 1) {
      requestAnimationFrame(fadeIn);
    }
  }
  fadeIn();
};

// Animação do texto (efeito de digitação)
function typeWriter() {
  const text = document.querySelector('.apresentação__conteudo-paragrafo');
  const content = text.innerHTML;
  text.innerHTML = '';
  let i = 0;

  function typing() {
    if (i < content.length) {
      text.innerHTML += content.charAt(i);
      i++;
      setTimeout(typing, 100); // Define a velocidade de digitação
    }
  }
  typing();
}

document.addEventListener('DOMContentLoaded', typeWriter);


/*cards*/

const cards = document.querySelectorAll('.card-container');

cards.forEach(card => {
    card.addEventListener('click', function (e) {
        // Impede a propagação do evento para o document
        e.stopPropagation();

        // Remove a classe 'active' de todos os cards
        cards.forEach(c => c.classList.remove('active'));

        // Adiciona a classe 'active' ao card clicado
        card.classList.add('active');
    });
});

document.addEventListener('click', function (e) {
    // Remove a classe 'active' de todos os cards se o clique for fora
    cards.forEach(card => {
        if (!card.contains(e.target)) {
            card.classList.remove('active');
        }
    });
});
