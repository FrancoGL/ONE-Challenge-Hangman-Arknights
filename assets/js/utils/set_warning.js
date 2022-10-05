export const setWarning = (elementId, elementClassToRemove) => {
  let warning = document.getElementById(elementId)
  warning.classList.remove(elementClassToRemove);
  setTimeout(() => {
    warning.classList.add(elementClassToRemove);
  }, 2000);
};