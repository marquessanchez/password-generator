// Assignment code here
// var useCharacters;
// var useLowercase;
// var useUppercase;
// var useNumbers;
// var specialCharacters = '!@#$%^&*()={}[]/?.,'
// var useChoices;
// var userChoice;


// Ask for password choices
function userChoice() {
    var characterLength = window.prompt("Enter a number from 8-126")
    if (characterLength <= 7) {
        window.prompt("Enter a number from 8-126");
    } else if 
    (characterLength >= 129) {
        window.prompt("Enter a number from 8-126");
    } else {
        characterLength = useCharacters;
    }

    var lowercase = window.prompt("Would you like to use lowercase letters? Enter Y for YES")
    if (lowercase = true) {
        useLowercase();
        console.log("lowercase")
    }
    else {
        lowercase != useLowercase;
    }
    
    var uppercase = window.prompt("Would you like to use uppercase letters? Enter Y for YES")
    if (uppercase = true) {
        useUppercase();
        console.log("uppercase")
    }
    else {
        uppercase != useUppercase();
    };

    var numbers= window.prompt("Would you like to use numbers? Enter Y for YES")
    if (numbers = true) {
        useNumbers();
        console.log("numbers")
    }
    else {
        numbers != useNumbers();;
    }

    var specials= window.prompt("Would you like to use special characters? Enter Y for YES")
    if (specials = true) {
        useSpecials();
        console.log("special characters")
    }
    else {
        specials != useSpecials();
    }
}
// function generatePassword(){
//     var generatePassword = userChoice();
// }

    
    function useCharacters(){
        return characterLength;
    }
    
    function useLowercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    
    function useUppercase() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    
    function useNumbers() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    
    function useSpecials() {
        var specials = '~!@#$%^&*()_+-={}[]:;,./<>?'
        return specials [Math.floor(Math.random() * specials.length)];
    }
    var generatePassword = function() {
        userChoice();
    }

// use references to the #generate element
var generateBtn = document.querySelector("#generate");


var password = ""
for (i=0; i<useCharacters; i++){
    var characters = userChoice();
    password = password + characters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

