//arrays with numbers, letters U/L, and characters
var numbers = [];
for (i = 0; i <= 9; i++) {
    numbers.push(i);
}
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactrs = ["!", "#", "$", "%", "&", "*", "@", ".", "/", "?", "-"];

var compiledCharactersArray = [];
var passwordLetter = [];
var finalPasswordArray = [];

var passwordSubmit = document.querySelector(".passwordDisplay");







//This function will clear any provided passwords and parameters
//and then run through all functions to establish password parameters
//and then submit a final password string that meets all established password parameters
function generatePassword() {

    //this function clears all arrays
    //used w/ eventListener on button
    function clearResponse() {
        finalPasswordArray = [];
        finalPasswordString = "";
        compiledCharactersArray = [];
        wantNumbers = "";
        wantUpperCase = "";
        wantLowerCase = "";
        wantSpecialCharacters = "";
    }
    clearResponse();

    //confirms variables to include in password
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
        generatePassword();
    } else {
        passwordLength();
    }

    //This function establishes password length via a prompt
    //it assigns the value of totalCharacters to the answer provided
    //answer must be between 8 and 128 as established in HW guidlenes
    function passwordLength() {
        var totalCharacters = prompt("How many characters would you like your password to be?");
        if (totalCharacters >= 8 && totalCharacters <= 128) {
            generatePasswordVariables();
        } else {
            alert("please choose a number between 8 and 128")
            passwordLength();
        }

        //concats variables into final password array
        //random password generator will select characters from this array
        function generatePasswordVariables() {
            if (wantNumbers === true) {
                var addNumbbers = compiledCharactersArray.concat(numbers);
                console.log(addNumbbers);
                compiledCharactersArray = addNumbbers;
            }
            if (wantUpperCase === true) {
                var addUpperCase = compiledCharactersArray.concat(uppercaseLetters);
                console.log(addUpperCase);
                compiledCharactersArray = addUpperCase;
            }
            if (wantLowerCase === true) {
                var addLowerCase = compiledCharactersArray.concat(lowercaseLetters);
                console.log(addLowerCase);
                compiledCharactersArray = addLowerCase;
            }
            if (wantSpecialCharacters === true) {
                var addSpecialCharacters = compiledCharactersArray.concat(specialCharactrs);
                console.log(addSpecialCharacters);
                compiledCharactersArray = addSpecialCharacters;
            }
            console.log(compiledCharactersArray);
            generatePasswordString();
        };

        //This creates the final password string
        //it converts the final answer array into a string so that it 
        //can display on the page with no commas
        //It is nested under password length so it can use the totalCharacters variable
        function generatePasswordString() {
            for (x = 0; x < totalCharacters; x++) {
                var y = compiledCharactersArray.length - 1;
                passwordLetter = Math.floor((Math.random() * y) + 1);
                var z = compiledCharactersArray[passwordLetter];
                //need to
                finalPasswordArray.push(z);

            }
            console.log(finalPasswordArray);
            var finalPasswordString = finalPasswordArray.join("");
            console.log(finalPasswordString)
            passwordSubmit.textContent = finalPasswordString;


        };
    };
}

//button listener
//initiates entire process when button is clicked
var myButton = document.querySelector('button');
myButton.onclick = function () {
    generatePassword();
};
