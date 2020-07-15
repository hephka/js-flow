"use strict"
const start = 31
const end = 150
const increment = 7
/* affiche les nombres de start au end, essaye while, do while et for */

/*
let step = start
while (step <= end) {
    console.log(step)
    step += increment
}
*/

/*
let step = start
do {
    console.log(step)
    step += increment
} while (step <= end)
*/

for(let step = start; step <= end; step += increment) {
    console.log(step)
}