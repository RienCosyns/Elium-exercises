/*

Print out every value of all key-value pairs to the console.

*/

var object = { name: "Rien", sex: "male", age: 28, country: "Belgium" };

for (var key in object) {
  console.log(object[key]);
}

var values = Object.values(object);
for (var i = 0; i < values.length; i++) {
  console.log(values[i]);
}
/*
output:

Rien
male
28
Belgium

*/
