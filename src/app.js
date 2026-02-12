import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronouns = ["I", "you", "he", "she", "it", "we", "they"];
const adjectives = ["smart","fast","bright","fresh","cool","wild","super","prime"];
const nouns = ["jogger","racoon","hub","lab","zone","spot","flow","loop","wave","nest"];

function newWebDomain(pronounIndex, adjectivesIndex, nounsIndex) {
  const list = document.querySelector("#list");
  const liElement = document.createElement("li");

  liElement.textContent = pronouns[pronounIndex] + adjectives[adjectivesIndex] + nouns[nounsIndex] + ".com";
  list.appendChild(liElement);
}

window.onload = function () {
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        newWebDomain(i, j, k);
      }
    }
  }
};