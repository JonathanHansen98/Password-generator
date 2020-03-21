// Declaring Global variables and pwFunctions object
var hasLower;
var hasUpper;
var hasNum;
var hasSym;

var pwFunctions = {
  low: getRandomLower,
  up: getRandomUpper,
  num: getRandomNumber,
  sym: getRandomSymbol
};

// Assignment Code
var password = ""
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var length = parseInt(prompt("Length: Please choose a number starting from or equal to 8 and 128."));
// While loop keeps users from advancing until they select a number between 8 and 128
while (length < 8 || length > 128 || isNaN(length) ) {
    alert("Please choose a number starting from or equal to 8 and 128.")
    length = prompt("Length: Please choose a number between 8 and 128.");
  };

  hasLower = confirm("Include lower case?");
  hasUpper = confirm("Include upper case?");
  hasNum = confirm("Include numbers?");
  hasSym = confirm("Include Symbols?");
  password = generatePassword(hasLower, hasUpper, hasNum, hasSym, length);
  passwordText.value = password;
};

// Create random characters functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomSymbol() {
  var symbols = "!@#$%^&*()-=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}

// Generate Password Function

function generatePassword(low, up, num, sym, length) {
// counts criteria and filters out false values in object array
  var count = low + up + num + sym;
  // Type array is key:value pairs with key being low, up, num, or sym and the value being true or false
  var typeArray = [{ low }, { up }, { num }, { sym }].filter(check => Object.values(check)[0])
  // Loop runs for length of password and increments by count of criteria
  for (let index = 0; index < length; index += count) {
    typeArray.forEach(type => {
      // Creates a variable equal to the key in our typeArray(which is also keys in the pwFunctions array which allows us to call those functions to build the password)
      var func = Object.keys(type)[0];
       // Calls our functions in the pwFunctions array and concatatenates them into the password variable
      password += pwFunctions[func]();

    })
  }
  return password;
}
