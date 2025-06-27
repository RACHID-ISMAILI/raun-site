import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvutb_kZGJbjMq4mDzfAEmXsjmSIaUMe4",
  authDomain: "delgado-nexus-project.firebaseapp.com",
  projectId: "delgado-nexus-project",
  storageBucket: "delgado-nexus-project.appspot.com",
  messagingSenderId: "619502357264",
  appId: "1:619502357264:web:4ae1f227176eff68bd3395",
  measurementId: "G-STNQ4SBJGH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.saveCapsule = async function (e) {
  e.preventDefault();
  const titre = document.getElementById('titre').value;
  const rappel = document.getElementById('rappel').value;
  const alignement = document.getElementById('alignement').value;
  const projection = document.getElementById('projection').value;

  try {
    await addDoc(collection(db, "capsules"), {
      titre, rappel, alignement, projection,
      date: new Date().toISOString()
    });
    alert("Capsule enregistrée !");
  } catch (error) {
    alert("Erreur: " + error.message);
  }
}