/**
 * Show hangman given the current count
 * @param {Integer} count 
 * @param {HtmlParentClass} parentElementClass 
 */
export const showHangman = (count, parentElementClass) => {

  const $hangman = document.querySelector(parentElementClass).children;

  $hangman[count].classList.remove("hidden") 
}