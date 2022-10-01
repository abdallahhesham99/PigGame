"use strict";
// Declare Variables
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let playerOneScore = document.querySelector("#score--0");
let playerTwoScore = document.querySelector("#score--1");
let PlayerOneCurrentScore = document.querySelector("#current--0");
let PlayerTwoCurrentScore = document.querySelector("#current--1");
let diceImg = document.querySelector(".dice");

let newGameBtn = document.querySelector(".btn--new");
let rollBtn = document.querySelector(".btn--roll");
let holdBtn = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
// ===================================Switch Player Function===================================
function switchPlayer() {
  //remove active player class from current player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  //reset his current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  //if the active player is 0 make it 1 and vice versa
  activePlayer = activePlayer === 0 ? 1 : 0;

  //set active player class to the current player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
}
// ===================================Roll Button==============================================

rollBtn.addEventListener("click", function () {
  //Generating a random number depends on dice numbers
  const dice = Math.trunc(Math.random() * 6 + 1);

  //displaying the dice picture
  diceImg.classList.remove("d-none");
  diceImg.src = `imgs/dice-${dice}.png`;

  //if it !== 1
  if (dice !== 1) {
    //set the dice value to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch to the second player

    switchPlayer();
  }
});
// ====================================Hold Button=============================================
holdBtn.addEventListener("click", function () {
  //1. add the current score to activePlayer's score
  //2. check score if is >= 100
  //finish game
  //else Switch Player
});

// =================================================================================
// =================================================================================
