const generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","t","u", "v","w","x","y", "z",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S","T", "U","V","W","X","Y","Z",];

// Write password to the #password input
function generatePassword() {
  let confirmLength = prompt(
    "How  many characters would you like your password to be? Please enter a number between 8 and 128"
  );
  if (confirmLength < 8 || confirmLength > 128) {
    alert("please input valid value 8 - 128");
    confirmLength = prompt("select a number from 8 - 128");
  }
  const confirmNumber = confirm("would you like numbers in your password?");
  const confirmLower = confirm(
    "would you like lowercase letters in your password?"
  );
  const confirmUpper = confirm(
    "would you like uppercase letters in your password?"
  );
  const confirmSpecial = confirm(
    "Would you like special characters in your password?"
  );
  if (!confirmNumber && !confirmLower && !confirmUpper && !confirmSpecial) {
    alert("Please select an option :(");
  }
  let passwordChars = [];
  if (confirmNumber) {
    passwordChars = passwordChars.concat(numeric);
  }
  if (confirmLower) {
    passwordChars = passwordChars.concat(lowerCase);
  }
  if (confirmUpper) {
    passwordChars = passwordChars.concat(upperCase);
  }
  if (confirmSpecial) {
    passwordChars = passwordChars.concat(special);
  }
  console.log(passwordChars);

  let randomizedPassword = "";
  for (let i = 0; i < confirmLength; i++) {
    randomizedPassword = randomizedPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  return randomizedPassword;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
