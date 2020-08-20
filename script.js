// Assignment code here
//password prompt

//length of password
//number of characters at least 8 characters and no more than 128 characters
//lowercase
//uppercase
//numeric
//special cahracters

//they must select at least chaaracter type

//create arrays with each character type for genertator to pull from

//password is generated on the page


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

//var length = parseInt(
//     prompt('How many characters would you like your password to contain?')
//   );
// From Ben Abbott to Everyone:  01:46 PM
// function getPasswordOptions() {
//   // Variable to store length of password from user input
//   var length = parseInt(
//     prompt('How many characters would you like your password to contain?')
//   );

//   // Conditional statement to check if password length is a number. Prompts end if this evaluates false
//   if (isNaN(length) === true) {
//     alert('Password length must be provided as a number');
//     return;
//   }
