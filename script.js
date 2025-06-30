
function checkAccess() {
  const code = document.getElementById("code").value;
  if (code === "globalcode7676") {
    document.getElementById("secure-links").style.display = "block";
  } else {
    alert("Code d’accès invalide.");
  }
}

// Matrix effect
const canvas = document.querySelector('.matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let matrix = "01";
matrix = matrix.split("");
const font_size = 14;
const columns = canvas.width / font_size;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px monospace";

  for(let i = 0; i < drops.length; i++) {
    const text = matrix[Math.floor(Math.random() * matrix.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if(drops[i] * font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);
