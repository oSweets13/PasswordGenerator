// Assignment Code
var generateBtn = document.querySelector("#generate");

//Password Character Inputs
var inputs = [""]
var uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercases = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "!#$%&*+-./:;=?@"
var randomPassword = ""


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Write function to generate the random password
function generatePassword () {
  var passwordLength = prompt("How many characters would you like?");
    if (passwordLength < 8 || passwordLength > 182 || isNaN(passwordLength)) {
      alert("Invaild entry - Please enter a number between 8 and 128");
      return
    } 

  var lowercaseConf = confirm("Include lowercase letters?");
    if (lowercaseConf === true) {
      for (var i=0; i < lowercases.length; i++) {
        inputs.push(lowercases[i]);
      }
      console.log(inputs)
    }

  var uppercaseConf = confirm("Include uppercase letters?");
    if (uppercaseConf === true) {
      for (var i=0; i < uppercases.length; i++) {
        inputs.push(uppercases[i]);
      }
      console.log(inputs)
    }

  var numbersConf = confirm("Include numbers?");
    if (numbersConf === true) {
      for (var i=0; i < numbers.length; i++) {
        inputs.push(numbers[i]);
      }
      console.log(inputs)
    }

  var specialConf = confirm("Include special characters?");
    if (specialConf === true) {
      for (var i=0; i < special.length; i++) {
        inputs.push(special[i]);
      }
      console.log(inputs)
    }

  if (lowercaseConf === false && uppercaseConf === false && numbersConf === false && specialConf === false) {
    alert("You must select at least one type of character.")
    return;
  }

  var randomPassword = ""

  const confirmLength = parseInt(passwordLength)

for (var i=0; i < confirmLength; i++) {
  inputs[
    Math.floor(Math.random() * inputs.length)];
  randomPassword += inputs [
    Math.floor(Math.random()* inputs.length)];  
}

return randomPassword;
}

