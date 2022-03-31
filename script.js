// Arrays for special characters, lowercase letters, uppercase letters, and numbers
// const specialChars = ;

// const numberChars = ;

// const uppercase = ;

// const lowercase = ;

const possibleSet = [
  ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
]


//initial prompt with checks for validiy (is number, >=8, <=128). assign value to var
const generatePassword =() => {
  let userChoice = prompt("Enter a numeric value between 8 and 128 for your password:");
  let choice = parseInt(userChoice);
  let password = "";

  if ((isNaN(choice)) || (choice < 8) || (choice > 128)) {
    window.alert("That is not a valid selection. Please try again.");
    return password;
  }

  //prompts with concatenation with a final array length check that returns to beginning if lenth=0
  let possibleCharacters = [];
  let specialChars = confirm("Include Special Characters?")
  let numberChars = confirm("Include Numbers?")
  let uppercase = confirm("Include Uppercase Letters?")
  let lowercase = confirm("Include Lowercase Letters?")
  let userResponse = [specialChars, numberChars, uppercase, lowercase]

  for (i=0;i < 4; i++) {
    if (userResponse[i]) {
      possibleCharacters = possibleCharacters.concat(possibleSet[i]);
    }
  }

  if (possibleCharacters.length === 0) {
    window.alert("You must select at least one type of character.");
    return password;
  }

//for loop to generate password array and log to page
  for (i=0; i < userChoice; i++) {
    var index = Math.floor(Math.random() * possibleCharacters.length);
      password += possibleCharacters[index];
  }
return password;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);