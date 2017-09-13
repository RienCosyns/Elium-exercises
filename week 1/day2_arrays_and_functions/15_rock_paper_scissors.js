/*
Let's play rock paper scissors!
Determine which player won.
*/

function rockPaperScissors(player1pick, player2pick) {
  if (player1pick == "scissors") {
    if (player2pick == "rock") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  } else if (player1pick == "paper") {
    if (player2pick == "scissors") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  } else if (player1pick == "rock") {
    if (player2pick == "paper") {
      return "Player 2 won!";
    } else {
      return "Player 1 won!";
    }
  } else {
    return "not a valid input";
  }
}

console.log(rockPaperScissors("scissors", "paper"));
// outputs Player 1 won!
console.log(rockPaperScissors("rock", "paper"));
// outputs Player 2 won!
console.log(rockPaperScissors("rock", "scissors"));
// outputs Player 1 won!
console.log(rockPaperScissors("rock", "rock"));
// outputs Draw!
