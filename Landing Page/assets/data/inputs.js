const inputs = [
  {
    id: "first-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
    isValid: false,
  },
  {
    id: "last-name",
    pattern: /\b([A-Za-z][a-z]+[ ]*)/,
    isValid: false,
  },
  {
    id: "email",
    pattern: /\S+@\S+\.\S+/,
    isValid: false,
  },
  {
    id: "phone",
    pattern: /\(\d{2}\)\d{5}-\d{4}/,
    isValid: false,
  },
  {
    id: "date",
    pattern: /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}/,
    isValid: false,
  },
];

export default inputs;
