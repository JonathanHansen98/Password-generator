// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomFunc = {
  passwordLength: length,
  lower: hasLower,
  upper: hasUpper,
  symbols: hasSym,
  numbers:  hasNum,
}

// Write password to the #password input
function writePassword(lower, upper, symbols, numbers, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
  const typesCount = lower + upper + symbols + numbers;

  console.log(typesCount)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var length = prompt("Length: Please choose a number between 8 and 128.");
var hasLower = confirm("Include lower case?");
var hasUpper = confirm("Include upper case?");
var hasNum = confirm("Include numbers?");
var hasSym = confirm("Include Symbols?");

console.log(length);
console.log(hasLower);
console.log(hasUpper);
console.log(hasNum);
console.log(hasSym);



function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomSymbol() {
  var symbols = "!@#$%^&*()-=";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}
