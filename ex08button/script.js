"use strict"

function ask() {
    const question = "Quel âge as tu ?"
let age, message;
do {
    age = prompt(question)
} while (isNaN(age))
message = `Merci, nous avons noté que tu as ${age}.`

alert(message)
}