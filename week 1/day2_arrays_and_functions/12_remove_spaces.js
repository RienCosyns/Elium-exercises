/*

Avery has some stuttering issues. She leaves long awkward pauses between words.

Remove all spaces from her sentences.

*/

function removeSpaces(str) {
  //return str.replace(/\s/g, "");
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeSpaces("Hi      Im  Avery"));
// outputs HiImAvery
console.log(removeSpaces("Javascript          is    sexy"));
// outputs Javascriptissexy
