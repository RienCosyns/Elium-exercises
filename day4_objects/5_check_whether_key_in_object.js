/*

If the variable 'key' is actually a valid key of the object,
print out 'true'. If not print out 'false'.

*/

var key = 'ehe'
var object = {name: 'Kirill', age: 27, country: 'South-Africa'}

function check (obj, key){
    return obj[key] ? true : false;
}

console.log(check(object, key));