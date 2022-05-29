export let inputTextElement = document.getElementById('input-text');
let inputTextWarningElement = document.getElementById('input-warning');

let regex = new RegExp(/[a-z]|\d|\W/);

const setWarning = () => {
  inputTextWarningElement.classList.add("input__warning--highlight");
  setTimeout(() => {
      inputTextWarningElement.classList.remove("input__warning--highlight");
  }, 2000)
}

const deleteInvalidValue = () => {
  inputTextElement.value = inputTextElement.value.replaceAll(/[a-z]|\d|\W/g, "");
}

export const check_input = (eventInput) => {

  if (eventInput.data !== null && eventInput.data.toString().match(regex) !== null) {
      deleteInvalidValue()
      setWarning()
      return true
  } else {
    return false;
  }

}