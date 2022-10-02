import { options } from "../utils/options_ajax.js";
import { buildData} from "../utils/build_data.js";
import { buildHeaders } from "../utils/build_headers.js";
import {create} from "../new_operator.js";

document.addEventListener("submit", (e) => {

  const $loader = document.querySelector(".loader__container"),
  $name = document.getElementById("operator"),
  $class = document.getElementById("class"),
  $faction = document.getElementById("faction")

  let data = buildData($name.value, $class.value, $faction.value)

  let headers = buildHeaders()
  
  let config = options("POST", headers, data)

  e.preventDefault();
  
  $loader.classList.remove("loader__hidden")
  create(config)
})

document.addEventListener("click", (e) => {

  if (e.target.matches("#btn-cancel")) {
    location.replace("../../../index.html")
  }
})