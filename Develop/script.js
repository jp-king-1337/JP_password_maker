// Assignment code here

// VARIABLES
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']


// FUNCTIONS
function generatePassword() {
  var amount = Number(prompt("Please provide a number between 8 and 128 to choose your password length."));

  while (isNaN(amount) || amount < 8 || amount > 128) {
    amount = Number(prompt("Invalid input! Please provide a number between 8 and 128 to choose your password length."));
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
  var password = "";
  var choices = generatePassword();
  var passwordText = document.querySelector("#password");
  var chosenCharSets = [];

  var passwordLength = choices[0]
  var includeLowercase = choices[1];
  var includeUppercase = choices[2];
  var includeNumbers = choices[3];
  var includeSpecials = choices[4];

  if (includeLowercase) {
    chosenCharSets = chosenCharSets.concat(lowercase);
  }
  if (includeUppercase) {
    chosenCharSets = chosenCharSets.concat(uppercase);
  }
  if (includeNumbers) {
    chosenCharSets = chosenCharSets.concat(numbers);
  }
  if (includeSpecials) {
    chosenCharSets = chosenCharSets.concat(specials);
  }

  for (var count = 0; count < passwordLength; count++) {
    var random = Math.random();
    var randomIndex = Math.floor(random * chosenCharSets.length);
    var randomCharacter = chosenCharSets[randomIndex];

    password += randomCharacter;
  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
