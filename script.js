// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let password = "";

//initial prompt with checks for validiy (is number, >=8, <=128). assign value to var
var generatePassword = function() {
  let userChoice = prompt("Enter a numeric value between 8 and 128 for your password:");
  
  let choice = parseInt(userChoice);

  if (userChoice === null) {
    return password;
  } else if (
    (isNaN(choice)) ||    
    (userChoice < 8) ||
    (userChoice > 128))
    {
    window.alert("That is not a valid selection. Please try again.");
    generatePassword();
  } else {
    //prompts with concatenation with a final array length check that returns to beginning if lenth=0
    let possibleCharacters = [];
    console.log(possibleCharacters);

    let specialSet = confirm("Include Special Characters?");
    if (specialSet) {
      possibleCharacters = possibleCharacters.concat(specialChars);
    }
    console.log(possibleCharacters);

    let numberSet = confirm("Include Numbers?");
    if (numberSet) {
      possibleCharacters = possibleCharacters.concat(numberChars);
    } 
    console.log(possibleCharacters);

    let upperSet = confirm("Include Uppercase Letters?");
    if (upperSet) {
      possibleCharacters = possibleCharacters.concat(uppercase);
    }
    console.log(possibleCharacters);

    let lowerSet = confirm("Include Lowercase Letters?");
    if (lowerSet) {
      possibleCharacters = possibleCharacters.concat(lowercase);
    }
    console.log(possibleCharacters);

    if (possibleCharacters.length == 0) {
      window.alert("You must select at least one type of character.");
      generatePassword();
    }

  //for loop to generate password array and log to page
 
    for (i=0; i < userChoice; i++) {
      var index = Math.floor(Math.random() * possibleCharacters.length);
      console.log(possibleCharacters[index]);
      password += possibleCharacters[index];
      console.log(password);
    }
  return password;
  };
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

