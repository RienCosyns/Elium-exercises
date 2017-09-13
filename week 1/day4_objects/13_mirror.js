/*

Write a function that when given an object, returns a new object, with the keys
mirrored.

*/

var object = { one: 1, two: 2, three: 3, four: 4, five: 5 };

<<<<<<< HEAD
function mirror(object) {
    var keyArr = Object.keys(object)
    var valArr = [];
    var newObj = {};
    for (key in object){
        valArr.push(object[key]);
    }

    for (var i = keyArr.length - 1; i >= 0; i--){
        newObj[keyArr[i]] = valArr[i];
    }
    return newObj;
=======
function mirror(obj) {}
>>>>>>> e5fce225c5bb5e35aac65aefc8acecab649baec6

console.log(mirror(object));
// outputs { five: 5, four: 4, three: 3, two: 2, one: 1 }
