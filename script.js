// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const num = '1234567890';
const special = `~!@#$%^&*()_+-=[]{};':",./<>?\|`;

// Help Function

function characterAmount() {
  result = parseInt(window.prompt('Enter a character amount'));

  if (!Number.isInteger(result) || result <= 7 || result >= 129) {
    window.alert('Enter a number between 8 and 128');
    return characterAmount();
  } else {
    return result;
  }
}
function promptConfirm(passwordText) {
  if (window.confirm(passwordText)) {
    return true;
  }
}

// Generate Password

function generatePassword() {
  let finalPassword = '';
  var passwordParams = {
    charAmount: characterAmount(),
    specialChar: promptConfirm('Do you want to include special characters?'),
    upperChar: promptConfirm('Do you want to include uppercase?'),
    lowerChar: promptConfirm('Do you want to include lowercase?'),
    numChar: promptConfirm('Do you want to include numbers?'),
  };

// Destructuring Assignment
var { specialChar, charAmount, upperChar, lowerChar, numChar } =
passwordParams;

if ((specialChar, upperChar, lowerChar, numChar === false)) {
  window.prompt('You must choose something.');
  generatePassword();
}

// Place parameters in an array
let passArray = [];

if (specialChar) {
  passArray.push(special);
}
if (upperChar) {
  passArray.push(upper);
}
if (lowerChar) {
  passArray.push(lower);
}
if (numChar) {
  passArray.push(num);
}

// Confirm we have one of each character from the array

for (let i = 0; i < passArray.length; i++)
finalPassword += passArray[i].charAt(
  Math.floor(Math.random() * passArray[i].length)
);

// Confirm we have random characters

for (let i = passArray.length; i < charAmount; i++) {
  var selection =
    passArray[Math.floor(Math.random() * passArray.length)];
  finalPassword += selection.charAt(
    Math.floor(Math.random() * selection.length)
  );
}

// Write password to the #password input

return finalPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

