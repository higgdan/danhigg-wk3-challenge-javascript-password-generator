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

// generate password function
function generatePassword() {
  // question prompt flow
  let pwLengthChoice = window.prompt("How many characters? (Min = 8, Max = 128)");
    // verify if the input is valid by checking if it is a number. if not a number, then restart question prompts
    if (isNaN(pwLengthChoice)) {
      window.alert("Invalid entry: your input must be a number.");
      generatePassword();
    }
    // verify the password length is within the specified range. if not in range, then restart question prompts
    if (pwLengthChoice < 8 || pwLengthChoice > 128) {
      window.alert("Invalid entry: your password must be between 8 and 128 characters long.");
      generatePassword();
    }
  let pwIncludeLowercase = window.confirm("Do you want to include lowercase letters?");
  let pwIncludeUppercase = window.confirm("Do you want to include UPPERCASE letters?");
  let pwIncludeNumeric = window.confirm("Do you want to include numeric characters?");
  let pwIncludeSpecial = window.confirm("Do you want to include special characters?");
    // verify the user has chosen at least one character set to generate their password. if they have not, then restart question prompts
    if ((!pwIncludeLowercase) && (!pwIncludeUppercase) && (!pwIncludeNumeric) && (!pwIncludeSpecial)) {
      window.alert("You must choose at least one character type (lowercase, UPPERCASE, numeric, or special).");
      generatePassword();
    }

  // define potential character sets
  const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const special = [" ","!","\"","#","$","%","&","\'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
  
  // define the set of all chosen characters
  // start with an empty array
  let chosenCharSet = []
    // append chosen character sets
    if (pwIncludeLowercase === true) {
    chosenCharSet = chosenCharSet.concat(alphaLower)
    }
    if (pwIncludeUppercase === true) {
    chosenCharSet = chosenCharSet.concat(alphaUpper)
    }
    if (pwIncludeNumeric === true) {
    chosenCharSet = chosenCharSet.concat(numeric)
    }
    if (pwIncludeSpecial === true) {
    chosenCharSet = chosenCharSet.concat(special)
    }

  // construct the password
  // start with an empty string
  let finalpw = "";
  // use a for loop to repeat the action of adding a character to the password string, as many times as the desired character length
  for (var i = 0; i < pwLengthChoice; i++) {
    // create random integer number from zero to (length of set of all chosen characters minus one).
    let randNumb = Math.floor(Math.random() * chosenCharSet.length);
    // use that random number to choose a character from the chosen character set and append it to the final password string
    finalpw = finalpw.concat(chosenCharSet[randNumb])
  }

  // output final result
  return (finalpw)
}

