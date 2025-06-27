function checkPassword() {
  const pass = document.getElementById('password').value;
  const message = document.getElementById('message');
  if (pass === 'globalcode7676') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('adminForm').style.display = 'block';
  } else {
    message.textContent = 'Mot de passe incorrect.';
  }
}