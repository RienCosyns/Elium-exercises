/*

With objects, the == or === operator does not compare the actual values of their properties.

Write a function deepComparison that takes two values (strings, integers, objects, ...) 
and returns true only if they are truly equal.

Exception: typeof null also produces 'object'.

HINTS:

-Arrays are objects.
-Look into recursivity. You will need a recursive call to deepComparison.

*/

// without recursion

// function deepComparison(a, b) {}
function deepComparison(a, b) {
  if (typeof a === typeof b && JSON.stringify(a) == JSON.stringify(b)) {
    return true;
  } else {
    return false;
  }
}

// with recursionfunction deepComparison(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propertiesInA = 0, propertiesInB = 0;

  for (var prop in a)
    propertiesInA += 1;

  for (var prop in b) {
    propertiesInB += 1;
    if (!(prop in a) || !deepComparison(a[prop], b[prop]))
      return false;
  }

  return propertiesInA == propertiesInB;
}

var obj = { here: { is: "an" }, object: 2 };

var obj = { here: { is: "an" }, object: 2 };
console.log(deepComparison(obj, obj));
// outputs true
console.log(deepComparison(obj, { here: 1, object: 2 }));
// outputs false
console.log(deepComparison(obj, { here: { is: "an" }, object: "2" }));
// outputs true
console.log(deepComparison([1, 2], [1, 2]));
// outputs true
console.log(deepComparison([1], [1, 2]));
// outputs false
console.log(deepComparison("string", "string"));
// outputs true
console.log(deepComparison("string", "another string"));
// outputs false
console.log(deepComparison(1, 1));
// outputs true
console.log(deepComparison(1, 2));
// outputs false
