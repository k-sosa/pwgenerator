
var InputLength = prompt("How long Would you like the password to be?")
var passwordString = "abcdefghijklmnopqrstuvwxyxABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
console.log(passwordString.length)

var generatePassword = ""
// Loop 10 times
for (var i = 0; i < InputLength; i++) {
    // Generate a random decimal number between 0 and 1
    var RandomIndexpasswordStringArray = Math.floor(Math.random() * passwordString.length);

    // Display in console
    console.log(passwordString[RandomIndexpasswordStringArray]);
    //string concatenation, InputLength is 6
    //generatePassword="" + k   is at i= 0
    //generatePassword="k" + T   is at i= 1
    //generatePassword="kT" + &   is at i= 2
    //generatePassword="kt&" + 1   is at i= 3
    //generatePassword="kt&1" + b   is at i= 4
    //generatePassword="kt&1b" + 0   is at i= 4
    generatePassword = generatePassword + passwordString[RandomIndexpasswordStringArray]
}
//generatePassword="kt&1b0" 
console.log(generatePassword)