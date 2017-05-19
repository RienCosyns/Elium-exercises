/*

Write a function modifyObject that takes 3 arguments and returns a new object.

Arguments:
1)  An object that we would like to add to
2)  An object that dictates what needs to be added
3)  A boolean value that specifies whether the values of object1 should be modified or not.
    If true, the values of object1 should be overwritten by the values of object2
    If false, the values of object1 cannot be modified.

*/

var object1 = {a: 1, b: 2, c: 3}
var object2 = {b: 'second', c: 'third', d: 'fourth'}

function modifyObject(object1, object2, boolean) {
    var myObj = Object.assign({}, object1);
	var myObj2 = Object.assign({}, object2);
	if (boolean === undefined){
		boolean = true;
	}
	if (boolean === true){
		console.log("Overwrite mode set")
		// loop through the keys
		for (key in myObj2){
			// if the key exists in the second object	
			myObj[key] = myObj2[key];
		}
	}else {
		console.log("Overwrite mode disabled")
		// only add the pair existing in object 2 to object 1
		for (key in myObj2){
			if (key in myObj){
				continue;
			}else{
				myObj[key] = myObj2[key]
			}
		}
	}
	// myObj.c = myObj2.c;
	return myObj;
}

console.log(modifyObject(object1, object2, true))
// outputs { a: 1, b: 'second', c: 'third', d: 'fourth' }
console.log(modifyObject(object1, object2, false))
// outputs { a: 1, b: 2, c: 3, d: 'fourth' }
