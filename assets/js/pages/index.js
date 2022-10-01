import { showSuccessMessage } from "../show_success_message.js";

document.addEventListener("DOMContentLoaded", () => {
  
  const $success = document.querySelector(".created");

  showSuccessMessage($success)
})