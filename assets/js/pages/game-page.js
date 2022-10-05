import { selectOperator } from "../select_operator.js";
import { setClues } from "../set_clues.js";
import { setSpaces } from "../set_spaces.js";
import { checkInput } from "../utils/check_input.js";
import { setWarning } from "../utils/set_warning.js";
import { deleteInvalidValue } from "../utils/delete_invalid_letter.js";
import { setCorrectLetter } from "../set_correct_letter.js";
import { checkLetter } from "../utils/check_letter.js";
import { changeImage } from "../utils/change_image.js";
import { showHangman } from "../utils/show_hangman.js";
import { showGameOver } from "../show_game_over.js";
import { showGameWin } from "../show_game_win.js";
import { currentCorrectLetters } from "../utils/current_correct_letters.js";

let currentInvalidLetters = [];
let operatorName;
let countIncorrect = 0;
let countCorrect = 0;

/**
 * Set clues and spaces whe the page is load
 */
document.addEventListener("DOMContentLoaded", async () => {
  const $loader = document.querySelector(".loader__container");
  let operator = await selectOperator()
    .then((e) => {
      $loader.classList.toggle("loader__hidden");
      operatorName = e.name.toUpperCase();
      return e;
    })
    .finally(() => {
      $loader.classList.add("loader__hidden");
    });

  setClues(".class__text", ".faction__text", operator);
  setSpaces("letters-container", operator.name);
});

document.addEventListener("input", (e) => {
  if (checkInput(e)) {
    setWarning("input-warning", "hidden");
    deleteInvalidValue(e.target);
  }

  if (
    !checkInput(e) &&
    checkLetter(e.data, operatorName) &&
    e.inputType === "insertText"
  ) {
    setCorrectLetter("letters-container", operatorName, e.data);
    changeImage(true, "header-img");
    showGameWin(
      "modal-win",
      currentCorrectLetters("letters-container"),
      operatorName
    );
  }

  if (
    !checkInput(e) &&
    !checkLetter(e.data, operatorName) &&
    e.inputType === "insertText"
  ) {
    if (!currentInvalidLetters.includes(e.data)) {
      currentInvalidLetters.push(e.data);
      changeImage(false, "header-img");
      showHangman(countIncorrect, ".hangman");
      showGameOver("modal", "answer", countIncorrect, operatorName);
      countIncorrect++;
    }
  }
});
