// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//function to generate password

function generatePassword () {
  var passwordLength = parseInt
  prompt("Enter the length of the password(8-128 characters):")
};

console.log("password length:", passwordLength);

//validating length of password

if ( 
  typeof passwordLength !== "number" ||
  passwordLength < 8 ||
  passwordLength > 128

){
  alert("invalid password length. Please enter number betwwen 8-128.");
  return "";
}

var includeNumbers = confirm ("Would you like to Include Numbers in your password?")
console.log("Include numbers:", includeNumbers);

var includeLowercase = confirm ("Would you like to include lowercase letters?")
console.log("Include lowercase letters:", includeLowercase);

var includeUppercase = confirm ("would you like to include uppercase letters?")
console.log("Include Uppercase letters:", includeUppercase);

var includeSpecialCharacters = confirm ("would you like to include special characters?")
console.log("include specialCharacters:", includeSpecialCharacters);





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordLength = getPasswordLength();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
