
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";

// Configuration Firebase de ton projet Delgado Nexus
const firebaseConfig = {
  apiKey: "AIzaSyDvutb_kZGJbjMq4mDzfAEmXsjmSIaUMe4",
  authDomain: "delgado-nexus-project.firebaseapp.com",
  projectId: "delgado-nexus-project",
  storageBucket: "delgado-nexus-project.firebasestorage.app",
  messagingSenderId: "619502357264",
  appId: "1:619502357264:web:4ae1f227176eff68bd3395",
  measurementId: "G-STNQ4SBJGH"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
