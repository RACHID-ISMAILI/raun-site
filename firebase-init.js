
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvutb_kZGJbjMq4mDzfAEmXsjmSIaUMe4",
  authDomain: "delgado-nexus-project.firebaseapp.com",
  projectId: "delgado-nexus-project",
  storageBucket: "delgado-nexus-project.firebasestorage.app",
  messagingSenderId: "619502357264",
  appId: "1:619502357264:web:4ae1f227176eff68bd3395",
  measurementId: "G-STNQ4SBJGH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

document.getElementById("login-btn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const pw = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pw)
    .then(() => {
      document.getElementById("admin-section").style.display = "block";
      initCapsules();
    })
    .catch(err => alert("Erreur : " + err.message));
});

function initCapsules() {
  const list = document.getElementById("capsule-list");
  onSnapshot(collection(db, "capsules"), (snapshot) => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const div = document.createElement("div");
      div.className = "capsule";
      div.innerHTML = `<strong>${data.title}</strong><p>${data.content}</p>
        <button onclick="navigator.share ? navigator.share({text: data.content}) : alert('Partage non supporté')">Partager</button>
        <button onclick="deleteCapsule('${doc.id}')">🗑 Supprimer</button>`;
      list.appendChild(div);
    });
  });
}

document.getElementById("add-capsule").addEventListener("click", async () => {
  const title = document.getElementById("capsule-title").value;
  const content = document.getElementById("capsule-content").value;
  if (title && content) {
    await addDoc(collection(db, "capsules"), {
      title,
      content,
      date: new Date().toISOString()
    });
  }
});

window.deleteCapsule = async function(id) {
  await deleteDoc(doc(db, "capsules", id));
};
