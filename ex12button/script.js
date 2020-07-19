"use strict"

function ask() {
    let a, b
const question1 = "Entrez votre 1er chiffre"
const question2 = "Entrez votre 2nd chiffre"
do {
    a = (Number(prompt(question1)))
} while (isNaN(a))
do {
    b = (Number(prompt(question2)))
} while (isNaN(b))
alert(`Le résultat de ton addition est: ${a+b} `)
console.log(a, b, a+b)
}