// mode strict
"use strict"

let number
let somme = 0

// calculer la somme de 1 jusqua'a 10
for (number = 1; number <= 10; number ++) {
    somme = somme + number
}

// utilise console.log pour afficher le résultat
console.log(somme)

// calculer la somme de 1 jusqua'a 16
for (number = 1; number <= 16; number ++) {
    somme = somme + number
}

// utilise console.log pour afficher le résultat
console.log(somme)

// déclarer des variable start et end
const valeur1 = "Valeur d'entrée"
const valeur2 ="Valeur de sortie"
let start = Number(prompt(valeur1))
let end = Number(prompt(valeur2))

// calculer la somme de start jusqua'à end
for (number = start; number <= end; number ++) {
    somme = start + number
}
// utilise console.log pour afficher le résultat
console.log(somme)