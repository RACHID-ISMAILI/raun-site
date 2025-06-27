import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getFirestore, collection, query, onSnapshot, orderBy
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

// ⚠️ UTILISE TA CONFIG FIREBASE EXISTANTE
const firebaseConfig = {
  apiKey: "AIzaSyA1uD-FcGSkeNeU4d1xDbkFwNijgMXR2Yw",
  authDomain: "raun-site.firebaseapp.com",
  projectId: "raun-site",
  storageBucket: "raun-site.appspot.com",
  messagingSenderId: "805528456926",
  appId: "1:805528456926:web:9f83cd5082f8f14e417e65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Création du dashboard live
const dashboard = document.createElement('div');
dashboard.id = 'nexus-dashboard';
dashboard.style = `
  position: fixed; bottom: 10px; right: 10px;
  width: 350px; max-height: 80vh;
  background: rgba(0,0,0,0.85);
  color: #0f0; font-family: monospace;
  padding: 10px; overflow-y: auto;
  border: 2px solid #0f0; border-radius: 8px;
  z-index: 9999;
`;
document.body.appendChild(dashboard);

// Écoute Firestore en temps réel
const messagesRef = collection(db, 'messages');
const q = query(messagesRef, orderBy('date', 'desc'));

onSnapshot(q, snapshot => {
  dashboard.innerHTML = '<h3>NEXUS Live 🔥</h3>';
  snapshot.docs.slice(0, 20).forEach(doc => {
    const data = doc.data();
    const tone = detectTone(data.message);
    const line = document.createElement('div');
    line.style.marginBottom = '4px';
    line.textContent = `[${new Date(data.date).toLocaleTimeString()}] (${tone}) ${data.message}`;
    dashboard.appendChild(line);
  });
});

// Analyse basique du ton (NEXUS Intelligence)
function detectTone(text) {
  const t = text.toLowerCase();
  if (t.includes('menace') || t.includes('alerte')) return '⚠️ Alerte';
  if (t.includes('paix') || t.includes('calme')) return '🕊️ Calme';
  if (t.includes('révolution') || t.includes('wake')) return '🔥 Éveillé';
  return '💬 Normal';
}

// FAIRE FONCTIONNER L’INTERROGATEUR NEXUS
window.askNexus = function(question) {
  const response = generateNexusResponse(question);
  alert(`NEXUS Core répond :\n\n"${response}"`);
};

function generateNexusResponse(q) {
  // Logique simple – à évoluer via GPT API si tu veux plus tard
  if (q.toLowerCase().includes('secret')) return 'Je ne peux pas tout dévoiler... mais la porte s’ouvre.';
  if (q.toLowerCase().includes('covid')) return 'Regarde les documents du Dr Jonas… la vérité s’y cache.';
  return 'Ta question touche à l’océan de vérité... reste conscient.';
}
