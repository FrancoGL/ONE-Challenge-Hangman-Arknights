import { check_input, inputTextElement } from "./check_input.js";
import {
  characters_group,
  generate_letters,
  lettersContainer,
} from "./character_names.js";
let header_img = document.getElementById("header-img");
let modal = document.getElementById("modal");
let modal_win = document.getElementById("modal-win");
let answer = document.getElementById("answer");

let wrong = ""

const images = [
  "./assets/img/surt.png",
  "./assets/img/operator2.png",
  "./assets/img/operator4.png",
  "./assets/img/specter2.png",
  "./assets/img/operator3.png",
];

let head = document.getElementById("head");
let body = document.getElementById("body");
let left_arm = document.getElementById("left-arm");
let right_arm = document.getElementById("right-arm");
let left_leg = document.getElementById("left-leg");
let right_leg = document.getElementById("right-leg");
let elements = [head, body, left_arm, right_arm, left_leg, right_leg];
let position = 0;
let letterCount = 0;

let childs = lettersContainer.childNodes;
let word;

const replace = (event) => {

  if (word.includes(event.data)) {
    let index = word.indexOf(event.data);
    word.splice(index, 1, " ");
    inputTextElement.value = inputTextElement.value.replace(event.data, "");
    console.log(word);
    childs[index + 1].textContent = event.data;

    letterCount++;
    if (letterCount == word.length) {
      modal_win.classList.remove("m__hidden");
    }
  } else {

    if (!wrong.includes(event.data) && event.inputType != "deleteContentBackward") {
      if (position != elements.length - 1) {
        header_img.src = images[position];
      }
      
      elements[position].classList.remove("hidden");
      position++;
    } else {
      wrong += inputTextElement.value
    }

    // deleteContentBackward. inputType
    // if (position != elements.length - 1) {
    //   header_img.src = images[position];
    // }
    
    // elements[position].classList.remove("hidden");
    // position++;

    if (position == elements.length) {
      answer.innerHTML = word.join("");
      modal.classList.remove("m__hidden");
    }
  }
};

// Check input
inputTextElement.addEventListener("input", (inputText) => {
  console.log(inputText.inputType);
  let state = check_input(inputText);
  if (!state) {

    replace(inputText);

    let lettersWrong = new Set(inputTextElement.value)
    inputTextElement.value = Array.from(lettersWrong).join("");
  }

  console.log(childs[0].textContent);
});

// Choice a word
window.onload = () => {
  word = generate_letters(characters_group);
};
