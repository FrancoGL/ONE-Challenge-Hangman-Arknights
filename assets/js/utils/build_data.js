export const buildData = (nameOperator, classOperator, faction) => {
  return JSON.stringify({
    name : nameOperator,
    class : classOperator,
    faction : faction
  })
}