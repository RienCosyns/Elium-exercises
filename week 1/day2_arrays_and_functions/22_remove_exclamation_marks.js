/*

Aryanto keeps swearing.
We're going to make his sentences a little less harmful by removing
every exclamation mark and converting all characters to lowercase.

*/

function makeItGentler(str) {
  //return str.replace(/!/g, "").toLowerCase();
  var newString = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      newString += str[i];
    }
  }
  return newString.toLowerCase();
}

console.log(makeItGentler("FUCK I HATE THIS SHIT!!!!"));
// outputs fuck i hate this shit
console.log(makeItGentler("I'M GOING TO KILL MYSELF!!!!!!!!!"));
// outputs i'm going to kill myself
