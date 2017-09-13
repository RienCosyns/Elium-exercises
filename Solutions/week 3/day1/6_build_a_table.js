const columnInput = document.getElementById('column-input')
const rowInput = document.getElementById('row-input')
const submitButton = document.getElementsByTagName('button')[0]

submitButton.addEventListener('click', (event) => {
	buildTable(rowInput.value, columnInput.value)
})

buildTable = (rows, columns) => {

	let table = document.createElement('table')
	table.setAttribute("border", "1")

	for (let i = 0; i < rows; i++) {
		let row = document.createElement('tr')

		for (let i = 0; i < columns; i++) {
			let column = document.createElement('td')
			row.appendChild(column)
		}

		table.appendChild(row)
	}

	document.body.appendChild(table)
}