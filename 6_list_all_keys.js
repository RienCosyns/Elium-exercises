/*

Print out every key of all key-value pairs to the console.

*/

var object = { name: "Cathrin", sex: "female", age: 25, country: "Germany" };

// for (var key in object) {
//   console.log(key);
// }

// var keys = Object.keys(object);
// for (var i = 0; i < keys.length; i++) {
//   console.log(keys[i]);
// }

var entries = Object.entries(object);
console.log(entries);
/*
output:

name
sex
age
country

*/
