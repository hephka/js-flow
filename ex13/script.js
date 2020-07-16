// mode strict
"use strict"

let result = 0

// calculer la somme de 1 jusqua'a 10
for (let i = 1; i <= 10; i ++) {
    result += i
}

// utilise console.log pour afficher le résultat
console.log(result)

// calculer la somme de 1 jusqua'a 16
for (let i = 1; i <= 16; i ++) {
    result += i
}

// utilise console.log pour afficher le résultat
console.log(result)

// déclarer des variable start et end
const valeur1 = "Valeur d'entrée"
const valeur2 ="Valeur de sortie"
const start = Number(prompt(valeur1))
const end = Number(prompt(valeur2))

// calculer la somme de start jusqua'à end
for (let i = start; i <= end; i ++) {
    result += i
}
// utilise console.log pour afficher le résultat
console.log(result)