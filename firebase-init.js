// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "VOTRE-API-KEY",
  authDomain: "votre-projet.firebaseapp.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "SENDER-ID",
  appId: "APP-ID"
};

initializeApp(firebaseConfig);
