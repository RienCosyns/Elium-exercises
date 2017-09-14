/*

If the variable 'key' is actually a valid key of the object,
print out 'true'. If not print out 'false'.

*/

var key = "continent";
var object = { name: "Kirill", age: 27, country: "South-Africa" };

function isKeyinObject(key, object) {
  // if (key in object){
  //     return true;
  // } else {
  //     return false;
  // }
  return object.hasOwnProperty(key);
}

console.log(isKeyinObject(key, object));
