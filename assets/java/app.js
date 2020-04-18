//arrays with numbers, letters U/L, and characters
var numbers = [];
for (i = 0; i <= 9; i++) {
    numbers.push(i);
}
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactrs = ["!", "#", "$", "%", "&", "*", "@", ".", "/", "?", "-"];

var passwordSubmit = document.querySelector(".passwordDisplay");
function clearResponse() {
    finalPassword = [];
    console.log(passwordSubmit);
}
//location for final password array
var passwordArray = [];
var passwordLetter = [];
var finalPassword = [];




//function to establish parameters for password generator
function passwordVariables() {
    clearResponse();
    function passwordLength() {
        var totalCharacters = prompt("How many characters would you like your password to be?");
        if (totalCharacters >= 8 && totalCharacters <= 128) {
            generatePassword();
        } else {
            alert("please choose a number between 8 and 128")
            passwordLength();
        }


        function randomArray() {
            for (x = 0; x < totalCharacters; x++) {
                var y = passwordArray.length - 1;
                passwordLetter = Math.floor((Math.random() * y) + 1);
                var z = passwordArray[passwordLetter];
                //need to
                finalPassword.push(z);

            }
            console.log(finalPassword);
            var finalFinalPassword = finalPassword.join("");
            console.log(finalFinalPassword)
            passwordSubmit.textContent = "";
            passwordSubmit.textContent = finalFinalPassword;


        };

        //concats variables into final password array
        //random password generator will select characters from this array
        function generatePassword() {
            if (wantNumbers === true) {
                var addNumbbers = passwordArray.concat(numbers);
                console.log(addNumbbers);
                passwordArray = addNumbbers;
            }
            if (wantUpperCase === true) {
                addUpperCase = passwordArray.concat(uppercaseLetters);
                console.log(addUpperCase);
                passwordArray = addUpperCase;
            }
            if (wantLowerCase === true) {
                var addLowerCase = passwordArray.concat(lowercaseLetters);
                console.log(addLowerCase);
                passwordArray = addLowerCase;
            }
            if (wantSpecialCharacters === true) {
                var addSpecialCharacters = passwordArray.concat(specialCharactrs);
                console.log(addSpecialCharacters);
                passwordArray = addSpecialCharacters;
            }
            console.log(passwordArray);
            randomArray();
        };
    };
    //confirms to set variables to include in password
    var wantNumbers = confirm("Do you want to include numbers?");
    console.log(wantNumbers);

    var wantUpperCase = confirm("Do you want to include upper case characters?");
    console.log(wantUpperCase);

    var wantLowerCase = confirm("Do you want to include lower case characters?");
    console.log(wantLowerCase);

    var wantSpecialCharacters = confirm("Do you want special characters?");
    console.log(wantSpecialCharacters);

    //user must select at least one option
    if (wantNumbers === false && wantUpperCase === false && wantLowerCase === false && wantSpecialCharacters === false) {
        alert("Please select at least one option");
        passwordVariables();
    } else {
        passwordLength();
    }

}

var myButton = document.querySelector('button');
myButton.onclick = function () {
    passwordVariables();
};
