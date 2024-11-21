// Controle de Modal
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
      modal.style.display = 'flex';
  } else {
      console.error(`Modal com ID "${id}" não encontrado.`);
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
      modal.style.display = 'none';
  } else {
      console.error(`Modal com ID "${id}" não encontrado.`);
  }
}

// Scroll para o topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar tabelas de preços
function switchTable(tableId) {
  const tables = document.querySelectorAll('.pricing-table');
  const buttons = document.querySelectorAll('.btn-toggle');

  // Verificar se as tabelas e os botões existem
  if (tables.length === 0 || buttons.length === 0) {
      console.error("Tabelas ou botões de troca não encontrados.");
      return;
  }

  // Remove a classe "active" de todas as tabelas e botões
  tables.forEach(table => table.classList.remove('active'));
  buttons.forEach(button => button.classList.remove('active'));

  // Ativa a tabela e o botão clicado
  const activeTable = document.getElementById(tableId);
  const activeButton = document.querySelector(`button[onclick="switchTable('${tableId}')"]`);

  if (activeTable) {
      activeTable.classList.add('active');
  } else {
      console.error(`Tabela com ID "${tableId}" não encontrada.`);
  }

  if (activeButton) {
      activeButton.classList.add('active');
  } else {
      console.error(`Botão associado à tabela "${tableId}" não encontrado.`);
  }
}

// Navegação entre páginas
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-links');

  // Alternar páginas
  navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();

          // Obter o atributo data-page para identificar a página
          const targetPage = e.target.getAttribute('data-page');

          // Alterar as classes "active" das páginas
          pages.forEach(page => {
              if (page.id === targetPage) {
                  page.classList.add('active');
              } else {
                  page.classList.remove('active');
              }
          });

          // Alterar as classes "active" dos links de navegação
          navLinks.forEach(nav => nav.classList.remove('active'));
          link.classList.add('active');

          // Fechar o menu responsivo (se aberto)
          if (navMenu.classList.contains('active')) {
              navMenu.classList.remove('active');
          }
      });
  });

  // Controle do menu responsivo
  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });
  } else {
      console.error("Menu toggle ou links de navegação não encontrados.");
  }
});

// Scroll suave ao topo quando necessário
const scrollToTopBtn = document.querySelector('.btn-float');
if (scrollToTopBtn) {
  scrollToTopBtn.addEventListener('click', scrollToTop);
}

function copyPixKey() {
  const pixKey = document.getElementById("pix-key").innerText;
  navigator.clipboard.writeText(pixKey).then(() => {
    alert("Chave PIX copiada para a área de transferência!");
  }).catch(err => {
    alert("Erro ao copiar a chave PIX.");
  });
}

function copyPixKey() {
  // Obtém a chave PIX
  const pixKey = document.getElementById("pix-key").textContent;

  // Copia a chave PIX para a área de transferência
  navigator.clipboard.writeText(pixKey).then(() => {
      alert("Chave PIX copiada com sucesso!");
  }).catch((err) => {
      alert("Erro ao copiar a chave PIX: " + err);
  });
}
