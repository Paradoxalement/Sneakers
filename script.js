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
    donnee.produits.forEach((chaussure) => {
      // Appelle la fonction 'afficher' pour intégrer les cartes de chaque sneakers dans la page HTML
      afficher(chaussure);
    });

    donnee.avantagesClients.forEach(avantage => {
        afficherAvantage(avantage)
    });
    
    donnee.services.forEach(services => {
        afficherservices(services)
    });

    donnee.temoignages.forEach(temoignages => {
        affichertemoignages(temoignages)

    })




    let acrocheContainer = document.querySelector("#accroche")
 acrocheContainer.innerHTML += donnee.texteAppelAction
  });

function afficherAvantage(avantage) {
    let avantagesContainer = document.querySelector("#avantagesC")
       avantagesContainer.innerHTML+= `
       
       <div class="carteclient " >
        <img src="assets/${avantage.image}" alt="" class=""> 
        <p>${avantage.avantage}</p>
        </div>
        `
}


function afficher(prod) {
    let avantagesContainer = document.querySelector("#produitsC")
        avantagesContainer.innerHTML += `
        
         
                <div class="carte">
                    <img src="${prod.imageUrl}"
                        alt="" class="w35">
                    <div class="padding10">

                        <h4>${prod.nom}</h4>
                        <p>${prod.description}</p>
                    </div>
                </div>
 `}

 function afficherservices(service) {
    let avantagesContainer = document.querySelector("#servicesS")
        avantagesContainer.innerHTML += `
        <div class="carteService flex spaceBetween"><a href=""></a>
                    <img src="assets/${service.image}" alt="">
                    <div class="padding10 alignCenter flex spaceBetween">
                    <h3>${service.nom}</h3>
                    <p>${service.description}</p>
                      </div>  
                </div>
                `  
                }
    function affichertemoignages(temoignages) {
        let avantagesContainer = document.querySelector("#temoignagesC")
            avantagesContainer.innerHTML +=
        `
              <div>
                    <div>
                        <p>${temoignages.prenom}</p>
                        <p>${temoignages.note}</p>
                        </div>
                        <p>${temoignages.typeExperience}</p>
                    <p>${temoignages.commentaire}</p>
                </div>
                `
                }

        
        