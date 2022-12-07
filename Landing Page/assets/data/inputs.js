const inputs = [
  {
    name: "first-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
    isValid: false,
  },
  {
    name: "last-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
    isValid: false,
  },
  {
    name: "email",
    pattern: /\S+@\S+\.\S+/,
    isValid: false,
  },
  {
    name: "phone",
    pattern: /\(\d{2}\)\d{5}-\d{4}/,
    isValid: false,
  },
  {
    name: "date",
    pattern: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/,
    isValid: false,
  },
];

export default inputs;
