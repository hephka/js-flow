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
let count

for (count=1; count <= 10; count++) {
    console.log(message)
    message = message+"*"
}