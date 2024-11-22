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
      setTimeout(typing, 70); // velocidade de digitação
    }
  }
  typing();
}

document.addEventListener('DOMContentLoaded', typeWriter);


/*cards*/

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
      // Impedir que o clique dentro do card feche ele
      e.stopPropagation();

      // Remover classes 'active' de todos os cards e adicionar a classe 'inactive'
      document.querySelectorAll('.card').forEach(c => {
          c.classList.remove('active');
          c.classList.add('inactive');
      });

      // Adicionar a classe 'active' ao card clicado e remover 'inactive'
      card.classList.remove('inactive');
      card.classList.add('active');

      // Ajustar o container para expandir o card clicado
      const container = document.querySelector('.card-container');
      container.classList.add('expanded');
  });
});

// Adicionar um listener para o documento para detectar cliques fora dos cards
document.addEventListener('click', () => {
  // Remover a classe 'expanded' do container para voltar ao layout original
  const container = document.querySelector('.card-container');
  container.classList.remove('expanded');

  // Reexibir todas as imagens, removendo 'active' e 'inactive'
  document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('active', 'inactive');
  });
});


/*
//Api do Vercel.com
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.apresentacao'); // Onde os projetos serão inseridos
  const vercelToken = 'Gmy6l5peudQFVVXQL2n3LsYp'; // Substitua pelo seu token de API da Vercel

  // URL para pegar os deploys do seu usuário na Vercel
  fetch('https://vercel.com/sydom1s-projects', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${vercelToken}` // Autenticação com o token de API
      }
  })
  .then(response => response.json())
  .then(data => {
      // Para cada projeto, cria-se um cartão com informações
      data.projects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.classList.add('apresentacao_card');
          
          const cardContent = document.createElement('div');
          cardContent.classList.add('apresentacao_card_cards');
          cardContent.innerHTML = `
              <h4>${project.name}</h4>
              <p>${project.description || 'Sem descrição'}</p>
              <a href="https://${project.aliases[0]}" target="_blank">Ver no Vercel</a>
          `;
          
          projectCard.appendChild(cardContent);
          container.appendChild(projectCard);
      });
  })
  .catch(error => {
      console.error('Erro ao carregar os projetos da Vercel:', error);
  });
});*/