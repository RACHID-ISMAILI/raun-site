
function toggleMode() {
  const body = document.getElementById("main-body");
  body.classList.toggle("clean");
  body.classList.toggle("hacker");
}

function processInput() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const out = document.getElementById("output");
  let result = "";

  if (input.includes("vérité") || input.includes("mensonge")) {
    result = "Analyse cognitive : Le texte présente des signes de manipulation mentale.";
  } else if (input.includes("conscience")) {
    result = "La conscience n’est pas dans le cerveau, mais dans le champ.";
  } else if (input.includes("argent")) {
    result = "L'argent est un algorithme social. Apprends à le coder.";
  } else {
    result = "Réflexion RAUN : Je ressens l’intention derrière ton texte.";
  }

  out.innerText = result;
}

function analyzeFile() {
  const file = document.getElementById("fileInput").files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    document.getElementById("fileContent").innerText = "Contenu :\n" + text.slice(0, 500) + "...";
  };
  if (file) {
    reader.readAsText(file);
  } else {
    alert("Aucun fichier sélectionné.");
  }
}
