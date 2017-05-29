/*

With objects, the == or === operator does not compare the actual values of their properties.

Write a function deepComparison that takes two values (strings, integers, objects, ...) 
and returns true only if they are truly equal.

Exception: typeof null also produces 'object'.

HINTS:

-Arrays are objects.
-Look into recursivity. You will need a recursive call to deepComparison.

*/

/// base case: when property is no longer an object
// in that case . compare type
// go one closer to base case: for key in object...



function deepComparison(a, b) {
    // base function: if the values are not objects, compare them and return true or false
    // otherwise go to the recursive function
    if (typeof(a) !== "object" || typeof(b) !== "object"){
        if (a == b){
            return true
        }else{
            return false
        }
    }else {
        // check if the keys in obj1 exist in obj2
        var aInB = true;
        for (key in a){  // is it in b?
            if (key in b){
                aInB = true;
            }else{
                aInB = false;
            }
        } 
        // check if keys in obj2 exist in obj1
        var bInA = true;
        for (key in b){  // is it in a?
            if (key in a){
                bInA = true
            }else{
                aInB = false
            }
        }     
        // initiate a boolean "result" to collect booleans from recursive function calls
        var result = true;
        // if keys are present in both objects, call the function recursively
        if (aInB && aInB){
            for (key in a){
                // store the result in a variable
                result = result && deepComparison(a[key], b[key])
            }   
            // return the result of the recursive function calls
            return result
        }else {
            // keys are not present in both objects so return false
            return false
        }
    }
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepComparison(obj, obj));
// outputs true
console.log(deepComparison(obj, {here: 1, object: 2}));
// outputs false
console.log(deepComparison(obj, {here: {is: "an"}, object: 2}));
// outputs true
console.log(deepComparison([1,2], [1,2]));
// outputs true
console.log(deepComparison([1], [1,2]))
// outputs false
console.log(deepComparison('string', 'string'))
// outputs true
console.log(deepComparison('string', 'another string'))
// outputs false
console.log(deepComparison(1, 1))
// outputs true
console.log(deepComparison(1, 2))
// outputs false
