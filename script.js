// Assignment Code
let number; 
let lower;
let upper;
let special;
const generateBtn = document.querySelector("#generate");
const charSets = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numeric: '0123456789',
  special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
};
// Write password to the #password input
function writePassword() {
  const length = Number(prompt('How  many characters would you like your password to be? Please enter a number between 8 and 128'))
  if (!length) {
    prompt('please input valid value 8 - 128')
  } else if (length < 8 || length > 128) {
    length = prompt('you must choose between 8 and 128')
  } else {
  number = confirm('would you like numbers in your password?')
  lower = confirm('would you like lowercase letters in your password?')
  upper = confirm('would you like uppercase letters in your password?')
  special = confirm('Would you like special characters in your password?')
  };
  if (!number && !lower && !upper && !special) {
    alert('Please select an option :(')
  };
  let password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword,);

//add 
