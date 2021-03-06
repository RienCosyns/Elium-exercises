/*

Challenge:

Given are are sum, subtract and multiply functions.

Look at the console.logs. Make a function called operations

Hints:

-look into 'arguments'
-use the spread operator
-look into the array reduce method

*/

console.log(operations(5,5,5,5,10,10,sum))
//outputs 40
console.log(operations(10,5,subtract))
// outputs 5
console.log(operations(10,10,5,multiply))
// outputs 500


function operations(args) {
	args = new Array(...arguments);
	var func = args.pop();
	return args.reduce(function(prev, curr){
		return func(prev, curr);
	})

}

function sum(a,b) {
	{return a+b}
}

function subtract(a,b) {
	{return a-b}
}

function multiply(a,b) {
	{return a*b}
}
