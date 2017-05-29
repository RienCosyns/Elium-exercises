/*

Write a function that adds a key-value pair to an existing object.
The function takes 3 arguments.

1) The object that we will modify
2) The key of the new key-value pair that we will add to the object
3) The value of the new key-value pair that we will add to the object.

*/

var object = {name: 'Frankyln'}

function addKeyValuePairToObject(object, key, value) {
<<<<<<< HEAD
    object[key] = value;
    return object;
=======
	object[key] = value
	return object
>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
}

console.log(addKeyValuePairToObject(object, 'country', 'Belgium'))
// outputs {name: 'Frankyln', country: 'Belgium'}
