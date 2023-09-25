// Fonction pour calculer la longueur de la phrase
function LngrPhrase(phrase) {
    return phrase.length;
}

// Fonction pour calculer le nombre de mots dans la phrase
function NbrMots(phrase) {
    const mots = phrase.split(' ');
    return mots.length;
}

// Fonction pour calculer le nombre de voyelles dans la phrase
function NbrVoyelles(phrase) {
    const voyelles = "aeiouyAEIOUY";
    let nombreVoyelles = 0;

    for (let i = 0; i < phrase.length; i++) {
        const caractere = phrase[i];
        if (voyelles.includes(caractere)) {
            nombreVoyelles++;
        }
    }

    return nombreVoyelles;
}

// Saisie de la phrase
const phrase = prompt("Entrez une phrase :");

// Calculs
const longueur = LngrPhrase(phrase);
const nombreMots = NbrMots(phrase);
const nombreVoyelles = NbrVoyelles(phrase);

// Affichage des résultats
console.log("Longueur de la phrase :", longueur);
console.log("Nombre de mots :", nombreMots);
console.log("Nombre de voyelles :", nombreVoyelles);
