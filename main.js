"use strict";

// Declare Variables
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const playerOneScore = document.querySelector("#score--0");
const playerTwoScore = document.querySelector("#score--1");
const PlayerOneCurrentScore = document.querySelector("#current--0");
const PlayerTwoCurrentScore = document.querySelector("#current--1");
const diceImg = document.querySelector(".dice");
// ===BUTTONS===
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

let currentScore, activePlayer, scores, playing;
// ==============================Init Function===================================================
//Reset Values Function
function init() {
  alertify.alert("Hello Welcome ❤", "Win from score 50 🥇🏆");

  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;

  //reset all values
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;

  PlayerOneCurrentScore.textContent = 0;
  PlayerTwoCurrentScore.textContent = 0;

  // add active class on first player
  player0.classList.add("player--active");
  // remove active class from sec player
  player1.classList.remove("player--active");
  //remove winner class
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
}
init();
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
  if (playing) {
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
  }
});
// ====================================Hold Button=============================================
holdBtn.addEventListener("click", function () {
  if (playing) {
    //1. add the current score to activePlayer's score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check score if is >= 50
    //finish game
    if (scores[activePlayer] >= 50) {
      alertify.alert("🥇🏆", `Player ${activePlayer + 1} Is Winner`);

      //set playing false tp stop the game
      playing = false;
      //add class winner on winner player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      //remove active class to current player
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");

      //hide dice image and disabled roll-hold buttons
      diceImg.classList.add("d-none");

      //reset current score value
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      switchPlayer();
    }
  }
});

// ==================================New Game Button===============================================
newGameBtn.addEventListener("click", init);
