// The Password generator will provide a password between 10 and 64 characters based on criteria the user specifies.

//The event Listener coded will prompt questions when button pushed
document.querySelector('#generate').addEventListener('click', writePassword);

// Various Arrays 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // Array of numeric characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']; // Array of special characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // Array of lowercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // Array of uppercase characters to be included in password

// Variable Declaration 
var confirmLength = '';
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmUpperCasedCharacters;
var confirmLowerCasedCharacters;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt('Please choose between 10 and 64 characters for your password.'));

  // If answer is outside the parameters a loop to get a valid input
  while (confirmLength <= 9 || confirmLength >= 65) {
    alert('Password length must be between 10 and 64 characters. Try again.');
    var confirmLength = (prompt('How many characters would you like your password to contain (min 10 max 64 characters)?'));
  }

  // Reiterate how many characters the user will have  
  alert(`Your password will have ${confirmLength} characters`);

  // Determine parameters of password 
  var confirmSpecialCharacters = confirm('Click OK to confirm if you would like to include special characters');
  var confirmNumericCharacters = confirm('Click OK to confirm if you would like to include numeric characters');
  var confirmLowerCasedCharacters = confirm('Click OK to confirm if you would like to include lowercase characters');
  var confirmUpperCasedCharacters = confirm('Click OK to confirm if you would like to include uppercase characters');

  // At least one selection must be taken, another WHILE loop will support this challenge requirement
while (confirmSpecialCharacters === false && confirmNumericCharacters === false && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
  alert('You need to make at least one selection. Try again.');
  var confirmSpecialCharacters = confirm('Click on OK to confirm if you would like to include special characters');
  var confirmNumericCharacters = confirm('Click on OK to confirm if you would like to include numeric characters');
  var confirmLowerCasedCharacters = confirm('Click on OK to confirm if you would like to include lowercase characters');
  var confirmUpperCasedCharacters = confirm('Click on OK to confirm if you would like to include uppercase characters');
}

  // Assign a value to the password parameters 
  var passwordCharacters = []

  if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters)
  }

  if (confirmNumericCharacters) {
    passwordCharacters = passwordCharacters.concat(numericCharacters)
  }

  if (confirmLowerCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
  }

  if (confirmUpperCasedCharacters) {
    passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
  }
 
  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the  the new array created above
  var randomPassword = ''

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;
}

// The following function will write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}