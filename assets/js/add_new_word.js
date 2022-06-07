import { generate_character } from "./utils.js";
import { regex } from "./check_input.js";

let words = [];
let btnAddNewWord = document.getElementById("btn-new");
let modal = document.getElementById("modal");
let btnAdd = document.getElementById("btn-add");
let btnCancel = document.getElementById("btn-cancel");
let inputOperator = document.getElementById("operator");
let inputClass = document.getElementById("class");
let inputFaction = document.getElementById("faction");

let warningOperator = document.getElementById("operator--warning");
let warningClass = document.getElementById("class--warning");
let warningFaction = document.getElementById("faction--warning");
let warningEmpty = document.getElementById("empty--warning");

const showModal = () => {
  if (btnAddNewWord != null) {
    btnAddNewWord.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
};

// Get Words

const addWord = () => {
  if (btnAdd != null) {
    btnAdd.addEventListener("click", () => {
      if (inputOperator.value != "" && inputClass.value != "" && inputOperator.value != "") {
        words.push(
          generate_character(
            inputOperator.value,
            inputClass.value,
            inputFaction.value
          )
        );
        localStorage.setItem("words", JSON.stringify(words));
        modal.classList.add("hidden");
      } else {
        warningEmpty.classList.remove("warning--hidden");
        setTimeout(() => {
          warningEmpty.classList.add("warning--hidden");
        }, 2000)
      }
    });
  }
};

const inputEvent = () => {
  inputOperator.addEventListener("input", (event) => {
    if (
      event.data !== null &&
      event.data.match(regex) &&
      event.inputType !== "deleteContentBackward"
    ) {
      inputOperator.value = inputOperator.value.replaceAll(/[a-z]|\d|\W/g, "");
      warningOperator.classList.remove("warning--hidden");
      setTimeout(() => {
        warningOperator.classList.add("warning--hidden");
      }, 2000);
    }
  });

  inputClass.addEventListener("input", (event) => {
    if (
      event.data !== null &&
      event.data.match(regex) &&
      event.inputType !== "deleteContentBackward"
    ) {
      inputClass.value = inputClass.value.replaceAll(/[a-z]|\d|\W/g, "");
      warningClass.classList.remove("warning--hidden");
      setTimeout(() => {
        warningClass.classList.add("warning--hidden");
      }, 2000);
    }
  });

  inputFaction.addEventListener("input", (event) => {
    if (
      event.data !== null &&
      event.data.match(regex) &&
      event.inputType !== "deleteContentBackward"
    ) {
      inputFaction.value = inputFaction.value.replaceAll(/[a-z]|\d|\W/g, "");
      warningFaction.classList.remove("warning--hidden");
      setTimeout(() => {
        warningFaction.classList.add("warning--hidden");
      }, 2000);
    }
  });

  addWord();
};

const hiddenModal = () => {
  if (btnCancel != null) {
    btnCancel.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
};

showModal();
inputEvent();
hiddenModal();
