import { generate_character } from "./utils.js";

let words = []
let btnAddNewWord = document.getElementById("btn-new");
let modal = document.getElementById("modal");
let btnAdd = document.getElementById("btn-add");
let btnCancel = document.getElementById("btn-cancel");
let inputOperator = document.getElementById("operator");
let inputClass = document.getElementById("class");
let inputFaction = document.getElementById("faction");

const showModal = () => {
  if (btnAddNewWord != null) {
    btnAddNewWord.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });
  }
};

const addWord = () => {
  if (btnAdd != null) {
    btnAdd.addEventListener("click", () => {
      words.push(generate_character(inputOperator.value, inputClass.value, inputFaction.value));
      localStorage.setItem("words", JSON.stringify(words));
      modal.classList.add("hidden");
    });
  }
};

const hiddenModal = () => {
  if (btnCancel != null) {
    btnCancel.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
};

showModal();
addWord();
hiddenModal();
