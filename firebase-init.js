// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
// Tu peux importer Firestore plus tard ici si besoin

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvutb_kZGJbjMq4mDzfAEmXsjmSIaUMe4",
  authDomain: "delgado-nexus-project.firebaseapp.com",
  projectId: "delgado-nexus-project",
  storageBucket: "delgado-nexus-project.appspot.com",
  messagingSenderId: "619502357264",
  appId: "1:619502357264:web:4ae1f227176eff68bd3395"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
console.log("🔥 Firebase Nexus Initialisé");
