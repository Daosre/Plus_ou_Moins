//À la fin du jeu, proposer : "Souhaites-tu rejouer ? (oui/non)"

//Définir une fourchette personnalisée
//Demander à l’utilisateur de choisir une borne minimale et une borne maximale en début de partie

//Gérer les cas invalides
//Si l’utilisateur entre autre chose qu’un nombre, afficher une alerte : "Ce n'est pas un nombre valide ! Essaie encore."

//Mode difficile
//Limiter le nombre d’essais à 10 maximum.

//Si le joueur perd : "Dommage ! Le nombre mystère était 42."

// 1. Générer un nombre aléatoire
// 2. Initialiser un compteur de tentatives
// 3. Boucle tant que le nombre n’est pas trouvé
// 4. Comparer et afficher le bon message
// 5. Afficher le nombre total de tentatives
// 6. Bonus : proposer de rejouer

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
 
let answer = (getRandomInt(1, 101));
console.log(answer); 


let num = prompt("Trouve le nombre entre 1 et 100:");
function userIntInput() {
    console.log(num);
    if (answer === parseInt(num, 10)) {
        console.log("Bravo ! C'était bien " + answer + " !");
    }
    else console.log("Dommage ! Le nombre mystère était " + answer + " !");
}

userIntInput();

