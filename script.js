let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// 1.
// Create a generateTarget() function. This function should return a random integer between 0 and 9.
// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
function generateTarget() {
  return (randomInteger = Math.floor(Math.random() * 10));
}
//2.
//Create a compareGuesses() function. This function:
// a.Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
// b.Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
// c.Return true if the human player wins, and false if the computer player wins.
// The purpose of this function is to be called each round to determine which guess is closest to the target number. => use Math.abs()
// You’ll want to compare the absolute value of the difference between the target and each guess, because each guess could be greater or less than the target, and the only thing that matters is the distance between the two.
function compareGuesses(userGuess, computerGuess, secretTargetNum) {
  const userDifference = Math.abs(secretTargetNum - userGuess);
  const computerDifference = Math.abs(secretTargetNum - computerGuess);
  return userDifference <= computerDifference ? true : false;
}
// 3.
// Create an updateScore() function. This function:
// a.Has a single parameter. This parameter will be a string value representing the winner.
// b.Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
// c.Does not need to return any value.
// The purpose of this function is to be used to correctly increase the winner’s score after each round.
function updateScore(winner) {
  if (winner === "user") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}
// 4.
// Create an advanceRound() function. This function should increase the value of currentRoundNumber by 1.
// The purpose of this function is to be used to update the round number after each round.
// After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.
function advanceRound() {
  currentRoundNumber++;
}

// 5.
// Test that your code is working properly by invoking your newly written functions within script.js with sample inputs. You can delete this code once you’re convinced that everything is working as it should.

//6.
// Great work! If you’d like to see the solution, move to the next task. If you’d like to extend your project on your own, you could consider the following:
// a.You probably calculated the distance from the computer guess to the target and from the human guess to the target. Move this into a separate getAbsoluteDistance() function that takes two numbers and returns the distance, and then use that inside your compareGuesses() function.
// b.Add functionality to check whether the user guess is between 0 and 9 and alert() the user that their number is out of range. It’s not possible to set a number outside this range with the + and = buttons, but users can do so by typing directly in the input field.

// 7.
// Great work!
