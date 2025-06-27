import { db, auth } from './firebase-init.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
import { addDoc, collection, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const capsuleForm = document.getElementById("capsule-form");
const authSection = document.getElementById("auth-section");
const container = document.getElementById("capsules-container");

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => console.log("Connecté"))
    .catch(error => alert(error.message));
}
window.login = login;

onAuthStateChanged(auth, user => {
  if (user) {
    capsuleForm.style.display = "block";
    authSection.style.display = "none";
    listenCapsules();
  }
});

function saveCapsule() {
  const titre = document.getElementById("titre").value;
  const contenu = document.getElementById("contenu").value;
  addDoc(collection(db, "capsules"), {
    titre,
    contenu,
    date: serverTimestamp(),
    auteur: auth.currentUser.email
  });
}
window.saveCapsule = saveCapsule;

function listenCapsules() {
  onSnapshot(collection(db, "capsules"), snapshot => {
    container.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const html = `<div class="capsule">
        <h3>${data.titre}</h3>
        <p>${data.contenu}</p>
        <p><em>Par: ${data.auteur}</em></p>
        <button onclick="partager('${data.titre} - ${data.contenu}')">Partager 🔗</button>
      </div>`;
      container.innerHTML += html;
    });
  });
}

window.partager = function(texte) {
  const url = encodeURIComponent(texte);
  window.open(`https://wa.me/?text=${url}`, "_blank");
}
