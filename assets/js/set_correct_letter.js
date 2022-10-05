/**
 * Add letter
 * @param {HtmlElement} letterContainer 
 * @param {String} operator 
 * @param {CurrentInput} input 
 */
export const setCorrectLetter = (letterContainer, operator, input) => {
  const nodes = document.getElementById(letterContainer).childNodes;
  let operatorName = operator.toUpperCase().split("");
  let letter = input;

  for (let i = 0; i <= operatorName.length; i++) {
    if (operatorName[i] === letter) {
      nodes[i].textContent = letter;
    }
  }
};
