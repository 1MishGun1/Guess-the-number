"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let bestScore = 0;

const displayGuessMessage = function (message) {
  document.querySelector(".guess-message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const gussingNumber = Number(document.querySelector(".number-input").value);
  console.log(gussingNumber, typeof gussingNumber);

  // No input
  if (!gussingNumber) {
    displayGuessMessage("Enter a number");

    // Player win
  } else if (gussingNumber === secretNumber) {
    displayGuessMessage("Super! You guessed right");
    document.querySelector(".question").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".question").style.width = "50rem";

    if (score > bestScore) {
      bestScore = score;
      document.querySelector(".highscore").textContent = bestScore;
    }

    // Number from input is wrong
  } else if (gussingNumber != secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        gussingNumber > secretNumber
          ? "The number is too large"
          : "The number is too small"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayGuessMessage("Game over");
      document.querySelector(".score").textContent = 0;
    }
  }

  // Restart
  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector(".question").style.width = "25rem";
    document.querySelector(".question").textContent = "???";
    document.querySelector("body").style.backgroundColor = "rgb(12, 14, 138)";
    document.querySelector(".number-input").value = " ";
    displayGuessMessage("Start guessing");
    document.querySelector(".score").textContent = score;
  });
});
