console.log("Sanity test");

// ==== IRON HACK HANGMAN GAME IN JAVASCRIPT! ===//
// =====DATA STRUCTURES ====//

// 1. Words. An array with some words. We will take a random word from this array, and it will be the word that the player will have to figure out.
// 2. Secret word. This will be an string to store the word selected randomly.
// 3. Letters. Another array, in this case just for letters. This one will store all the letters used by the player, to show them all. It will be very helpful for the player, to avoid select the same letter twice.
// 4. Errors left. Number of errors that the user can make until the end of the game.


// consturctor function with all of the arrays needed to funciton the game 

function Hangman () {
    this.words      = ["IRONHACK", "NODEJS", "JAVASCRIPT", "METEOR", "ANGULAR"]; // random words to be picked 
    this.secretWord = ""; // a random word will be pulled from the array of words into this array
    this.letters     = []; // the letters for the player to use
    this.errorsLeft = 10; //number of errors the user can make until the game ends!
    this.secretWord = this._getWord(); // using the getword funcition. we generated a random word and assigned it to the secret word array!
  }
  //===== END OF DATA STRUCTURES ======= //



  // GAME LOGIC METHODS//


//GET RANDOM WORD//
  Hangman.prototype._getWord = function () {
    let random = Math.floor(Math.random() * this.words.length);
    console.log(this.words[random]);
    return this.words[random];
   
  };

//   The user should be able to indicate a letter that he thinks that the word contains. 
//   We have to create a function, that we will call askLetter that will receive as a parameter the user's selection. 
//   Once we receive the letter, we have to add it to the letters array, update the errors left (if the letter is not in the word), 
//   and we have to check out if the letter had been inserted before:
  
Hangman.prototype.askLetter = function (letter) {
letter = letter.toUpperCase(); // translate the user input to a uppercase letter!
if(this.letters.indexOf(letter) > -1) // indexof looks for the letters of the array and if it is found it will return 
{
    return; // returns the value back
    
}
this.letters.push(letter); // The user's letter is push into the letters array!
let correct = this.secretWord.indexOf(letter) > -1; // the user letter is checked to see if it is in the secret word. 

if (!correct) {
    this.errorsLeft -= 1; // if user letter is incorrect, the errors is subtracted.
}
return correct; // the correct letter is returned!


}

//====SHOW THE CURRENT WORD====//

// The following method we need will be used to show the current status of the word.
//  In other words, how many letters have to figure out the player.
//   This method will be called getWordStatus, and it will be as it follows:

// We iterate over all the letters of the secret word.
//  If a letter hasn't been selected by the player, 
//  it will be represented as an underscore. By doing this, we will get a result similiar to: "IRON_ACK".

Hangman.prototype.getWordStatus = function () // anon function 
{
    let that = this;// refering to method
    let wordStatus = []; // empty array to check if user enters a word!
    let splitWord = this.secretWord.split(" "); // split the secret word into a seperate array

  splitWord.forEach(function(letter){
     if (that.letters.indexOf(letter) > -1){
         wordStatus.push(letter);
     } 
     else {
         wordStatus.push("_");
     }
  });
  return wordStatus;
};








// Hangman.prototype.getWordStatus = function () {
//     var that        = this;
//     var wordStatus  = [];
//     var splitedWord = this.secretWord.split("");
  
//     splitedWord.forEach(function (letter) {
//       if (that.letters.indexOf(letter) > -1) {
//         wordStatus.push(letter);
//       } else {
//         wordStatus.push("_");
//       }
//     });
  
//     return wordStatus;
//   };
 

