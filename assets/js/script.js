// Assignment Code
textEl = document.getElementById("#password")


var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
// Array of uppercase characters to be included in password
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
var getPasswordParameters = function () {
  var maxLength = 128;
  var minLength = 8;
  var passwordLength = parseInt(
    prompt("how long should your password be? (8-128 characters)")
  );
  if (isNaN(passwordLength) === true) {
    alert("password length must be a number")
  } else {
    return passwordLength;
  }
  if (passwordLength < minLength) {
    alert("minumum password length is 8 characters")
  } else {
    return passwordLength;
  }
  if (passwordLength > maxLength) {
    alert("max password length is 128 characters")
  } else {
    return passwordLength;
  }

  var uppercaseConfirm = confirm("Would you like to use uppercase letters?")
  if (uppercaseConfirm) {
    alert("Uppercase letters will be used")
  } else {
    alert("Uppercase letters will not be used")

  }

  var lowercaseConfirm = confirm("Would you like to use lowercase letters?")
  if (lowercaseConfirm) {
    alert("Lowercase letters will be used")
  } else {
    alert("Lowercase letters will not be used")

  }
  var specialConfirm = confirm("Would you like to use special characters?")
  if (specialConfirm) {
    alert("Special characters will be used")
  } else {
    alert("Special characters will not be used")

  }
  var numericConfirm = confirm("Would you like to use numbers?")
  if (numericConfirm) {
    alert("Numbers will be used")
  } else {
    alert("Numbers will not be used")

  }
  if (uppercaseConfirm !== true && lowercaseconfirm !== true && specialConfirm !== true & numericConfirm !== true
  ) {
    alert('must select at least one character type');

    return;
  }
  var passwordParameters = {
    length: passwordLength, uppercaseConfirm: uppercaseConfirm, lowercaseConfirm: lowercaseConfirm, specialConfirm: specialConfirm,
    numericConfirm: numericConfirm
  };
  return passwordParameters;
}

var generatePassword = function () {
  var options = getPasswordParameters();
  var result = [];
  var allCharacters = [];
  var usedCharacters = [];
  var random = function (arr) {
    var characterLibrary = Math.floor(Math.random() * arr.length)
    var randomCharacter = arr[characterLibrary]
    return randomCharacter;
  }
  if (options.uppercaseConfirm) {
    allCharacters = allCharacters.concat(uppercaseCharacters);
    usedCharacters.push(random(uppercaseCharacters));
  }
  if (options.lowercaseConfirm) {
    allCharacters = allCharacters.concat(lowercaseCharacters);
    usedCharacters.push(random(lowercaseCharacters));
  }
  if (options.specialConfirm) {
    allCharacters = allCharacters.concat(specialCharacters);
    usedCharacters.push(random(specialCharacters));
  }
  if (options.numericConfirm) {
    allCharacters = allCharacters.concat(numericCharacters);
    usedCharacters.push(random(numericCharacters));
  }
  for (var i = 0; i < options.length; i++) {
    var chosenCharacter = random(allCharacters);
    result.push(chosenCharacter);
  }
  for (var i = 0; i < usedCharacters.length; i++) {
    result[i] = usedCharacters[i];
  }
  return result.join('');
}
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
var writePassword = function () {
  var password = generatePassword(getPasswordParameters);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
