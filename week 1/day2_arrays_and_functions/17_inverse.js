/*

You're given an array, invert each number in the array.
Negative numbers become positive.
Postive numbers become negative.

Hint: look into the push method of arrays

*/

// function invertNumbers(arr) {
//   return arr.map(function(el) {
//     if (el < 0) {
//       return (el += -(el * 2));
//     } else {
//       return (el -= el * 2);
//     }
//   }, this);
// }

function invertNumbers(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    // var tempVar = arr[i] - arr[i] * 2;
    // newArr.push(tempVar);
    newArr.push(-arr[i]);
  }
  return newArr;
}

console.log(invertNumbers([1, 2, 3, 4, 5])); // outputs [-1,-2,-3,-4,-5]
console.log(invertNumbers([-1, -2, -3, -4, -5])); // outputs [1,2,3,4,5]
console.log(invertNumbers([-4, -5, 1, 2, 3])); // outputs
