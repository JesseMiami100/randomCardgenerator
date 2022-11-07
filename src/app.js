/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let card = document.querySelector(".random-card");
  let rank = document.querySelector(".random-rank");

  let cardSuit = ["hearts", "diamonds", "spades", "clubs"];
  card.classList.add(cardSuit[getRandomNumber(cardSuit.length)]);
  let cardRank = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  rank.innerHTML = cardRank[getRandomNumber(cardRank.length)];

  function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
  }
};
