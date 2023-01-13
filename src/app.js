/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let textHTML = "<ul class='list-group'>";

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let dom = "<li class='list-group-item'>" + pronoun[i] + adj[j] + noun[k] + "</li>";

        textHTML = textHTML + dom;
        console.log(dom);
      }
    }
  }

  textHTML = textHTML + "</ul>";

  let doms = document.querySelector("#dominios");
  doms.innerHTML = textHTML;
};
