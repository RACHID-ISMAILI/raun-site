const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);

// Pour éviter les erreurs si Messaging n’est pas encore activé
try {
  const messaging = firebase.messaging();
} catch (e) {
  console.warn("Firebase Messaging non activé.");
}
