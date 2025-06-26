const db = firebase.firestore();

document.getElementById("capsuleForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const capsule = {
    titre: e.target.titre.value,
    rappel: e.target.rappel.value,
    alignement: e.target.alignement.value,
    projection: e.target.projection.value,
    timestamp: firebase.firestore.Timestamp.now()
  };

  try {
    await db.collection("capsules").add(capsule);
    alert("✅ Capsule enregistrée !");
    e.target.reset();
  } catch(err) {
    console.error("Error saving capsule:", err);
    alert("❌ Échec de l'enregistrement");
  }
});
