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
  },
];

export {inputs}