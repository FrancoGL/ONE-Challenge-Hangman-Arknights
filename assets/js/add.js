let btnNew = document.getElementById("btn-new");
let modal = document.getElementById("modal");
let btnAdd = document.getElementById("btn-add");
let btnCancel = document.getElementById("btn-cancel");
let inputOperator = document.getElementById("operator");
let inputClass = document.getElementById("class")
let inputFaction = document.getElementById("faction")
const values = []

btnNew.addEventListener("click", ()=> {
  modal.classList.remove("m__hidden");
})

const check_inputs = (input)=> {
  if (input.value.length < 2) {
    input.value = "Invalid" + input.name
  }
}

btnAdd.addEventListener("click", ()=> {
  values.push(inputOperator.value, inputClass.value, inputFaction.value)
  modal.classList.add("m__hidden")
  console.log(values)
})

btnCancel.addEventListener("click", ()=> {
  modal.classList.add("m__hidden")
})
