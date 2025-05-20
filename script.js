// Controle do menu mobile - Gerencia a abertura e fechamento do menu em dispositivos móveis
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

// Função para alternar a visibilidade do menu mobile e do overlay
function toggleMenu() {
  navLinks.classList.toggle('active');
  navOverlay.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

// Evento de clique no botão do menu
menuToggle.addEventListener('click', toggleMenu);
// Evento de clique no overlay para fechar o menu
navOverlay.addEventListener('click', toggleMenu);

// Fechar o menu ao clicar em qualquer link de navegação
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});

// Rolagem suave para links de navegação internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Manipulação do formulário de contato - Processa o envio do formulário
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário - Obtém os valores dos campos
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };

    // Aqui você normalmente enviaria os dados para um servidor
    // Por enquanto, apenas mostraremos uma mensagem de sucesso
    console.log('Formulário enviado:', formData);
    
    // Mostrar mensagem de sucesso para o usuário
    alert('Obrigado pela sua mensagem! Entrarei em contato em breve.');
    
    // Limpar formulário após o envio
    contactForm.reset();
  });
}

// Adicionar classe ativa aos links de navegação baseado na posição de rolagem
// Isso ajuda a indicar visualmente em qual seção o usuário está
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  // Verifica qual seção está atualmente visível na viewport
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  // Atualiza a classe ativa nos links de navegação
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}); 