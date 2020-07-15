"use strict"
const question = "Quel est le nom de ton école ?"
let answer
// pose la question jusqu'au moment ou l'utilisateur entre Alyra (la reponse est 'Alyra')
// exprime ton enthousiasme

/*
do {
    answer = prompt(question)
} while (answer !== "Alyra")

*/

while (answer !== "Alyra") {
    answer = prompt(question)
}

alert("Yay!!! On est à la même école!")