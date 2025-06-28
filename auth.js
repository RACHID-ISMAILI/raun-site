
function login() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    if (email === "raun@rachid.com" && pass === "raun2025") {
        window.location.href = "private.html";
    } else {
        alert("Accès refusé.");
    }
}
