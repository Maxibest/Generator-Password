// Sélection des éléments du DOM
const symbolsCheckbox = document.getElementById('symbols');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const lengthInput = document.getElementById('number');
const result = document.getElementById('generatedPassword');
const btn = document.getElementById('generate');

const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+[]{};:,.<>?/|";

function generatePassword(length, useUppercase, useNumbers, useSymbols) {
  let charSet = lowerCaseChars;

  if (useUppercase) charSet += upperCaseChars;
  if (useNumbers) charSet += numberChars;
  if (useSymbols) charSet += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }
  return password;
}

btn?.addEventListener('click', () => {
  const length = parseInt(lengthInput.value);
  const useUppercase = uppercaseCheckbox.checked;
  const useNumbers = numbersCheckbox.checked;
  const useSymbols = symbolsCheckbox.checked;

  const password = generatePassword(length, useUppercase, useNumbers, useSymbols);
  result.textContent = password;
});


lengthInput?.addEventListener('input', () => {
  const max = 20;
  const min = 1;

  let inputValue = parseInt(lengthInput.value);

  if (inputValue > max) {
    lengthInput.value = max;
  }

  if (inputValue < min) {
    lengthInput.value = min
  }
});