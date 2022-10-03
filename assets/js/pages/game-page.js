import {selectOperator} from "../select_operator.js";
import { setClues} from "../set_clues.js";
import {setSpaces} from "../set_spaces.js";

/**
 * Set clues and spaces whe the page is load
 */
document.addEventListener("DOMContentLoaded", async () => {
  let operator = await selectOperator();
  setClues(".class__text", ".faction__text", operator)
  setSpaces("letters-container", operator.name)
})