/**
 * Delete any invalid letter
 * @param {InputHtmlElement} input -> Current input element 
 */
export const deleteInvalidValue = (input) => {
  input.value = input.value.replaceAll(
    /[a-z]|\d|\W/g,
    ""
  );
};