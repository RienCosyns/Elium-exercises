/*

If the variable 'key' is actually a valid key of the object,
print out 'true'. If not print out 'false'.

*/

<<<<<<< HEAD
<<<<<<< HEAD
var key = 'ehe'
var object = {name: 'Kirill', age: 27, country: 'South-Africa'}

function check (obj, key){
    return obj[key] ? true : false;
}

console.log(check(object, key));
=======
var key = 'continent'
var object = {name: 'Kirill', age: 27, country: 'South-Africa'}

if (key in object) {
	console.log(true)
} else {
	console.log(false)
}
>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
=======
var key = "continent";
var object = { name: "Kirill", age: 27, country: "South-Africa" };

function isKeyinObject(key, object) {}

console.log(isKeyinObject(key, object));
>>>>>>> e5fce225c5bb5e35aac65aefc8acecab649baec6
