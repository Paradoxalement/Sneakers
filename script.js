// 1 : J'analyse les données
// 2 : Je crée mon modèle de carte en Html
// 3 : Je récupère la donnée et je l'affiche en consoloe
// 4 : Je stock le chemin de la donnée dans la variable
// 5 : Je crée les cartes remplie dynamiquement
// 6 : Je les envois dans le dom
// 7 : CA MARCHE PAS !!!

fetch("sneakers.json")
  .then((rep) => {
    // Lorsque la réponse est reçue, elle est convertie en JSON pour être manipulée en tant qu'objet JavaScript
    return rep.json();
  })
  .then((donnee) => {
    // Une fois les données récupérées et converties, elles sont affichées dans la console pour vérification
    console.log(donnee);

    // Parcourt le tableau de donnee pour récupérer chaque objet (chaque recette)
    donnee.forEach((recette) => {
      // Appelle la fonction 'afficher' pour intégrer les cartes de chaque recette dans la page HTML
      afficher(recette);
    });
  });


 // ** Fonction : afficher **
// Rôle : Insérer dynamiquement une carte de recette dans la page HTML avec des informations et un style spécifique
// Paramètre : "recetteActuelle" - un objet contenant les informations d'une recette
// Retour : Aucun (la fonction manipule directement le DOM)