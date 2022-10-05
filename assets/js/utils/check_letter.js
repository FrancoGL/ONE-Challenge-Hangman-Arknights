/**
 * Return true or false if operator contains the given letter
 * @param {String} inputValue -> Current letter
 * @returns {Boolean}
 */
export const checkLetter = (inputValue, operator) => {
  return operator.includes(inputValue);
};
