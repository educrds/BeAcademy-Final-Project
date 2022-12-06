import { inputs } from "../data/inputs.js";

const verificationBox = document.getElementById("verification-box");
const submitButton = document.getElementById("button-submit");
const themeButton = document.getElementById("theme-icon");
const myForm = document.getElementById("form");
const phone = document.getElementById("phone");

submitButton.addEventListener("click", handleSubmit);
themeButton.addEventListener("click", themeMode);
phone.addEventListener("keypress", maskPhoneInput);

function themeMode() {
  document.documentElement.classList.toggle("dark-mode");
}

function maskPhoneInput(event) {
  const phoneNumber = event.target.value.replace(/[^\d]/g, "");

  event.target.value = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,7)}-${phoneNumber.slice(7, 10)}`;
}

function handleSubmit(event) {
  event.preventDefault();
  validateInputs();
}

function validateInputs() {
  inputs.forEach((input) => {
    const { name, pattern } = input;

    const inputValue = document.getElementById(name);
    const errorMessage = inputValue.parentElement.querySelector(`.error-message`);
    const patternMatch = pattern.test(inputValue.value);

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
  allInputsValid(inputs, myForm, verificationBox);
}

function allInputsValid(inputs, form, verifiedMessage) {
  inputs.every((inputField) => inputField.isValid)
    ? setTimeout(() => {
        verifiedMessage.style.display = "inherit";
        form.reset();
      }, 1000)
    : null;
}
