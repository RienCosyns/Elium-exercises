/*

As we've seen at 'guess the output', we cannot simply copy object1 like this:

var object1 = {name: 'Anja'}
var object2 = object1


If we make modifications to object2, it is actually object1 that's changing.

object2.name  = 'Laurens'
console.log(object1.name)

Outputs Laurens.

Therefore, write a function that returns an exact copy of object1

*/

<<<<<<< HEAD
var object1 = {name: 'Anja'}

function copyObject(object1) {
<<<<<<< HEAD
    var newObj = {};
    for (key in object1){
        newObj[key] = object1[key];
    }
    return newObj;
=======

	var object = Object.assign({},object1)
=======
var object1 = { name: "Anja" };
>>>>>>> e5fce225c5bb5e35aac65aefc8acecab649baec6

function copyObject(object1) {}

<<<<<<< HEAD
>>>>>>> 97bd3dcadb5839d634a911cb087745ec76f2d4c8
}

object2 = copyObject(object1)
console.log(object2)
// outputs { name: 'Anja' }
object2.name = 'Laurens'
console.log(object1.name)
console.log(object2);
=======
object2 = copyObject(object1);
console.log(object2);
// outputs { name: 'Anja' }
object2.name = "Laurens";
console.log(object1.name);
>>>>>>> e5fce225c5bb5e35aac65aefc8acecab649baec6
// outputs Anja
