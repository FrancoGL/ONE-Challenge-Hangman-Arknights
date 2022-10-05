/**
 * Show modal window of game over
 * @param {HtmlElementId} modalId
 * @param {HtmlElementId} answerId
 * @param {Interger} count
 * @param {String} operatorName
 */
export const showGameOver = (modalId, answerId, count, operatorName) => {
  if (count === 5) {
    const $modalGameOver = document.getElementById(modalId);
    const $answer = document.getElementById(answerId);
    $answer.textContent = operatorName;
    $modalGameOver.classList.remove("modal--hidden");
  }
};
