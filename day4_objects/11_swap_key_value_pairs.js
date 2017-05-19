/*

Write a function that swaps the key-value pairs.

*/

var object = {name: 'Gabriel', sex: 'male', country: 'Netherlands'}

function swapKeyValuePairs(object) {
    var keyArr = Object.keys(object);
    var valArr = [];
    var newObj = {};
    for (key in object){
         valArr.push(object[key]);
    }

    for (i in valArr){
        newObj[valArr[i]] = keyArr[i];
    }
    return newObj
}

console.log(swapKeyValuePairs(object))
// outputs { Gabriel: 'name', male: 'sex', Netherlands: 'country' }
