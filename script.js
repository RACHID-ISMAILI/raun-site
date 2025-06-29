let attempts = 0;
const maxAttempts = 3;
const correctPassword = "deltafire2025";

function verifyPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (input === correctPassword) {
    window.location.href = "admin.html";
  } else {
    attempts++;
    if (attempts >= maxAttempts) {
      message.textContent = "⚠️ Accès bloqué : trop de tentatives.";
      document.querySelector("button").disabled = true;
    } else {
      message.textContent = "❌ Mot de passe incorrect.";
    }
  }
}
