const firebaseConfig = {
  apiKey: "AIzaSyD0R0IFgjCk3gWgVxK3-WnfLubhAqsKbOM",
  authDomain: "raun-network.firebaseapp.com",
  projectId: "raun-network",
  storageBucket: "raun-network.appspot.com",
  messagingSenderId: "541416001018",
  appId: "1:541416001018:web:df564a55255d4615206843",
  measurementId: "G-LVV48NKDF8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging
  .requestPermission()
  .then(() => messaging.getToken())
  .then(token => console.log("FCM Token →", token))
  .catch(err => console.error("FCM Permission error :", err));
