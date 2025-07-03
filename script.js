
function checkPassword() {
  const pass = document.getElementById('password').value;
  if (pass === "globalcode7676") {
    window.location.href = "portal.html";
  } else {
    alert("Mot de passe incorrect");
  }
}
