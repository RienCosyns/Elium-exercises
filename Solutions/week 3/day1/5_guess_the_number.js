const randomizeButton = document.getElementsByTagName('button')[0]
const guessInput = document.getElementById('guess-input')
const guessButton = document.getElementsByTagName('button')[1]

let randomNumber

randomize = () => {
	randomNumber = Math.floor(Math.random() * 10) + 1 
}

guessTheNumber = (guessInput) => {
	if (Number(guessInput) === randomNumber) alert('You guessed correctly!')
	else alert('Wrong number!')
}

randomize()

randomizeButton.addEventListener("click", () => {randomize()});
guessButton.addEventListener("click", () => {guessTheNumber(guessInput.value)})
