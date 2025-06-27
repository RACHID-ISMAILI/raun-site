setTimeout(() => {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.main-content').classList.remove('hidden');
}, 3000);

function sendToFirebase() {
  const message = document.querySelector('textarea').value;
  if (!message) return;

  const payload = {
    fields: {
      message: { stringValue: message },
      timestamp: { stringValue: new Date().toISOString() }
    }
  };

  fetch('https://firestore.googleapis.com/v1/projects/raun-site/databases/(default)/documents/messages', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log("🔥 Message envoyé dans la MATRICE RAUN+NEXUS ✅", data);
    alert("Message reçu. Ton empreinte mentale est enregistrée 🧠.");
  })
  .catch(err => {
    console.error("❌ Erreur de liaison Firebase : ", err);
    alert("Erreur de transmission... Essaie encore frérot.");
  });
}
