// Assignment Code
let confirmLength = "";
let confirmNumber; 
let confirmLower;
let confirmUpper;
let confirmSpecial;
const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

const charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};
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
    passwordChars = passwordChars.concat(charSets.numeric)
  }
  if (confirmLower) {
    passwordChars = passwordChars.concat(charSets.lowercase)
  }
  if (confirmUpper) {
    passwordChars = passwordChars.concat(charSets.uppercase)
  }
  if (confirmSpecial) {
    passwordChars = passwordChars.concat(charSets.special)
  }
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

for (let i=0; i < charSets.lowercase; i++) {
  console.log(charSets.lowercase[i])
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//add 
