// Assignment code here

// ATTN GRADER: I put lots of notes in here for myself as I puzzled things out. I'll find a way to clean that up for readability later.

// VARIABLES
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']


// FUNCTIONS
function generatePassword() {
  // This should ask the user their desired password length.
  var amount = Number(prompt("Please provide a number between 8 and 128 to choose your password lenght."));

  // THEN my input should be validated and at least one character type should be selected
  // has to be a number, has to be at least 8, at most 128

  while (isNaN(amount) || amount < 8 || amount > 128) {
    amount = Number(prompt("Invalid input! Please provide a number between 8 and 128 to choose your password lenght."));
  }

  // This should check what types of characters the user wants to include.
  var includeLowercase = confirm("Click OK to include lowercase letters.");
  var includeUppercase = confirm("Click OK to include uppercase letters.");
  var includeNumbers = confirm("Click OK to include numbers.");
  var includeSpecials = confirm("Click OK to include special characters.");

  var output = [amount, includeLowercase, includeUppercase, includeNumbers, includeSpecials];
  return output;
}

var choices = generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // document.querySelector was in the starter code. It's new to me, so I asked ChatGPT to break things down for me.
  // document is an object which represents the HTML document loaded in the web browser. JD said we'll learn about objects tomorrow I think.
  // querySelector is a method that lets you select and retrieve the first element in the document that matches the specified selector - or null if there is no match found
  var passwordText = document.querySelector("#password");
  // This one searches the HTML for the first id="password" it finds.
  // Okay so: this sets the variable passwordText = line 22 of index.html, which is id="password"

  // My code:
  // variable for combined characters like we did in class
  var combinedChars = [];

  var includeLowercase = choices[1];
  var includeUppercase = choices[2];
  var includeNumbers = choices[3];
  var includeSpecials = choices[4];

  // concatenates things based on user choices
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

  // for loop to generate the password - same as we used in class
  for (var count = 0; count < choices[0]; count++) {
    var random = Math.random();
    var randomIndex = Math.floor(random * combinedChars.length);

    password += combinedChars[randomIndex];
  }

  // Added return password because it's what we used in class
  // BUT I think this is when we need this part of the starter code to be used, because this puts the variable password into the text box. 
  // ChatGPT explained that passwordText is a textarea element we obtained using the queryselector earlier
  passwordText.value = password;
  // variable passwordText was previously set to represent line 22 of index.html, and now we are making the value of that line (#password) equal or newly generated password.

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
