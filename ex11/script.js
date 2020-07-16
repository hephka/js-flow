// activer le mode strict
"use strict"

/* afficher dans la console :

*
**
***
****
*****
******
*******
********
*********
**********

*/

let message = '*'

/*
for (let count = 1; count <= 10; count ++) {
    console.log(message)
    message = message + "*"
}
*/

for (let i = 1; i < 11; i += 1) {
    console.log("*".repeat(i))
}