
function startMatrixIntro() {
  const audio = document.getElementById('start-sound');
  audio.play();
  setTimeout(() => {
    window.location.href = "index.html";
  }, 4000);
}
