let students = [
	'Adrian',
	'Anja',
	'Aryanto', 
	'Avery',
	'Cathrin', 
	'Franklyn',
	'Gabriel', 
	'Jarrod', 
	'Kirill', 
	'Nisha',
	'Ola',
	'Rien',
	'Simas',
	'Yasir',
]

const addStudentInput = document.getElementById('add-student-input')
const addStudentButton = document.getElementsByTagName('button')[0]
const removeStudentInput = document.getElementById('remove-student-input')
const removeStudentButton = document.getElementsByTagName('button')[1]

addStudentButton.addEventListener("click", () => {addStudent(addStudentInput.value)})
removeStudentButton.addEventListener("click", () => {removeStudent(removeStudentInput.value)})

renderSelect = (array) => {

	while (removeStudentInput.firstChild) {
    removeStudentInput.removeChild(removeStudentInput.firstChild);
	}

	for (let i = 0; i < array.length; i++) {
		let option = document.createElement('option')
		option.value = array[i]
		option.text = array[i]
		removeStudentInput.appendChild(option)
	}
}

renderList = (array) => {

	let ul = document.getElementsByTagName('ul')[0]

	while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
	}

	for (let i = 0; i < array.length; i++) {
		let listItem = document.createElement('li')
		listItem.innerHTML = array[i]
		ul.appendChild(listItem)
	}
}

removeStudent = (student) => {

	students.forEach( (element, index) => {
		if (element === student) {
			students.splice(index,1)
		}
	})

	renderSelect(students)
	renderList(students)
}

addStudent = (student) => {
	students.push(student)
	students.sort( (a,b) => {
	  var nameA = a.toUpperCase(); // ignore upper and lowercase
	  var nameB = b.toUpperCase(); // ignore upper and lowercase
	  if (nameA < nameB) {
	    return -1;
	  }
	  if (nameA > nameB) {
	    return 1;
	  }
	  // names must be equal
	  return 0;	
	})

	renderSelect(students)
	renderList(students)

}

renderSelect(students)
renderList(students)
