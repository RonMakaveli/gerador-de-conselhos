//forçando a linguagem a utilizar a forma moderna de fazer as coisas
"use strict";

const diceBtn = document.querySelector(".button-section");
const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".quotes");
const apiUrl = "https://api.adviceslip.com/advice";

diceBtn.addEventListener("click", () => {
  fetch(apiUrl, {cache: "no-cache"}).then((response) => response.json()).then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      adviceNumber.innerHTML = `Conselho # ${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});

