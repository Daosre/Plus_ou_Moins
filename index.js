//À la fin du jeu, proposer : "Souhaites-tu rejouer ? (oui/non)"

//Définir une fourchette personnalisée
//Demander à l’utilisateur de choisir une borne minimale et une borne maximale en début de partie

//Gérer les cas invalides
//Si l’utilisateur entre autre chose qu’un nombre, afficher une alerte : "Ce n'est pas un nombre valide ! Essaie encore."

//Mode difficile
//Limiter le nombre d’essais à 10 maximum.

//Si le joueur perd : "Dommage ! Le nombre mystère était (nombre)."

// 1. Générer un nombre aléatoire
// 2. Initialiser un compteur de tentatives
// 3. Boucle tant que le nombre n’est pas trouvé
// 4. Comparer et afficher le bon message
// 5. Afficher le nombre total de tentatives
// 6. Bonus : proposer de rejouer

//la boucle de la mort
//let num = 0;
//while (num != answer) {
  //  num = prompt("Trouve le nombre entre 1 et 100:");
   // function userIntInput() {
   //     console.log(num);
   //     if (answer === parseInt(num, 10)) {
   //         console.log("Bravo ! C'était bien " + answer + " !");
   //     }
        //else prompt("FAUX! réessaie : Trouve le nombre entre 1 et 100:");
        //else console.log("Dommage ! Le nombre mystère était " + answer + " !");
    //}
    //userIntInput();
//}


// Fonction principale du jeu
function Game() {
    
    min = prompt("Choisissez le nombre minimum :");
    max = prompt("Choisissez le nombre maximum :");

    // Génère le nombre à trouver entre 1 et 100
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let answer = getRandomInt(min, max);

    console.log(answer); 
    let tries = 10; // Nombre d'essais maximum
    let userIntInput;
    let found = false;
    
    // Boucle de jeu
    while (tries > 0) {
        userIntInput = prompt("Devinez le nombre entre " + min + " et " + max + " (Essais restants: " + tries + ")");
        
        // Vérification si l'entrée est un nombre
        if (isNaN(userIntInput)) {
            alert("Ce n'est pas un nombre valide ! Essaie encore.");
            continue;
        }
        
        userIntInput = parseInt(userIntInput);
        tries--;
        let triesPlayer = 10 - tries;

        if (userIntInput === answer) {
            alert("Bravo ! Vous avez trouvé le nombre mystère " + answer + " en " + triesPlayer + " essais.");
            found = true;
            break;
        } else if (userIntInput < answer) {
            alert("Trop petit ! Essaye encore.");
        } else {
            alert("Trop grand ! Essaye encore.");
        }
    }
    
    // Si le joueur a épuisé ses essais
    if (!found) {
        alert("Dommage ! Le nombre mystère était " + answer);
    }
    
    // Proposer de rejouer
    if (confirm("Souhaites-tu rejouer ? (OK pour oui, Annuler pour non)")) {
        Game();
    } else {
        alert("Merci d'avoir joué ! À bientôt.");
    }
}

// Lancer le jeu
Game();

//a faire
//Demander à l’utilisateur de choisir une borne minimale et une borne maximale en début de partie
