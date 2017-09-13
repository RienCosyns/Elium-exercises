/*

Cathrin lives in opposite land.
Everything she writes comes out wrong.

Write a function that takes a string and outputs it the way Cathrin would
write it.

*/

function alternating(string) {
  var newstring = "";
  for (var i = 0; i < string.length; i++) {
    // if lowercase make uppercase, if upper make lower
    if (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90) {
      var char = string[i].toLowerCase();
      newstring += char;
    } else if (
      string[i].charCodeAt(0) >= 97 &&
      string[i].charCodeAt(0) <= 122
    ) {
      var char = string[i].toUpperCase();
      newstring += char;
    } else {
      newstring += string[i];
    }
  }
  return newstring;
}
console.log(alternating("I am Prajjwal and I do everything wrong"));
// outputs i AM pRAJJWAL AND i DO EVERYTHING WRONG
A = 65;
Z = 90;
a = 97;
z = 122;
