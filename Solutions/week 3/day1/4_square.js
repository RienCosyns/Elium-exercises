var numberToSquare = document.getElementById('number-to-square')
var displayResult = document.getElementsByTagName('p')[1]
var submitButton = document.getElementsByTagName('button')[0]

submitButton.addEventListener('click', () => {
	square(Number(numberToSquare.value))
})

square = (n) => {
	displayResult.innerHTML = n * n
}
