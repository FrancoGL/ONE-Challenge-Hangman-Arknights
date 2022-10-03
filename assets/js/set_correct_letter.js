export const setCorrectLetter = (letterContainer, input) => {
  const nodes = document.getElementById(letterContainer).childNodes
  let operator = sessionStorage.getItem("operator").split('')
  let letter = input
  console.log(operator);
  console.log(input);
  if (operator.includes(letter)) {
    
    for (let i = 0; i < operator.length; i++) {
      if (operator[i] === letter) {
        nodes[i].textContent = letter
        operator.splice(i, "")
      }
    }

    //operator.splice(index, "")
    //nodes[index].textContent = letter
  }
}