// Sélectionnez le bouton par son ID
const boutonLike = document.getElementById("like");

// Initialisez une variable d'état
let etat = "j-aime"; // "j-aime" par défaut

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
boutonLike.addEventListener("click", function() {
  if (etat === "j-aime") {
    boutonLike.textContent = "Je n'aime pas"; // Changez le texte
    etat = "je-naime-pas"; // Changez l'état
  } else {
    boutonLike.textContent = "J'aime"; // Changez le texte de retour
    etat = "j-aime"; // Revenez à l'état initial
  }
});