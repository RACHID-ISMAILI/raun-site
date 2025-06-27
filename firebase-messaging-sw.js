importScripts("https://www.gstatic.com/firebasejs/10.12.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA1uD-FcGSkeNeU4d1xDbkFwNijgMXR2Yw",
  authDomain: "raun-site.firebaseapp.com",
  projectId: "raun-site",
  storageBucket: "raun-site.appspot.com",
  messagingSenderId: "805528456926",
  appId: "1:805528456926:web:9f83cd5082f8f14e417e65"
});

const messaging = firebase.messaging();
