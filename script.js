// Assignment code here
// var useCharacters;
// var useLowercase;
// var useUppercase;
// var useNumbers;
// var specialCharacters = '!@#$%^&*()={}[]/?.,'
// var useChoices;
// var userChoice;


// Ask for password choices
    // var useCharacters= window.prompt("Enter a number from 8-126")
    // if (userChoice <= 7) {
    //     window.prompt("Enter a number from 8-126");
    // } else if 
    // (userChoice >= 125) {
    //     window.prompt("Enter a number from 8-126");
    // } else {
    //     userChoice = useCharacters;
    // }

    var lowercase = window.prompt("Would you like to use lowercase letters? Enter Y for YES")
    if (userChoice = "Y") {
        userChoice = useLowercase();
        console.log("lowercase")
    }
    else {
        userChoice != useLowercase;
    }
    
    var uppercase = window.prompt("Would you like to use uppercase letters? Enter Y for YES")
    if (userChoice = "Y") {
        userChoice = useUppercase();
        console.log("uppercase")
    }
    else {
        userChoice != useUppercase();
    };

    var numbers= window.prompt("Would you like to use numbers? Enter Y for YES")
    if (userChoice = "Y") {
        userChoice = useNumbers();
        console.log("numbers")
    }
    else {
        userChoice != useNumbers();;
    }

    var specials= window.prompt("Would you like to use special characters? Enter Y for YES")
    if (userChoice = "Y") {
        userChoice = useSpecials();
        console.log("special characters")
    }
    else {
        userChoice != useSpecials();
    }



// }

// for (i = 0; i < 7; i++);

function useCharacters(){
    return useCharacters.length;
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

// var usePasswordLength = function(){
//     passwordLength = "";

// }

// use references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log('clicked');

function generatePassword() {
    userChoice = password;
    if (password.lenth === length) {
        return password;
    }
    // console.log("Here's your password");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log ("i am being clicked");

