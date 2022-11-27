import { inputs } from "../data/inputs.js";
const myForm = document.getElementById("form");
const phone = document.getElementById("phone");
const formVerification = document.getElementById("verification");
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
    const inputValue = document.getElementById(input.name);
    const errorMessage =
      inputValue.parentElement.querySelector(`.error-message`);
    const patternMatch = input.pattern.test(inputValue.value);

    try {
      if (!inputValue.value)
        throw (errorMessage.innerHTML = "Campo obrigatório");
      else if (!patternMatch)
        throw (errorMessage.innerHTML = "Formato inválido");
      else {
        input.isValid = true;
        errorMessage.innerHTML = "";
      }
    } catch (error) {
      error;
    }
  });
  const inputIsValid = inputs.every(
    (inputField) => inputField.isValid === true
  );
  inputIsValid
    ? setTimeout(() => {
        formVerification.style.display = "inherit";
        myForm.reset();
      }, 1000)
    : null;
}
