"use strict";

// Query selectors -------------------------------------------------------------------------
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const rollDiceBtn = document.querySelector("#roll-dice-btn");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

// Setting the initial state ---------
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add("hidden");

//  Rolling the dice func --------------
rollDiceBtn.addEventListener("click", () => {
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `./img/dice-${randomDice}.png`;
  if (randomDice === 1) {
    if (player0.classList.contains("player--active")) {
      player0.classList.remove("player--active");
      player1.classList.add("player--active");
    } else if (player1.classList.contains("player--active")) {
      player1.classList.remove("player--active");
      player0.classList.add("player--active");
    }
  } else {
  }
});
