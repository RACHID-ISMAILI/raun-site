function checkPassword() {
 const password = document.getElementById('passwordInput').value;
 const allowed = password === 'globalcode7676';
 document.getElementById('capsule-form').style.display = allowed ? 'block' : 'none';
 document.getElementById('login-block').style.display = allowed ? 'none' : 'block';
 document.getElementById('error-message').textContent = allowed ? '' : 'Mot de passe incorrect.';
}