/*

Print out every value of all key-value pairs to the console.

*/

var object = {name: 'Rien', sex: 'male', age: 28, country: 'Belgium'}

<<<<<<< HEAD
for (key in object){
    console.log(object[key]);
}
=======

for (var key in object) {
	console.log(object[key])
}


>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
/*
output:

Rien
male
28
Belgium

*/
