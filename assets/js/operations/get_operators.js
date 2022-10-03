/**
 * Get all operators from database 
 * @returns {promise}
 */
export const getOperators = () => {
  return axios("https://63376b77132b46ee0be14969.mockapi.io/app/operators")
}