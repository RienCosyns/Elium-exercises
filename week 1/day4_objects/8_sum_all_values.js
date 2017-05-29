/*

Write a function that sums all the values.

*/

var numberObject = {a: 5, b: 10, c: 10, d: 30, e: 30, f: 100, g: 200}


function sumAllValues(object) {
<<<<<<< HEAD
    var result = 0;
    for (key in object){
        result += object[key];
    }
    return result
=======

	var sum = 0

	for (var key in object) {
		sum = sum + object[key]
	}
	
	return sum

>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
}

console.log(sumAllValues(numberObject))
// outputs 25
