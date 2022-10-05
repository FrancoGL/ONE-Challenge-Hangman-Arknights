/**
 * Show modal window of win
 * @param {HtmlElementId} modalId 
 * @param {Integer} count 
 * @param {String} operatorName 
 */
export const showGameWin = (modalId, count, operatorName) => {
  if (count === operatorName.length) {
    const $modalGameOver = document.getElementById(modalId);
    $modalGameOver.classList.remove("modal--hidden");
  }
};
