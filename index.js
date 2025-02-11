document.addEventListener("DOMContentLoaded", function() {
  var emailInput = document.getElementById('emailInput');
  var resultMessage = document.getElementById('resultMessage');
  var emailForm = document.getElementById('emailForm');
  var errorIcon = document.getElementById('errorIcon');
  var imgElement = document.querySelector('#img img');

  function updateImageSrc() {
    if (window.innerWidth <= 768) {
      imgElement.src = './images/hero-mobile.jpg';
    } else {
      imgElement.src = './images/hero-desktop.jpg';
    }
  }

  // Atualiza a imagem ao carregar a página
  updateImageSrc();

  // Atualiza a imagem ao redimensionar a janela
  window.addEventListener('resize', updateImageSrc);

  emailForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = emailInput.value;

    if (validateEmail(email)) {
      resultMessage.textContent = "Email válido";
      resultMessage.style.color = "green";
      errorIcon.style.display = "none";
    } else {
      resultMessage.textContent = "Please provide a valid email";
      resultMessage.style.color = "red";
      errorIcon.style.display = "block";
    }
  });

  // Função de validar email usando regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
