import { options } from "./utils/options_ajax.js"

const $name = document.getElementById("operator"),
$class = document.getElementById("class"),
$faction = document.getElementById("faction")

let data = JSON.stringify({
  name : $name.value,
  class : $class.value,
  faction : $faction.value
})

let headers = {"Content-Type": "application/json; charset=utf-8"}

let config = options("POST", headers, data)

export const create = async () => {
  
  let response = await axios("https://63376b77132b46ee0be14969.mockapi.io/app/operators", config)

  if (!response.statusCode === 200) {
    throw {status: response.statusCode, message: response.text}
  }

  location.replace("../../index.html")
}