/*

Build a simple cipher.

*/
var sample = "hello class, how are you? this text is going to be encrypted in few seconds."

var characters = "abcdefghijklmnopqrstuvwxyz.?,' "
var encription = "1234567890-=!@#$%^&*()_+<>HG:DQ"

function encrypt(s) {
    var newStr = "";
    // iterate through the string
    for (var i = 0; i < s.length; i++){
        // for every letter, look for it in the characters string
        for (var j = 0; j < characters.length; j++){
            if (s[i] === characters[j]){
                // store position of letter in char string
                var position = j;
            }
        }
        // add letter to new string
        newStr += encription[position];
    }
    return newStr
}

function decrypt(s) {
    var newStr = "";
    // iterate through the string
    for (var i = 0; i < s.length; i++){
        // for every letter, look for it in the encription string
        for (var j = 0; j < encription.length; j++){
            if (s[i] === encription[j]){
                // store position of letter in encription string
                var position = j;
            }
        }
        newStr += characters[position];
    }
    // add letter to new string
    return newStr
}

console.log(encrypt(sample));
// outputs 85==#Q3=1&&:Q8#_Q1^5Q<#(GQ*89&Q*5+*Q9&Q7#9@7Q*#Q25Q5@3^<$*54Q9@Q65_Q&53#@4&H
console.log(decrypt(encrypt(sample)));
// outputs hello class, how are you? this text is going to be encrypted in few seconds.
