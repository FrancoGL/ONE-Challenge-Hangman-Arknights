/**
 * Add a new operator to the list
 * @param {config} config -> config for post operation, use function from options_ajax 
 */
export const create = async (config) => {
  
  let response = await axios("https://63376b77132b46ee0be14969.mockapi.io/app/operators", config)

  if (!response.statusCode === 201) {
    throw new Error(`status: ${response.statusCode}, message: ${response.text}`)
  }

  sessionStorage.setItem("created", "true")

  location.replace("../../index.html")
}