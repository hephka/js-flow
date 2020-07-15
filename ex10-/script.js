"use strict"

let number
let start
let n
const messagestart = "Donner un nombre entier de départ"
const messageend = "Donner un nombre entier de fin"
start = prompt(messagestart)
n = prompt(messageend)
/*
// afficher les nombres de 0 à 10 et leurs carrés
for(number = 0; number <= 10; number ++) {
    console.log(number, number*number)
}
*/

/*
// afficher les nombres de 0 à 16 et leurs carrés
for(number = 0; number <= 16; number ++) {
    console.log(number, number*number)
}
*/

/*
// déclarer une variable n, afficher les nombres de 0 à n et leurs carrés
for(number = 0; number <= n; number ++) {
    console.log(number, number*number)
}
*/

// déclarer une variable start, afficher les nombres de start à n et leurs carrés
for(number = start; number <= n; number ++) {
    console.log(number, Math.pow(number, 2))
}