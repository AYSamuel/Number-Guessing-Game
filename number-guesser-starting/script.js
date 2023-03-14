let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);
const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9) {
    return window.alert(
      'Your number can only be between 0 and 9. Sorry, computer wins this round. Try Again!'
    );
  } else if (
    human === target ||
    Math.abs(target - human) < Math.abs(target - computer)
  ) {
    return true;
  } else if (
    computer === target ||
    Math.abs(target - human) > Math.abs(target - computer)
  ) {
    return false;
  }
};
const updateScore = (whoWins) => {
  if (whoWins === 'human') {
    return (humanScore = humanScore + 1);
  } else {
    return (computerScore = computerScore + 1);
  }
};
const advanceRound = () => currentRoundNumber++;
