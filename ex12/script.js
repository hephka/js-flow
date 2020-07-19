"use strict"
//on va créer une simple calculatrice qui fait l'addition
let a, b
const question1 = "Entrez votre 1er chiffre"
const question2 = "Entrez votre 2nd chiffre"

/* demande a jusqu'au moment où tu obtiennes une valeur numérique */
/* demande b jusqu'au moment où tu obtiennes une valeur numérique */
do {
    a = (Number(prompt(question1)))
} while (isNaN(a))
do {
    b = (Number(prompt(question2)))
} while (isNaN(b))

/* fais l'addition et affiche le résultat */
alert(`Le résultat de ton addition est: ${a+b} `)
console.log(a, b, a+b)