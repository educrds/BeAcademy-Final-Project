import { inputs } from "../data/inputs.js";
const phone = document.getElementById("phone");
const submitButton = document.getElementById("button-submit");

submitButton.addEventListener("click", handleSubmit);
phone.addEventListener("keypress", maskPhoneInput);

function maskPhoneInput(event) {
  const phoneNumber = event.target.value.replace(/[^\d]/g, "");

  event.target.value = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    7
  )}-${phoneNumber.slice(7, 10)}`;
}

function handleSubmit(event) {
  event.preventDefault();
  validateInputs();
}

function validateInputs() {
  inputs.forEach((input) => {

    const inputElement = document.getElementById(input.name);
    const errorMessage =
      inputElement.parentElement.querySelector(`.error-message`);
    // const patternMatch = !input.pattern.test(inputElement.value);

    try {
      if (!inputElement.value)
        throw (errorMessage.innerHTML = "Campo obrigatório");
      else if (!input.pattern.test(inputElement.value))
        throw (errorMessage.innerHTML = "Formato inválido");
      else throw (errorMessage.innerHTML = "");
    } catch (error) {
      error;
    }
  });
}
