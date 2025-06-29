
function startMatrixIntro() {
  const audio = document.getElementById('start-sound');
  audio.play();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 4000);
}


function launchScanner() {
  let userInput = prompt("🔬 Entrez votre code génétique RAUN :");
  if (userInput === "ΔFEU-RACHID-Ψ42") {
    alert("✔ Accès génétique confirmé !");
    window.location.href = "admin.html";
  } else {
    alert("❌ ADN non reconnu. Accès refusé.");
  }
}

function startAI() {
  document.getElementById("ai-box").style.display = "block";
  document.getElementById("ai-log").value += "RAUN IA : Bonjour, pose-moi une question.\n";
}

function sendAI() {
  let input = document.getElementById("ai-input").value;
  let log = document.getElementById("ai-log");
  log.value += "Vous : " + input + "\n";
  if (input.toLowerCase().includes("feu") || input.toLowerCase().includes("objectif")) {
    log.value += "RAUN IA : Le feu intérieur guide le chemin. Reste en vibration.\n";
  } else if (input.toLowerCase().includes("argent") || input.toLowerCase().includes("liberté")) {
    log.value += "RAUN IA : La liberté se code, frère. Multiplie les canaux.\n";
  } else {
    log.value += "RAUN IA : Je ressens ton énergie, mais clarifie ta question.\n";
  }
  document.getElementById("ai-input").value = "";
}
