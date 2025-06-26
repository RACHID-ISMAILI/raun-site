import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0R0IFgjCk3gWgVxK3-WnfLubhAqsKbOM",
  authDomain: "raun-network.firebaseapp.com",
  projectId: "raun-network",
  storageBucket: "raun-network.appspot.com",
  messagingSenderId: "541416001018",
  appId: "1:541416001018:web:df564a55255d4615206843"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("capsuleForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const capsule = {
    rappel: document.getElementById("rappel").value,
    alignement: document.getElementById("alignement").value,
    projection: document.getElementById("projection").value,
    titre: document.getElementById("titre").value,
    timestamp: new Date()
  };

  try {
    await addDoc(collection(db, "capsules"), capsule);
    alert("✅ Capsule enregistrée !");
    e.target.reset();
  } catch (error) {
    console.error("Erreur :", error);
    alert("❌ Échec de l'enregistrement");
  }
});
