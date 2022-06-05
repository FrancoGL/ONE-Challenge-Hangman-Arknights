let btnAddNewWord = document.getElementById("btn-new");
let modal = document.getElementById("modal");
let btnAdd = document.getElementById("btn-add");
let btnCancel = document.getElementById("btn-cancel");
let inputOperator = document.getElementById("operator");
let inputClass = document.getElementById("class")
let inputFaction = document.getElementById("faction")
const words = []

btnAddNewWord.addEventListener("click", ()=> {
  modal.classList.remove("hidden");
})

btnAdd.addEventListener("click", ()=> {
  words.push(inputOperator.value, inputClass.value, inputFaction.value)
  modal.classList.add("hidden")
  console.log(words)
})

btnCancel.addEventListener("click", ()=> {
  modal.classList.add("hidden")
})
