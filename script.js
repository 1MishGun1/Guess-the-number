"use strict";

// console.log(document.querySelector('.guess-message').textContent);

// document.querySelector('.guess-message').textContent =
//   'Well done! Correct answer :)';

// document.querySelector('.question').textContent = 7;

// document.querySelector('.score').textContent = 11;

// console.log(document.querySelector('.number-input').value);
// document.querySelector('.number-input').value = 12;
// console.log(document.querySelector('.number-input').value);

// const eventHandler = function () {
//   console.log(document.querySelector(".number-input").value);
// };

document.querySelector(".check").addEventListener("click", function () {
  const gussingNumber = Number(document.querySelector(".number-input").value);
  console.log(gussingNumber, typeof gussingNumber);

  if (!gussingNumber) {
    document.querySelector(".guess-message").textContent = "Enter a number";
  }
});
