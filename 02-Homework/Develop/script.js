// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasLower;
var hasUpper;
var hasNum;
var hasSym;


// Write password to the #password input
function writePassword() {
  var length = prompt("Length: Please choose a number between 8 and 128.");

  if (length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128.")
    length = prompt("Length: Please choose a number between 8 and 128.");
  };

  hasLower = confirm("Include lower case?");
  hasUpper = confirm("Include upper case?");
  hasNum = confirm("Include numbers?");
  hasSym = confirm("Include Symbols?");
  password = generatePassword(hasLower, hasUpper, hasNum, hasSym, length);
  passwordText = document.querySelector("#password");

  console.log(length);
  console.log(hasLower);
  console.log(hasUpper);
  console.log(hasNum);
  console.log(hasSym);


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

function generatePassword(low, up, num, sym, length) {
  var count = low + up + num + sym;
  var typeArray = [{ low }, { up }, { num }, { sym }].filter( check => Object.values(check)[0])
  console.log(typeArray)

  for (let index = 0; index < length; index += count) {
    typeArray.forEach(type => {
      var func = Object.keys(type)[0];
      console.log(func)
    })
  }
}
