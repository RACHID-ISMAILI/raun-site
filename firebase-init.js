// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvutb_kZGJbjMq4mDzfAEmXsjmSIaUMe4",
  authDomain: "delgado-nexus-project.firebaseapp.com",
  projectId: "delgado-nexus-project",
  storageBucket: "delgado-nexus-project.appspot.com",
  messagingSenderId: "619502357264",
  appId: "1:619502357264:web:4ae1f227176eff68bd3395",
  measurementId: "G-STNQ4SBJGH"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
