import { db } from './firebase-init.js';
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const capsuleContainer = document.getElementById('capsules');
const q = collection(db, 'capsules');

onSnapshot(q, (snapshot) => {
  capsuleContainer.innerHTML = '';
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement('div');
    div.className = 'capsule';
    div.innerHTML = `
      <h2>${data.titre} (${data.date})</h2>
      <p>${data.contenu}</p>
      <div class="share-btns">
        <a href="https://wa.me/?text=${encodeURIComponent(data.contenu)}" target="_blank">WhatsApp</a> |
        <a href="https://t.me/share/url?url=${encodeURIComponent(data.contenu)}" target="_blank">Telegram</a> |
        <a href="mailto:?body=${encodeURIComponent(data.contenu)}">Email</a>
      </div>
    `;
    capsuleContainer.appendChild(div);
  });
});
