// Assignment Code
let confirmLength = "";
let confirmNumber; 
let confirmLower;
let confirmUpper;
let confirmSpecial;
const generateBtn = document.querySelector("#generate");

let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Write password to the #password input
function generatePassword() {
  confirmLength = (prompt('How  many characters would you like your password to be? Please enter a number between 8 and 128'))
  if (!confirmLength) {
    prompt('please input valid value 8 - 128')
  } else if (confirmLength < 8 || confirmLength > 128) {
   confirmLength = prompt('you must choose between 8 and 128')
  } else {
  confirmNumber = confirm('would you like numbers in your password?');
  confirmLower = confirm('would you like lowercase letters in your password?');
  confirmUpper = confirm('would you like uppercase letters in your password?');
  confirmSpecial = confirm('Would you like special characters in your password?');
  };
  if (!confirmNumber && !confirmLower && !confirmUpper && !confirmSpecial) {
    alert('Please select an option :(')
  };
  let passwordChars = []
  if (confirmNumber) {
    passwordChars = passwordChars.concat(numeric)
  }
  if (confirmLower) {
    passwordChars = passwordChars.concat(lowerCase)
  }
  if (confirmUpper) {
    passwordChars = passwordChars.concat(upperCase)
  }
  if (confirmSpecial) {
    passwordChars = passwordChars.concat(special)
  }
  console.log(passwordChars)
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//add 
