var specialChars = [" ","!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", '"']
var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var lowerCharCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCharCase = lowerCharCase.toUpperCase();


// // Assignment Code
var generateBtn = document.querySelector("#generate");
// // Write password to the #password input
function writePassword() {
  var lowerCase = document.getElementById('lowerCase').checked;
  var upperCase = document.getElementById('upperCase').checked;
  var numeric = document.getElementById('numeric').checked;
  var special = document.getElementById('special').checked;
  var characterTypes = [lowerCase, upperCase, numeric, special];
  var isOneChecked = characterTypes.some(type => type);
  if (isOneChecked) {
    let charLength;
    do {
      charLength = prompt("Please enter the passesword length, between 8 and 128 characters.");
    } while (charLength === '' || parseInt(charLength) < 8 || parseInt(charLength) > 128)

    charLength = parseInt(charLength);
    if (charLength !== null) {
      let password = "";
      for (let i = 0; i < charLength; i++) {
        if (lowerCase && password.length < charLength) password += lowerCharCase[Math.floor(Math.random() * lowerCharCase.length)];
        if (upperCase && password.length < charLength) password += upperCharCase[Math.floor(Math.random() * upperCharCase.length)];
        if (numeric && password.length < charLength) password += numChars[Math.floor(Math.random() * numChars.length)];
        if (special && password.length < charLength) password += specialChars[Math.floor(Math.random() * specialChars.length)];
      }
      document.querySelector("#password").value = `Your Secure Password is: ${password}`;
    }
  } else {
    alert('At least one of the character types must be selected');
  }
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

