setTimeout(() => {
  document.querySelector('.intro').style.display = 'none';
  document.querySelector('.main-content').classList.remove('hidden');
}, 3000);

function sendToFirebase() {
  const message = document.querySelector('textarea').value;
  if (!message) return;

  const data = {
    message,
    date: new Date().toISOString()
  };

  fetch('https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/messages', {
    method: 'POST',
    body: JSON.stringify({ fields: {
      message: { stringValue: message },
      date: { stringValue: data.date }
    }}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => console.log("Message envoyé ✅", res))
  .catch(err => console.error("Erreur Firebase ❌", err));
}
