import inputs from '../data/inputs.js';

const verificationBox = document.getElementById('verification-box');
const submitButton = document.getElementById('button-submit');
const themeButton = document.getElementById('theme-icon');
const myForm = document.getElementById('form');
const phoneInput = document.getElementById('phone');

submitButton.addEventListener('click', handleSubmit);
themeButton.addEventListener('click', toggleThemeMode);
phoneInput.addEventListener('keypress', (e) => maskInput('(##)#####-####', '#', e.target));

//handling the submit button and showing a message if there are errors
function handleSubmit(event) {
  event.preventDefault();
  validateInputs();
}

// handling the theme button
function toggleThemeMode() {
  document.documentElement.classList.toggle('dark-mode');
}

// Input mask for inputs
function maskInput(pattern, charFormat, element) {
  const inputLength = element.value.length;
  const restText = pattern.substring(inputLength);
  const firstCharRestText = restText.substring(0, 1);

  firstCharRestText != charFormat ? (element.value += firstCharRestText) : null;
}

// validating inputs and showing a message if there are errors
function validateInputs() {
  inputs.forEach((input) => {
    const { id, pattern } = input;

    const element = document.getElementById(id);
    const errorMessage = element.parentElement.querySelector(`.error-message`);
    const patternMatch = pattern.test(element.value);

    try {
      if (!element.value)
        throw (errorMessage.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Campo obrigatório');
      else if (!patternMatch)
        throw (errorMessage.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Formato inválido');
      else {
        input.isValid = true;
        errorMessage.innerHTML = '';
      }
    } catch (error) {
      error;
    }
  });
  allValidInputs(inputs, myForm, verificationBox);
}

// checking if all inputs are valid and returning a success message
function allValidInputs(inputs, form, verifiedMessage) {
  const validInputs = inputs.every((inputField) => inputField.isValid);

  validInputs
    ? setTimeout(() => {
        verifiedMessage.style.display = 'inherit';
        form.reset();
      }, 1000)
    : null;
}
