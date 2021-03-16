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
// function that gathers data on the length of the password as well as types of characters to be included 
var getPasswordParameters = function () {
  // max password length
  var maxLength = 128;
  // min password length
  var minLength = 8;
  var passwordLength = parseInt(
    prompt("how long should your password be? (8-128 characters)")
  );
  // below are a set of conditions the user has to abide by to generate a password
  // if a number isnt entered the user will be alerted and the function will stop
  if (isNaN(passwordLength) === true) {
    alert("password length must be a number")
    return;
  }
  // if the number entered is too small the user will be alerted and the function will stop 
  if (passwordLength < minLength) {
    alert("minumum password length is 8 characters")
    return;
  }
  // if the number entered is too large the user will be alerted and the function will stop
  if (passwordLength > maxLength) {
    alert("max password length is 128 characters")
    return;
  }
// the user is asked to confirm what types of characters they would like in their password
  var uppercaseConfirm = confirm("Would you like to use uppercase letters?")
  if (uppercaseConfirm === true) {
    // alerts made to confirm what the user has chosen 
    alert("Uppercase letters will be used")
  } else {
    alert("Uppercase letters will not be used")
  }

  var lowercaseConfirm = confirm("Would you like to use lowercase letters?")
  if (lowercaseConfirm === true) {
    alert("Lowercase letters will be used")
  } else {
    alert("Lowercase letters will not be used")
  }
  var specialConfirm = confirm("Would you like to use special characters?")
  if (specialConfirm === true) {
    alert("Special characters will be used")
  } else {
    alert("Special characters will not be used")
  }
  var numericConfirm = confirm("Would you like to use numbers?")
  if (numericConfirm === true) {
    alert("Numbers will be used")
  } else {
    alert("Numbers will not be used")

  } 
  // object that takes in data from the user's choices
   var passwordParameters = {
    length: passwordLength, uppercaseConfirm: uppercaseConfirm, lowercaseConfirm: lowercaseConfirm, specialConfirm: specialConfirm,
    numericConfirm: numericConfirm
  };
 
  // if the user doesnt confirm at least 1 type of the characters provided the user will be alerted and the function will stop
  if (uppercaseConfirm !== true && lowercaseconfirm !== true && specialConfirm !== true & numericConfirm !== true
  ) {
    alert('must select at least one character type');

    return;
  }
 return passwordParameters;

}
// function that generates the password based on the user input 
var generatePassword = function () {
  var characterOptions = getPasswordParameters();
  //arrays to store the result of the generator 
  var result = [];
  //an array that stores all the characters that are able to be chosen
  var allCharacters = [];
  //an array that stores all the chosen characters 
  var usedCharacters = [];
  // function that grabs a random character from one of the chosen arrays and returns it
  var random = function (arr) {
    var randomLibrary = Math.floor(Math.random() * arr.length)
    var randomCharacter = arr[randomLibrary]
    return randomCharacter;
  }
  // if any of the character types are selected, a random character from the chosen arrays will be pushed into usedcharacters
  if (characterOptions.uppercaseConfirm) {
    allCharacters = allCharacters.concat(uppercaseCharacters);
    usedCharacters.push(random(uppercaseCharacters));
  }
  if (characterOptions.lowercaseConfirm) {
    allCharacters = allCharacters.concat(lowercaseCharacters);
    usedCharacters.push(random(lowercaseCharacters));
  }
  if (characterOptions.specialConfirm) {
    allCharacters = allCharacters.concat(specialCharacters);
    usedCharacters.push(random(specialCharacters));
  }
  if (characterOptions.numericConfirm) {
    allCharacters = allCharacters.concat(numericCharacters);
    usedCharacters.push(random(numericCharacters));
  } //for loop that combines thhe characters used with the user inputed length 
  for (var i = 0; i < options.length; i++) {
    var chosenCharacter = random(allCharacters);
    result.push(chosenCharacter);
  }
 //for loop thats adds at least 1 character from each selected character type
  for (var i = 0; i < usedCharacters.length; i++) {
    result[i] = usedCharacters[i];
  }// turns result into a string text
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
