"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".question").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const gussingNumber = Number(document.querySelector(".number-input").value);
  console.log(gussingNumber, typeof gussingNumber);

  if (!gussingNumber) {
    document.querySelector(".guess-message").textContent = "Enter a number";
  } else if (gussingNumber === secretNumber) {
    document.querySelector(".guess-message").textContent =
      "Super! You guessed right";
  } else if (gussingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent =
        "The number is too large";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "Game over";
      document.querySelector(".score").textContent = 0;
    }
  } else if (gussingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".guess-message").textContent =
        "The number is too small";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guess-message").textContent = "Game over";
      document.querySelector(".score").textContent = 0;
    }
  }
});
