importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD0R0IFgjCk3gWgVxK3-WnfLubhAqsKbOM",
  authDomain: "raun-network.firebaseapp.com",
  projectId: "raun-network",
  storageBucket: "raun-network.appspot.com",
  messagingSenderId: "541416001018",
  appId: "1:541416001018:web:df564a55255d4615206843",
  measurementId: "G-LVV48NKDF8"
});

const messaging = firebase.messaging();
