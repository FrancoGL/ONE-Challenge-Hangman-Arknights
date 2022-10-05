export const currentCorrectLetters = (letterContainerId) => {
  const $container = document.getElementById(letterContainerId).children;
  let count = 0;

  for (let text of $container) {
    console.log(text);
    if (text.innerHTML !== " ") {
      count++;
    }
  }
  console.log(count);
  return count;
};
