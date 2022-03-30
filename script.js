// Assignment code here
var getCharacters;
var getLowercase;
var getUppercase;
var getNumbers;
var getSpecialCharacters;
var getChoices;


// Ask for password choices
function getCharacters(){


}

function getLowercae(){
    return String.fromCharCode(Math.floor.random() * 26 +97);
}

function getUppercase(){
    return String.fromCharCode(Math.floor.Math.random() * 26 +65);
}

function getNumbers(){
    return String.fromCharCode(Math.floor.Math.random() * 10 + 48);

}

function getSpecialCharacters(){
    var specialCharacters = '!@#$%^&*()={}[]/?.,'
    return String.fromCharCode(Math.floor.Math.random() * 10 + 48);


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Here's your password");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log (password);