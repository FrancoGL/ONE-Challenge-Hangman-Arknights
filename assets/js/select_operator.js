import { getOperators } from "./operations/get_operators.js";

/**
 * Select one operator from the collection of operators obtained from the getOperators function
 * @returns {Promise}
 */
export const selectOperator = async () => {
  let operators = await getOperators().then(e => e.data)
  let index = Math.round(Math.random() * (operators.length - 1))
  let operator = operators[index]
  return operator
}