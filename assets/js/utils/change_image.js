const images = [
  "https://c.tenor.com/5H996htYZAYAAAAd/dokutah-arknights.gif",
  "./assets/img/operator3.png",
];

/**
 * Change image
 * @param {Boolean} state 
 * @param {HtmlElementId} elementId 
 */
export const changeImage = (state, elementId) => {
  const $img = document.getElementById(elementId);

  state ? $img.setAttribute("src",images[0]) : $img.setAttribute("src",images[1])
}