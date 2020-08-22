// Assignment code here
//password prompt window goes here

//create arrays with each character type for genertator to pull from
//lower
var lowerCase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
//upper
function changeCharacterToUppercase(character) {
  return character.toUpperCase()
}
var upperCase = lowerCase.map(changeCharacterToUppercase)
//numbers
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ]
//special character
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
specialChar = specialChar.split('')


//number of characters at least 8 characters and no more than 128 characters
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

//they must select a valid input
var getPasswordLength = function() {
  var inputValue
  var validInput = false 
  while ( validInput === false) {
    inputValue = window.prompt("Input password length between 8 and 128 characters.")
    var numberInputValue = parseInt(inputValue)
    var inputTooShort = numberInputValue <= 7;
    var inputTooLong = numberInputValue >= 128;
    var inputNaN = isNaN(numberInputValue);
      if (inputTooShort === true || inputTooLong === true || inputNaN === true) {
        window.alert("Input is incorrect, try again! Input must be a number between 8 and 128.")//invalid prompt otherwise
        validInput = false;
      } else {
        validInput = true;
      } 
  }
  return inputValue;
};


//generate pass code function
function generatePassword() {
  //length of password
  var passwordLength = getPasswordLength();
  //Lower case prompt
  var lowerCasePrompt = window.confirm("Would you like to use lower case, click yes to confirm.")
  //Upper case prompt
  var upperCasePrompt = window.confirm("Would you like to use UPPER case, click yes to confirm.")
  //Numeric case prompt
  var numbersPrompt = window.confirm("Would you like to use numbers, click yes to confirm.")
  //special character case prompt
  var specialCharPrompt = window.confirm("Would you like to use Special Characters (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~), click yes to confirm.")
  // this variable will hold character sets the user wants to include
  var selectedCharacterSets = []
  // if lowercase is true, add lowercase array to ^ that array
  if (lowerCasePrompt === true) {
    selectedCharacterSets.push(lowerCase)
  }
  if (upperCasePrompt === true) {
    selectedCharacterSets.push(upperCase)
  }
  if (numbersPrompt === true) {
    selectedCharacterSets.push(numbers)
  }
  if (specialCharPrompt === true) {
    selectedCharacterSets.push(specialChar)
  }
  // flatten array for ease of use
  selectedCharacterSets = selectedCharacterSets.flat();
  //creating blank passcode to add characters too
  var password = ""
  for (i=0; i < passwordLength; i++) {
    var randomIndex = randomNumber(0, selectedCharacterSets.length - 1);
    var randomChar = selectedCharacterSets[randomIndex];
    password = password + randomChar;
  }
return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
