"use-strict";

const heading = document.getElementById("home-text");
const btn = document.getElementById("submit-btn");
const inputText = document.getElementById("nameInput");
const parentsDiv = document.getElementById("parent-div");
const colorHeading = document.getElementById("color-heading");
const body = document.querySelector("body");

const randomNumber = () => {
  return Math.trunc(Math.random() * 256) + 1;
};

function defaultSetting() {
  body.style.backgroundColor = "#F1f5f8";
  colorHeading.innerHTML = "#F1f5f8";
  console.log("Onload");
}
window.onload = function () {
  console.log("Onloaded!!!");
  defaultSetting();
};

// window.onload(function () {
//   defaultSetting();
// });

const generateRandomNo = () => {
  let randomColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
  body.style.backgroundColor = randomColor;
  colorHeading.innerHTML = randomColor;
};

btn.addEventListener("click", generateRandomNo);
