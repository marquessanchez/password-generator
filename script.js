// characters the user can use 
var uppercase = [ "A", "B", "C", "D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W","X", "Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// function to prompt user for password options
function getPassword (){
// var passwordLength = prompt('How many characters will you like to use?')  
var passwordLength = parseInt(prompt('How many characters will you like to use?'));
if (passwordLength > 128){
  alert ("Please enter a number from 8-128");
  return;
}
if (passwordLength < 8){
  alert ("Please enter a number from 8-128");
  return;
}
// ask for password characters
var getLowercase = confirm('Will you like to use any lowercase letters? Select "OK" for YES');
var getUppercase = confirm('Will you like to use any uppercase letter? Select "OK" for YES');
var getNumbers = confirm('Will you like to use any numbers? Select "OK" for YES');
var getSpecials = confirm('Will you like to use any special characters? Select "OK" for YES');


// (REQUIRED) here we need notify the user they must use one of the following  
if( getLowercase === false && getUppercase === false && getNumbers === false && getSpecials === false){
  alert('Please select at least one of following: lowercase, uppercase, numbers, special characters');
  return;
}

// user options
var userChoices = {
  length:passwordLength,
  getLowercase:getLowercase,
  getUppercase:getUppercase,
  getNumbers:getNumbers,
  getSpecials:getSpecials,
};
return userChoices;
}

// user password array 
function passwordArr(arr){
var passwordIndex = Math.floor(Math.random() * arr.length);
var passwordElement = arr[passwordIndex];
return passwordElement;
}

// function to generate password for user 
function generatePassword(){
  var result = userChoices()
  
  return result.join('');
  }
  
  

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// teamtreehouse.com/community/adding-user-input-to-the-array-in-javascript