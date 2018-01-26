var inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js')

var currentWord;
var guessedLetters;
var guesses;


// start game function called at the bottom, sets our guesses, pulls a word, logs it, then calls the inquirer prompt
function startGame() {
	guesses = 10;
	currentWord = new Word();
	currentWord.logWord();
  takeInput();
}



function takeInput() {
          // gets user input
            inquirer.prompt([
              {
              type: "input",
              name: "letter",
              message: "Guess a letter!"
              }, 
            ])
          
          .then(function (response) {
            // runs checkGuess on our entered response
            // if the letter is not in currentWord display the letter and that they were wrong
          if (!currentWord.checkGuess(response.letter)) {
            console.log(response.letter);
          		guesses--;
          		console.log("Wrong!  You have " + guesses + " guesses left.")
          } else {
              console.log('Correct!');
          } 

          // logic to determine if game is over, if not we recursively call takeInput to prompt the user again
          if (guesses === 0) {
          		currentWord.showWord();
          } else if (currentWord.complete && guesses > 0){
          	console.log("You win!");
          } else {
          	takeInput();
          }

		});
};
// calls the function to run the game
startGame();







  