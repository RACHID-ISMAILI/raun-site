
document.getElementById('passwordInput').addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    const val = e.target.value;
    if (val === 'globalcode7676') {
      document.getElementById('adminPanel').style.display = 'block';
    } else {
      alert('Mot de passe incorrect');
    }
  }
});
