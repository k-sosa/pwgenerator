const finalPassword = document.getElementById('password');

const confNumbers = confirm('Would you like numbers in your password?');
const confSymbols = confirm('Would you like symbols in your password?');
const confLowerLetter = confirm('Would you like lower case letters in your password?');
const confUpperLetter = confirm('Would you like upper case letters?');
const pwLength = prompt('How long would you like password to be? Must be between 8 and 128 characters.');



function 






    console.log(confNumbers);











const randomPassword = {
    lower: lowerCaseLetter,
    upper: upperCaseLetter,
    numbers: getNumbers,
    symbols: getSymbols

};

function lowerCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function upperCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



console.log(lowerCaseLetter())


