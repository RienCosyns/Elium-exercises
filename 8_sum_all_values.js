/*

Write a function that sums all the values.

*/

var numberObject = { a: 5, b: 10, c: 10, d: 30, e: 30, f: 100, g: 200 };

function sumAllValues(object) {
  var result = 0;
  //   for (var key in object) {
  //     result += object[key];
  //   }
  //   return result;

  var values = Object.values(object);
  for (var i = 0; i < values.length; i++) {
    result += values[i];
  }
  return result;
}

console.log(sumAllValues(numberObject));
// outputs 385
