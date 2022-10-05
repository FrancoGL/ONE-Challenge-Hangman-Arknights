/**
 * Set clues based on the current operator
 * @param {*} elementClass -> Html element that contains the class operator
 * @param {*} elementFaction -> Html element that contains the faction operator
 * @param {*} operator -> Object obtained from the getOperators operation
 */
export const setClues = (elementClass, elementFaction, operator) => {

  const $class = document.querySelector(elementClass),
  $faction = document.querySelector(elementFaction);

  $class.innerHTML = operator.class
  $faction.innerHTML = operator.faction
}