// Assignment code here

// VARIABLES
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']


// FUNCTIONS
function generatePassword() {
  var amount = Number(prompt("Please provide a number between 8 and 128 to choose your password lenght."));

  while (isNaN(amount) || amount < 8 || amount > 128) {
    amount = Number(prompt("Invalid input! Please provide a number between 8 and 128 to choose your password lenght."));
  }

  var includeLowercase = confirm("Click OK to include lowercase letters.");
  var includeUppercase = confirm("Click OK to include uppercase letters.");
  var includeNumbers = confirm("Click OK to include numbers.");
  var includeSpecials = confirm("Click OK to include special characters.");

  var output = [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
  return output;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var choices = generatePassword();
  var passwordText = document.querySelector("#password");
  var combinedChars = [];

  var includeLowercase = choices[1];
  var includeUppercase = choices[2];
  var includeNumbers = choices[3];
  var includeSpecials = choices[4];

  if (includeLowercase) {
    combinedChars = combinedChars.concat(lowercase);
  }
  if (includeUppercase) {
    combinedChars = combinedChars.concat(uppercase);
  }
  if (includeNumbers) {
    combinedChars = combinedChars.concat(numbers);
  }
  if (includeSpecials) {
    combinedChars = combinedChars.concat(specials);
  }

  var password = "";

  for (var count = 0; count < choices[0]; count++) {
    var random = Math.random();
    var randomIndex = Math.floor(random * combinedChars.length);

    password += combinedChars[randomIndex];
  }

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
