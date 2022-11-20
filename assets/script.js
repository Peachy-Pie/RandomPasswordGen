// SETS VARIABLE TO BE SELECTED FOR AN EVENT LISTENER
const generateBtn = document.querySelector("#generate");
// ADD EVENT LISTENER TO GENERATE BUTTON
generateBtn.addEventListener("click", writePassword);
let numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m", "n","o","p","q","r","s","t","u", "v","w","x","y", "z",];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R", "S","T", "U","V","W","X","Y","Z",];

// FUNCTION TO GENERATE PASSWORD
function generatePassword() {
  let confirmLength = prompt(
    "How  many characters would you like your password to be? Please enter a number between 8 and 128"
  );
// CONFIRMS IF LENGTH IS A CORRECT VALUE BETWEEN 8 - 128
  while (confirmLength < 8 || confirmLength > 128) {
    alert("please input valid value 8 - 128");
    confirmLength = prompt("select a number from 8 - 128");
  }
// CONFIRM PROMPTS TO VERIFY IF YOU WANT THESE IN PASSWORD
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
  // CONFIRMS THAT A VALUE IS BEING SELECTED 
  if (!confirmNumber && !confirmLower && !confirmUpper && !confirmSpecial) {
    alert('please select valid option :(')
    return;
  }
  alert(`your values for numbers, lower/uppercase, and special characters have been selected with a password length of ${confirmLength}.`)
// EMPTY ARRAY TO RANDOMIZE TO ACTUALLY GENERATE THE PASSWORD
  let passwordChars = [];
// CONCATS NUMERIC, LOWER/UPPERCASE, AND SPECIAL ARRAYS ON PASSWORD CHARS ARRAY IF BOOLEAN = TRUE
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
  // EMPTY STRING TO PLACE RANDOMIZED PASSWORD INTO
  let randomizedPassword = "";
  //RANDOMIZES PASSWORD BASED ON CONFIRM LENGTHS VALUE FROM PROMPT
  for (let i = 0; i < confirmLength; i++) {
    randomizedPassword = randomizedPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)];
  }
  // RETURNS RANDOMIZED PASSWORD TO ACTUALLY HAVE A VALUE
  return randomizedPassword;
}

// WRITES PASSWORD TO THE #PASSWORD INPUT
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
