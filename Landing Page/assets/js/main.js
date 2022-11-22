const phone = document.getElementById("phone");
const submitButton = document.getElementById("button-submit");
const selectAnimals = document.getElementById("select-animals");

const inputs = [
  {
    name: "first-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
  },
  {
    name: "last-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
  },
  {
    name: "email",
    pattern: /\S+@\S+\.\S+/,
  },
  {
    name: "phone",
    pattern: /\(\d{2}\) \d{5}-\d{4}/,
  }
];

phone.addEventListener("keypress", maskPhoneInput);
submitButton.addEventListener("click", handleSubmit);

const animais = ["Mel", "Nina", "Tommy", "Dom"];

for (index in animais) {
  const optionsNumber = selectAnimals.options.length;
  selectAnimals.options[optionsNumber] = new Option(animais[index], index);
}

function maskPhoneInput(e) {
  const phoneNumber = e.target.value.replace(/[^\d]/g, "");

  e.target.value = `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2,7)}-${phoneNumber.slice(7, 11)}`;
}

function handleSubmit(e) {
  e.preventDefault();
  validateInputs();
}

function validateInputs() {

  inputs.forEach((input) => {

    const inputElement = document.getElementById(input.name);
    const errorMessage = inputElement.parentElement.querySelector(`.error-message`);

    try {
      if (!inputElement.value) {
        throw (errorMessage.innerHTML = "Campo obrigatório");
      } 
      else if (!input.pattern.test(inputElement.value)) {
        throw (errorMessage.innerHTML = "Formato inválido");
      } 
      else {
        throw (errorMessage.innerHTML = "");
      }
    } 
    catch (err) {
      err;
    }
  });
}
