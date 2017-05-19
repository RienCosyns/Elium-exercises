/*

Write a function that when given an object, returns a new object, with the keys
mirrored.

*/

var object = {one: 1, two: 2, three: 3, four: 4, five: 5}

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

	var newObject = {}

	var reversedArrayOfKeys = Object.keys(object).reverse()

	//[ 'five', 'four', 'three', 'two', 'one' ]

	for (var i = 0; i < reversedArrayOfKeys.length; i++) {
		newObject[reversedArrayOfKeys[i]] = object[reversedArrayOfKeys[i]]
	}

	return newObject

}

console.log(mirror(object))
// outputs { five: 5, four: 4, three: 3, two: 2, one: 1 }
