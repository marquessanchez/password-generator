// Assignment code
var generateBtn = document.querySelector("#generate");

var


    // Loop for random selection
    for (var i = 0; i < passLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        passBlank.push(allChoices);
        console.log(allChoices);
    }

    // Join and return the password
    var password = passBlank.join ("");
    console.log(" Your Password is: " + password);
    return password;

// // criteria var
// var passLength;
// var confrimUppercase;
// var confirmLowercase;
// var confirmSymbols;
// var confirmNumbers;
// var userChoices;

// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var symbols= ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/", "?", ";", ":", "[", "]", "{", "}", "~", "`"];
// var numbers= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// // Write passwood to the #password input
// function writePassword() {
//     var password = generatePass();
//     var passwordText = document.querySelector("#password");
  
//     passwordText.value = password;
  
// }

// // Add event listerner to generate buttton
// generateBtn.addEventListener("click", writePassword); 

// // Function Starts
// function generatePass(){
//     // user choices
//     passLength= prompt("Amount of Characters desired? Min: 8, Max: 128");
//     console.log("Password Length" + passLength);

//     if(!passLength) {
//         alert("Requried value");

//     } else if (passLength < 8 || passLength > 128) {
//         passLength= prompt("Invaild Password length input. Choose between 8 and 128");
//         console.log("Password length" + passLength);

//     } else {
//         confrimUppercase= confirm(" Include Uppercase Letters?");
//         console.log("Upper case" + confrimUppercase);
//         confirmLowercase= confirm("Include Lowercase Letters?");
//         console.log("Lower case" + confirmLowercase);
//         confirmSymbols= confirm(" Include Special Charcters?");
//         console.log("Symbols" + confirmSymbols);
//         confirmNumbers= confirm(" Include Numbers?");
//         console.log("Numbers" + confirmNumbers);

//     };

//     // no criteria selected
//     if(!confrimUppercase && !confirmLowercase && !confirmSymbols && !confirmNumbers) {
//         userChoices= alert("You must choose a criteria.");
//     // all selected    
//     } else if (confrimUppercase && confirmLowercase && confirmSymbols && confirmNumbers) {
//         userChoices= upper.concat(lower, numbers, symbols);
//         console.log(userChoices);
//     }
//     // 3 selected
//     else if ( confrimUppercase && confirmLowercase && confirmSymbols) {
//         userChoices= upper.concat(lower, symbols);
//         console.log(userChoices);
//     }
//     else if( confrimUppercase && confirmLowercase && confirmNumbers) {
//         userChoices= upper.concat(lower, symbols);
//         console.log(userChoices);
//     }
//     else if (confrimUppercase && confirmNumbers && confirmSymbols) {
//         userChoices= upper.concat(symbols, numbers);
//         console.log(userChoices);
//     }
//     else if (confirmLowercase && confirmNumbers && confirmSymbols) {
//         userChoices= lower.concat(symbols, numbers);
//         console.log(userChoices);
//     }
//     // 2 selected
//     else if (confrimUppercase && confirmLowercase) {
//         userChoices= upper.concat(lower);
//         console.log(userChoices);
//     }
//     else if (confrimUppercase && confirmNumbers) {
//         userChoices= upper.concat(numbers);
//         console.log(userChoices);
//     }
//     else if (confrimUppercase && confirmSymbols) {
//         userChoices= upper.concat(symbols);
//         console.log(userChoices);
//     }
//     else if (confirmLowercase && confirmNumbers) {
//     userChoices= lower.concat(numbers);
//     console.log(userChoices);
//     }
//     else if (confirmLowercase && confirmSymbols) {
//         userChoices= lower.concat(symbols);
//         console.log(userChoices);
//     }
//     else if (confirmNumbers && confirmSymbols){
//         userChoices= numbers.concat(symbols);
//         console.log(userChoices);
//     }
//     // 1 selected
//     else if (confrimUppercase){
//         userChoices= upper;
//         console.log(userChoices);
//     } 
//     else if (confirmLowercase) {
//         userChoices= lower;
//         console.log(userChoices);
//     } 
//     else if (confirmNumbers) {
//         userChoices = numbers;
//         console.log(userChoices);
//     }  
//     else if (confirmSymbols) {
//         userChoices = symbols;
//         console.log(userChoices);
//     };
//     // Empty variable for the password length
//     var passBlank = [];
// }


  
