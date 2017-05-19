/*

Print out every key of all key-value pairs to the console.

*/

var object = {name: 'Cathrin', sex: 'female', age: 25, country: 'Germany'}
<<<<<<< HEAD
for (key in object){
    console.log(key);
=======

for (var key in object) {
	console.log(key)
>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
}

/*
output:

name
sex
age
country

*/

/*
var key = Object.keys(object)

for (var i = 0; i < key.length; i++) {
	console.log(key[i])
}
*/

