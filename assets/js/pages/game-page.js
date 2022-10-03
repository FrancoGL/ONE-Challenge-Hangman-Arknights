import {selectOperator} from "../select_operator.js";
import { setClues} from "../set_clues.js";
import {setSpaces} from "../set_spaces.js";
import {checkInput} from "../utils/check_input.js";
import {setWarning} from "../utils/set_warning.js";
import {deleteInvalidValue} from "../utils/delete_invalid_letter.js";

/**
 * Set clues and spaces whe the page is load
 */
document.addEventListener("DOMContentLoaded", async () => {
  let operator = await selectOperator();
  setClues(".class__text", ".faction__text", operator)
  setSpaces("letters-container", operator.name)
  sessionStorage.setItem("operator", operator.name)
})

document.addEventListener("input", (e) => {

  if (checkInput(e)) {
    setWarning("input-warning", "hidden")
    deleteInvalidValue(e.target)
  }
})