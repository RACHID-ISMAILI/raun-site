
function publish() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const date = new Date().toISOString();
  let capsules = JSON.parse(localStorage.getItem('capsules') || '[]');
  capsules.push({ title, content, date });
  localStorage.setItem('capsules', JSON.stringify(capsules));
  alert("Capsule publiée !");
}
