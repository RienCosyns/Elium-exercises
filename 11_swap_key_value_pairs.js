/*

Write a function that swaps the key-value pairs.

*/

var object = { name: "Gabriel", sex: "male", country: "Netherlands" };

function swapKeyValuePairs(object) {
  var newObj = {};
  for (var key in object) {
    var prop = object[key];
    newObj[prop] = key;
  }
  return newObj;
}

console.log(swapKeyValuePairs(object));
// outputs { Gabriel: 'name', male: 'sex', Netherlands: 'country' }
