// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  
  // set of global variables to take user password criterion
  var numberOfCharacters = 0;
  var characterTypeNumeric = "no entry";
  var characterTypeLowerCase = "no entry";
  var characterTypeUpperCase = "no entry";
  var characterTypeSpecial = "no entry";

  // a set of arrays holding all password characters
  var numericValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialValues = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[" ,"\\", "]", "^", "_", "`", "{", "|", "}", "~"];  

  // prompt for passward length and valid entry
  while (numberOfCharacters < 8 || numberOfCharacters > 128) {

    var numOfCharatersLocal = prompt("Enter a number between 8 - 128, for password size.");   
    var numOfCharatersLocalNum = Number(numOfCharatersLocal);
    numberOfCharacters = numOfCharatersLocalNum;

    if (numOfCharatersLocalNum >= 8 && numOfCharatersLocalNum <= 128) {
      alert("Valid Entry!");     
    }
    else{
      alert("Please enter a valid number");
    } 
  }

  // prompt for password to have numeric values and valid entry
  while (characterTypeNumeric !== "Y" && characterTypeNumeric !== "N") {
    
    var charTypeNumericLocal = prompt("Should the password have numeric values? Enter (y or n)");
    var charTypeNumericLocalCap = charTypeNumericLocal.toUpperCase();  
    characterTypeNumeric = charTypeNumericLocalCap;

    if (charTypeNumericLocalCap === "Y" || charTypeNumericLocalCap === "N") {    
      alert("Valid Entry!");
    }
    else {
      alert("Invalid Entry, please enter only: y or n");
    }
  }

  // prompt for password to have lowercase characters and valid entry
  while (characterTypeLowerCase !== "Y" && characterTypeLowerCase !== "N") {
    
    var charTypeLowerCaseLocal = prompt("Should the password have lowercase characters? Enter (y or n)");
    var charTypeLowerCaseLocalCap = charTypeLowerCaseLocal.toUpperCase();  
    characterTypeLowerCase = charTypeLowerCaseLocalCap;

    if (charTypeLowerCaseLocalCap === "Y" || charTypeLowerCaseLocalCap === "N") {    
      alert("Valid Entry!");
    }
    else {
      alert("Invalid Entry, please enter only: y or n");
    }
  }

  // prompt for password to have uppercase characters and valid entry
  while (characterTypeUpperCase !== "Y" && characterTypeUpperCase !== "N") {
    
    var charTypeUpperCaseLocal = prompt("Should the password have uppercase characters? Enter (y or n)");
    var charTypeUpperCaseLocalCap = charTypeUpperCaseLocal.toUpperCase();  
    characterTypeUpperCase = charTypeUpperCaseLocalCap;

    if (charTypeUpperCaseLocalCap === "Y" || charTypeUpperCaseLocalCap === "N") {    
      alert("Valid Entry!");
    }
    else {
      alert("Invalid Entry, please enter only: y or n");
    }
  }

  // prompt for password to have special characters and valid entry
  while (characterTypeSpecial !== "Y" && characterTypeSpecial !== "N") {
    
    var charTypeSpecialLocal = prompt("Should the password have special characters? Enter (y or n)");
    var charTypeSpecialLocalCap = charTypeSpecialLocal.toUpperCase();  
    characterTypeSpecial = charTypeSpecialLocalCap;

    if (charTypeSpecialLocalCap === "Y" || charTypeSpecialLocalCap === "N") {    
      alert("Valid Entry!");
    }
    else {
      alert("Invalid Entry, please enter only: y or n");
    }
  }

  if (characterTypeNumeric === "N" && characterTypeLowerCase === "N" && characterTypeUpperCase === "N" && characterTypeSpecial == "N") {
    var characterTypeNumeric = "no entry";
    var characterTypeLowerCase = "no entry";
    var characterTypeUpperCase = "no entry";
    var characterTypeSpecial = "no entry";
    
    alert("Password must have at least one of the following Numeric, LowerCase, UpperCase, Special. Please start Over.");
  }


  // this function will take a random character from each user selected characterType array (numeric, LC, UC, special), create an array of 1 to 4 random characters, 
  // then it will randomly pick one of them and pass it outside this function. 

  function randomNumberGen() {  

    // a random character array generated based on the global user selection criteria
    var characterTypeRandomLocal = [];
    
    // if user selected a numerica value, then randomly select one to populate the random character array above
    if (characterTypeNumeric === "Y") {
      var numericRandomIndex = Math.floor(Math.random()*numericValues.length); 
    
      characterTypeRandomLocal.push(numericValues[numericRandomIndex]);
    }
    
    // if user selected a lowerCase value, then randomly select one to populate the random character array above
    if (characterTypeLowerCase === "Y") {
      var lowerCaseRandomIndex = Math.floor(Math.random()*lowerCaseValues.length);
    
      characterTypeRandomLocal.push(lowerCaseValues[lowerCaseRandomIndex]);
    }
    
    // if user selected an upperCase value, then randomly select one to populate the random character array above
    if (characterTypeUpperCase === "Y") {
      var upperCaseRandomIndex = Math.floor(Math.random()*upperCaseValues.length);
    
      characterTypeRandomLocal.push(upperCaseValues[upperCaseRandomIndex]);
    }
    
    // if user selected a specialCharacter value, then randomly select one to populate the random character array above
    if (characterTypeSpecial === "Y") {
      var specialRandomIndex = Math.floor(Math.random()*specialValues.length);
    
      characterTypeRandomLocal.push(specialValues[specialRandomIndex]);
    }
    
    // a random value will be picked from the generated array above.
    var generatedRandomValueLocal = "";
    
    // if the random character array has more than 1 element, this will randomly select one to pass forward
    if (characterTypeRandomLocal.length > 1) {
      var characterTypeRandomIndex = Math.floor(Math.random()*characterTypeRandomLocal.length);
      generatedRandomValueLocal = characterTypeRandomLocal[characterTypeRandomIndex];
    }
    // if the random character array has only 1 element, it will pass that single character forward
    else{
      generatedRandomValueLocal = characterTypeRandomLocal[0];
    }
    
    return generatedRandomValueLocal;
  }
   
  // an array of random characters (as per user criterion; length and types), built by the for loop.     
  var passwordArray =[];
    
  for (let index = 0; index < numberOfCharacters; index++) {
      
      var requestedRandomNumber = randomNumberGen();
    
      passwordArray.push(requestedRandomNumber);
      
  }

  // the password array is converted to a single string variable (no-spaces) to be displayed on screen 
  var generatedPasswordGlobal = passwordArray.join('');
  console.log(generatedPasswordGlobal);

  return generatedPasswordGlobal;

}

