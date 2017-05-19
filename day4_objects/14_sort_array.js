/*

Sort this array according to the names of the students.

*/

var someDevelopers = [
  {name: 'Kirill', country: 'South Africa', continent: 'Africa', language: 'Javascript'},
  {name: 'Rien', country: 'Belgium' , continent: 'Europe', language: 'HTML'},
  {name: 'Gabriel', country: 'Netherlands', continent: 'Europe', language: 'CSS'},
  {name: 'Avery', country: 'USA', continent: 'North America', language: 'HTML'},
  {name: 'Jarrod', country: 'New Zealand', continent: 'Oceania', language: 'Javascript'},
  {name: 'Nisha', country: 'UK', continent: 'Europe', language: 'Javascript'},
  {name: 'Anja', country: 'Germany', continent: 'Europe', language: 'Javascript'}
]

// function sortDevelopers(array) {
//   // take item out of array, one for one and add it to another array
//   // create new array
//   var myArr = [];
//   // store the length of the original array in a variable to determine length of new array
//   var counter = array.length;
//   // while the array is not completely filled up, keep doing the sorting
//   while (myArr.length <= counter ){
//     // put the first item in a variable
//     var min = array[0];
//     // loop through the objects and compare names, if name is smaller put it in the min variable
//     for (var i = 0; i < array.length - 1; i++){
//       if (array[i + 1].name < min.name){
//         min = array[i + 1];
//       }
//     }
//     // remove the object from the array and store it in a variable
//     var removed = array.splice(array.indexOf(min), 1);
//     // add the object to the new array
//     myArr.push(removed);
//   }
//   return myArr 
// }

function sortDevelopers(array){
  return array.sort(function(a, b){return a.name.localeCompare(b.name)})
}

console.log(sortDevelopers(someDevelopers))

// sorting 
// iterate through names and compare => for every name iterate length of array => store the smallest in a variable
// if one is smaller than the next one => add to new array