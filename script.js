var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var playerOneDisplay = document.querySelector("#p1Display");
var playerTwoDisplay = document.querySelector("#p2Display");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");

var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 3;

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === winningScore) {
      playerOneDisplay.classList.add("winner");
      gameOver = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});

playerTwo.addEventListener("click", function() {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === winningScore) {
      playerTwoDisplay.classList.add("winner");
      gameOver = true;
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneDisplay.textContent = 0;
  playerTwoDisplay.textContent = 0;
  playerOneDisplay.classList.remove("winner");
  playerTwoDisplay.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
