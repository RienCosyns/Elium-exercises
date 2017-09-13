/*

Complete the function so that it squares each number and then sums it together.

*/

function squareSum(arr) {
  var newArr = arr.map(function(el) {
    return Math.pow(el, 2);
  });

  return newArr.reduce(function(prevVal, currVal) {
    return prevVal + currVal;
  });
}

console.log(squareSum([1, 2, 2]));
// outputs 9
