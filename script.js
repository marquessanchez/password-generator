//function to genrate the password  
var uppercase = [ "A", "B", "C", "D","E","F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W","X", "Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [ "1","2","3","4","5","6","7","8","9","0"];
var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//function to prompt user for passwor options

function getPasswordRequirment (){
var passwordLength = parseInt(prompt('How many characters will you like to use?'));
if (passwordLength > 128){
  alert ("Please enter a number from 8-128");
  return;
}
if (passwordLength < 8){
  alert ("Please enter a number from 8-128");
  return;
}
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