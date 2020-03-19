// Declaring Global variables and pwGenerator object
var hasLower;
var hasUpper;
var hasNum;
var hasSym;

var pwGenerator = {
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
  var length = parseInt(prompt("Length: Please choose a number between 8 and 128."));
// While loop keeps users from advancing until they select a number between 8 and 128
  while (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.")
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
};

function getRandomNumber() {
  return Math.floor(Math.random() * 10)
}





// Generate Password Function

// passing in functions from pwGenerator Object
function generatePassword(low, up, num, sym, length) {
  // counts criteria selected, filters out fasle values and creates a new array with only the new values
  var count = low + up + num + sym;
  var typeArray = [{ low }, { up }, { num }, { sym }].filter(check => Object.values(check)[0])
  console.log(typeArray)

// For loop increments at the count of how many criteria was selected
  for (let index = 0; index < length; index += count) {

// The forEach method executes a function once for each array element, I use it here to create variable 'func' equal to the keys in our typeArray concatenated onto the pwGenerator object. This calls our functions one after the other for the length of our password, creating our random password.
    typeArray.forEach(type => {
      var func = Object.keys(type)[0];
      password += pwGenerator[func]();

    })
  }
  console.log(password)
  return password;
}
