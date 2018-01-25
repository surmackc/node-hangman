var inquirer = require('inquirer');
const Word = require('./word.js');
const Letter = require('./letter.js')

let currentWord;
var guessedLetters;
var guesses;



function startGame() {
	guesses = 10;
	currentWord = new Word();
	console.log(console.log(('_').repeat(currentWord.word.length)));
	takeInput();
	
}



function takeInput() {

            inquirer.prompt([
              {
              type: "input",
              name: "letter",
              message: "Guess a letter!"
              }, 
            ])
          
          .then(function (response) {
          let guess = response.letter.trim();

          if (!currentWord.checkGuess(guess)) {
          		guesses--;
          		console.log("Wrong!  You have " + guesses + " left.")
          }

          if (currentWord.complete || guesses <= 0) {
          		currentWord.showWord();
          } else if (currentWord.complete && guesses >0){
          	console.log("You win!");
          } else {
          	takeInput();
          }

		});
};

startGame();







  