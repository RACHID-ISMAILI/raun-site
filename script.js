function initLoader() {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main').style.display = 'block';
  }, 3000); // 3 secondes de chargement
}

function goToSecret() {
  window.location.href = "secret.html";
}
