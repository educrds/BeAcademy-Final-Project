import { inputs } from '../data/inputs.js';

const verificationBox = document.getElementById('verification-box');
const submitButton = document.getElementById('button-submit');
const themeButton = document.getElementById('theme-icon');
const myForm = document.getElementById('form');
const phoneInput = document.getElementById('phone');

submitButton.addEventListener('click', handleSubmit);
themeButton.addEventListener('click', toggleThemeMode);
phoneInput.addEventListener('keypress', (e) =>
  maskInput('(##)#####-####', '#', e.target)
);

function handleSubmit(event) {
  event.preventDefault();
  validateInputs();
}

function toggleThemeMode() {
  document.documentElement.classList.toggle('dark-mode');
}

function maskInput(pattern, charFormat, element) {
  const inputLength = element.value.length;
  const restText = pattern.substring(inputLength);

  restText.substring(0, 1) != charFormat
    ? (element.value += restText.substring(0, 1))
    : null;
}

function validateInputs() {
  inputs.forEach((input) => {
    const { name, pattern } = input;

    const inputValue = document.getElementById(name);
    const errorMessage = inputValue.parentElement.querySelector(`.error-message`);
    const patternMatch = pattern.test(inputValue.value);

    try {
      if (!inputValue.value) throw (errorMessage.innerHTML = 'Campo obrigatório');
      else if (!patternMatch) throw (errorMessage.innerHTML = 'Formato inválido');
      else {
        input.isValid = true;
        errorMessage.innerHTML = '';
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
        verifiedMessage.style.display = 'inherit';
        form.reset();
      }, 1000)
    : null;
}
