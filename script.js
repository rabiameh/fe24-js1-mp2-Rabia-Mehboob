"use strict";

let playerName = document.querySelector(".name");
let finalScore = document.querySelector(".score");
let roundsNumber = document.querySelector(".rounds-number");
let currentScore = document.querySelector(".current-score");
let dice = document.querySelector(".dice");
let btnRollDice = document.querySelector(".btn--roll");
let btnHoldDice = document.querySelector(".btn--hold");
let currentDiv = document.querySelector(".current");
let wonMsg = document.querySelector(".won-msg");

let roundScore = 0;
let totalScore = 0;
let rounds = 0;

function gameWon() {
  currentDiv.classList.add("hidden");
  btnHoldDice.classList.add("hidden");
  btnRollDice.classList.add("hidden");
  dice.classList.add("hidden");
  wonMsg.classList.remove("hidden");
}

dice.classList.add("hidden");
let player = prompt("Enter Your Name....");
playerName.textContent = player;

btnRollDice.addEventListener("click", function () {
  if (!(totalScore >= 100)) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNumber}.png`;
    dice.classList.remove("hidden");

    if (diceNumber !== 1) {
      roundScore += diceNumber;
      currentScore.textContent = roundScore;
    } else {
      roundScore = 0;
      currentScore.textContent = roundScore;
      rounds++;
      roundsNumber.textContent = rounds;
    }
  } else {
    gameWon();
  }
});

btnHoldDice.addEventListener("click", function () {
  if (!(totalScore >= 100)) {
    totalScore += roundScore;
    finalScore.textContent = totalScore;
    if (roundScore !== 0 && currentScore.textContent !== 0) rounds++;
    roundsNumber.textContent = rounds;
    roundScore = 0;
    currentScore.textContent = roundScore;
  } else {
    gameWon();
  }
});
