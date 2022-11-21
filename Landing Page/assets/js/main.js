const form = document.getElementById("form");
const submitButton = document.getElementById("button-submit");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");


phone.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = phoneMask(e.target.value)
}

function phoneMask (phone) {
  return phone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}


