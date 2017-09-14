var sample =
  "hello class, how are you? this text is going to be encrypted in few seconds.";

var characters = "abcdefghijklmnopqrstuvwxyz.?,' ";
var encription = "1234567890-=!@#$%^&*()_+<>HG:DQ";

function encrypt(s) {
  var keyObject = {};
  for (var i = 0; i < characters.length; i++) {
    keyObject[characters[i]] = encription[i];
  }
  //   return s
  //     .split("")
  //     .map(function(element) {
  //       return (element = keyObject[element]);
  //     })
  //     .join("");
  var splittedString = s.split("");
  var arr = splittedString.map(function(el) {
    return (el = keyObject[el]);
  });
  return arr.join("");
}

function decrypt(s) {
  var keyObject = {};
  for (var i = 0; i < characters.length; i++) {
    keyObject[encription[i]] = characters[i];
  }
  return s
    .split("")
    .map(function(element) {
      return (element = keyObject[element]);
    })
    .join("");
}

console.log(encrypt(sample));
// outputs 85==#Q3=1&&:Q8#_Q1^5Q<#(GQ*89&Q*5+*Q9&Q7#9@7Q*#Q25Q5@3^<$*54Q9@Q65_Q&53#@4&H
console.log(decrypt(encrypt(sample)));
// outputs hello class, how are you? this text is going to be encrypted in few seconds.
