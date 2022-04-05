// with tutor Geronimo Perez
var temp = "";
var password = "";
var len;

function passwordLength() {
  len = prompt("How many characters will you like to use");
  if (isNaN(len) || len < 8 || len > 128) {
    alert("Please enter a number from 8-128");
    return passwordLength();
  }
}

var useLowercase = function () {
  let isLowercase = confirm('Will you like to use lowercase letters? Select "OK" for YES')
  if (isLowercase) {
    temp += "abcdefghijklmnopqrstuvwxyz"
  }
}

var useUppercase = function () {
  let isUppercase = confirm('Will you like to use uppercase letters? Select "OK" for YES')
  if (isUppercase) {
    temp += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
}

var useNumbers = function () {
  let isNumbers = confirm('Will you like to use numbers ? Select "OK" for YES')
  if (isNumbers) {
    temp += "1234567890"
  }
}

var useSpecials = function () {
  let isSpecials = confirm('Will you like to use special characters? Select "OK" for YES')
  if (isSpecials) {
    temp += "!@#$%^&*()"
  }
}
  function generatePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordLength()
  useLowercase()
  useUppercase()
  useNumbers()
  useSpecials()

  for (var i = 0; i < len; i++) {
    password += temp[Math.floor(Math.random() * temp.length)]
  }

  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);