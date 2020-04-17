//arrays with numbers, letters U/L, and characters
var numbers = [];
for (i = 0; i <= 9; i++) {
    numbers.push(i);
}
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharactrs = ["!", "#", "$", "%", "&", "*", "@", ".", "/", "?", "-"];


var passwordArray = [];




//for prompt for number of characters
//needs to set limit from 8-128 characters
//function passwordLength() {
// var totalCharacters = prompt("How many characters would you like your password to be?");
//  if (totalCharacters >= 8 && totalCharacters <= 128) {
//      generatePassword();
//  } else {
//      alert("please choose a number between 8 and 128")
//      passwordLength();
//  }
//};

//function to establish parameters for password generator
function passwordVariables() {
    function passwordLength() {
        var totalCharacters = prompt("How many characters would you like your password to be?");
        if (totalCharacters >= 8 && totalCharacters <= 128) {
            generatePassword();
        } else {
            alert("please choose a number between 8 and 128")
            passwordLength();
        }
    };
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
    };
    var wantNumbers = confirm("Do you want to include numbers?");
    console.log(wantNumbers);


    var wantUpperCase = confirm("Do you want to include upper case characters?");
    console.log(wantUpperCase);

    var wantLowerCase = confirm("Do you want to include lower case characters?");
    console.log(wantLowerCase);

    var wantSpecialCharacters = confirm("Do you want special characters?");
    console.log(wantSpecialCharacters);
    if (wantNumbers === false && wantUpperCase === false && wantLowerCase === false && wantSpecialCharacters === false) {
        alert("Please select at least one option");
        passwordVariables();
    } else {
        passwordLength();
    }

}
//function to assemble parameters and create password
//result needs to be added to wordblock on html page
//function generatePassword() {
//   if (wantNumbers === true) {
//      console.log(passwordArray);
//  }
//};
//functionality for button
//when pressed, button needs to launch alerts and prompts to set 
//password parameters
//
var myButton = document.querySelector('button');
myButton.onclick = function () {
    passwordVariables();
}
//function generatePassword(){
//1. initialize pw var
//2. filter out unselected types
//3. loop over length
//4. call a generator function for each type
//5. add final pw to the text box and return it
// let generatedPassword = "";

//const typesCount = lower + upper + numbers + symbols

//create an array of type value
//{} + .filter function will filter out special values
// var typesArray = [{wantNumbers}, {wantUpper}, {wantLower}, {wantSpecialCharacters}].filter(
// item=>Object.values(item[0]
//  ));

//if nothing selected
// if(typesCount === 0){}

//for(i=0; i<length; i+=typesCount){
// typesArr.forEach(type=>{
// var funcName = Object.keys(type)[0]
//   })
//}

//};








