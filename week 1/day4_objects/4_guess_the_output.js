/*

Guess the output.
Replace the '??' with what you think the output will be.

*/

var object1 = {name: 'Anja'}
var object2 = {name: 'Anja'}
var object3 = object1

console.log(object1 === object2)
<<<<<<< HEAD
// outputs ?? false
console.log(object1 === object3)
// outputs ?? true

object1.name = 'Nisha'
console.log(object3.name)
// outputs ?? Nisha
=======
// outputs false
console.log(object1 === object3)
// outputs true

object1.name = 'Nisha'
console.log(object3.name)
// outputs Nisha
>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
