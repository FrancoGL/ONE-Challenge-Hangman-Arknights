/**
 * Create spaces for the given operator
 * Use a for-of loop to create spaces
 * @param {HtmlElement} lettersContainer -> Element that contains the letters 
 * @param {String} operator -> Operator name
 */
export const setSpaces = (lettersContainer,operator) => {

  const $container = document.getElementById(lettersContainer)

  for (const element of operator) {
    let spanLetter = document.createElement('span')
    spanLetter.classList.add("letters__character")
    spanLetter.innerHTML = " "
    $container.appendChild(spanLetter)
  }
}