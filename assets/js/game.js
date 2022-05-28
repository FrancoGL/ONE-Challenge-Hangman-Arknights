let inputTextElement = document.getElementById('inputText');
let inputTextWarningElement = document.getElementById('inputWarning');

let regx = new RegExp(/[a-z]|\d|\W/);

const setWarning = () => {
  inputTextWarningElement.classList.add("input__warning--highlight");
  setTimeout(() => {
      inputTextWarningElement.classList.remove("input__warning--highlight");
  }, 2000)
}

const deleteInvalidValue = () => {
  inputTextElement.value = inputTextElement.value.replaceAll(/[a-b]|\d|\W/g, "");
}

const check_input = (eventInput) => {

  if (eventInput.data !== null && eventInput.data.toString().match(regx) !== null) {
      setWarning()
      deleteInvalidValue();
    }
}

inputTextElement.addEventListener('input', (inputText) => {
  check_input(inputText);
});