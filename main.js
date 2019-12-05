const finalPassword = document.getElementById('password');

function lowerCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);//lower case letters are from 97 -122
}

function upperCaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);//upper case letters are from 65-90
}

function getNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48); //numbers are from 48-57
}

function getSymbols() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);  //special characters are from 32-47

}


function userSelections(pwLength, confSymbols, confUpperLetter, confLowerLetter, confNumbers) {

    console.log(pwLength, confSymbols, confUpperLetter, confLowerLetter, confNumbers)
    // console.log(randomPassword)

    var generatePassword = ""

    for (var i = 0; i < pwLength; i++) {




        if (confSymbols) {
            generatePassword = generatePassword + getSymbols()
            confSymbols = false
        }
        else if (confLowerLetter) {
            generatePassword = generatePassword + lowerCaseLetter()
            confLowerLetter = false
            confUpperLetter = true

        }
        else if (confNumbers) {
            generatePassword = generatePassword + getNumbers()
            confNumbers = false
        }
        else if (confUpperLetter) {
            generatePassword = generatePassword + upperCaseLetter()
            confUpperLetter = false
            confLowerLetter = true
        }

    }
    console.log(generatePassword)
    finalPassword.textContent = generatePassword
}

const startPromtsBtn = document.querySelector('#generate');
startPromtsBtn.addEventListener('click', function () {



    const pwLength = prompt('How long would you like the password to be? Must be between 8 and 128 characters.');
    if (pwLength > 128 || pwLength < 8) {
        alert('Password must contain between 8 and 128 characters. Please start again.');
    }
    else {
        const confNumbers = confirm('Would you like numbers in your password?');
        const confSymbols = confirm('Would you like symbols in your password?');
        const confLowerLetter = confirm('Would you like lower case letters in your password?');
        const confUpperLetter = confirm('Would you like upper case letters?');
        userSelections(pwLength, confSymbols, confUpperLetter, confLowerLetter, confNumbers)
    }

})


function myFunction() {
    /* Get the text field */
    let copyText = document.getElementById("password");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}



