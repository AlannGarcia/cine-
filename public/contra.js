const passwordInput = document.getElementById('exampleInputPassword1');
const showPasswordButton = document.getElementById('showPasswordButton');


showPasswordButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      showPasswordButton.textContent = 'Ocultar contraseña';
    } else {
      passwordInput.type = 'password';
      showPasswordButton.textContent = 'Mostrar contraseña';
    }
  });