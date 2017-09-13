/*

The calculator app on my windows machine doesn't want to start up anymore.
Write a basic calculator app that takes 3 arguments,
the operation and 2 integer.

*/

function calculator(operation, n1, n2) {
  return eval(`${n1}${operation}${n2}`);
  var op = {
    "+": function(n1, n2) {
      return n1 + n2;
    },
    "-": function(n1, n2) {
      return n1 - n2;
    },
    "*": function(n1, n2) {
      return n1 * n2;
    },
    "/": function(n1, n2) {
      return n1 / n2;
    }
  };

  return op[operation](n1, n2);
}

function calculator(operation, n1, n2) {
  var result = 0;
  switch (operation) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;
    case "*":
      result = n1 * n2;
      break;
    case "/":
      result = n1 / n2;
      break;
  }
  return result;
}

console.log(calculator("+", 1, 2));
// output 3
console.log(calculator("-", 1, 2));
// output -1
console.log(calculator("*", 1, 2));
// output 2
console.log(calculator("/", 1, 2));
// output 0.5
