const confNumbers = confirm(Would you like numbers in your password?);











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


