import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const pronoun = ["I", "you", "he", "she", "it", "we", "they"];
const adj = ["smart","fast","bright","fresh","cool","wild","super","prime"];
const noun = ["jogger","racoon","hub","lab","zone","spot","flow","loop","wave","nest"];

function nuevaWeb(i, j, k) {
  const list = document.querySelector("#list");
  const liElement = document.createElement("li");

  liElement.textContent = pronoun[i] + adj[j] + noun[k] + ".com";
  list.appendChild(liElement);
}

window.onload = function () {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        nuevaWeb(i, j, k);
      }
    }
  }
};