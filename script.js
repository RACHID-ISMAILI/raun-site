const db = firebase.firestore();

document.getElementById('capsuleForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const titre = document.getElementById('titre').value;
  const rappel = document.getElementById('rappel').value;
  const alignement = document.getElementById('alignement').value;
  const projection = document.getElementById('projection').value;

  db.collection("capsules").add({
    titre,
    rappel,
    alignement,
    projection,
    date: new Date()
  })
  .then(() => {
    alert("Capsule créée avec succès !");
    document.getElementById('capsuleForm').reset();
  })
  .catch((error) => {
    console.error("Erreur lors de la création :", error);
    alert("Une erreur est survenue.");
  });
});
