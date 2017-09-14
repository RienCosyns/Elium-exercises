/*

Find out how many Javascript developers there are in europe.

*/

var someDevelopers = [
  {
    name: "Anja",
    country: "Germany",
    continent: "Europe",
    language: "Javascript"
  },
  {
    name: "Avery",
    country: "USA",
    continent: "North America",
    language: "HTML"
  },
  {
    name: "Gabriel",
    country: "Netherlands",
    continent: "Europe",
    language: "CSS"
  },
  {
    name: "Jarrod",
    country: "New Zealand",
    continent: "Oceania",
    language: "Javascript"
  },
  {
    name: "Kirill",
    country: "South Africa",
    continent: "Africa",
    language: "Javascript"
  },
  { name: "Nisha", country: "UK", continent: "Europe", language: "Javascript" },
  { name: "Rien", country: "Belgium", continent: "Europe", language: "HTML" }
];

function countJavascriptDevelopers(arr) {
  var result = 0;
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i].continent === "Europe") {
  //     result++;
  //   }
  // }
  // return result;
  arr.forEach(function(element) {
    if (element.continent === "Europe") {
      result++;
    }
  });
  return result;
}

console.log(countJavascriptDevelopers(someDevelopers));
// outputs 4
