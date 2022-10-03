/**
 * Check input, if it matches the RegExp pattern return true otherwise return false
 * @param {Event} eventInput -> Event object containing the current input element 
 * @returns {boolean}
 */
export const checkInput = (eventInput) => {
  let regex = new RegExp(/[a-z]|\d|\W/);
  return (eventInput.data !== null &&
    eventInput.data.toString().match(regex) !== null);
};
