export const showSuccessMessage = ($element) => {
  if (sessionStorage.getItem("created") === "true" ? true : false) {
    $element.classList.remove("success-hidden")
    setTimeout(() => {
      $element.classList.add("success-hidden")
    },3000)
  }
  sessionStorage.clear()
}