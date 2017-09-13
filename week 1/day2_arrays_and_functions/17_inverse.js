/*

You're given an array, invert each number in the array.
Negative numbers become positive.
Postive numbers become negative.

Hint: look into the push method of arrays

*/

function invertNumbers(arr) {
  return arr.map(function(el) {
    if (el < 0) {
      return (el += -(el * 2));
    } else {
      return (el -= el * 2);
    }
  }, this);
}

console.log(invertNumbers([1, 2, 3, 4, 5])); // outputs [-1,-2,-3,-4,-5]
console.log(invertNumbers([-1, -2, -3, -4, -5])); // outputs [1,2,3,4,5]
console.log(invertNumbers([-4, -5, 1, 2, 3])); // outputs
