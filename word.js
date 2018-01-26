
const Letter = require('./letter.js');
module.exports = function Word () {

		this.complete = false;
		
		this.words = ['hemingway', 'fitzgerald', 'steinbeck', 'kerouac'];
		
		this.word = this.words[Math.floor(Math.random() * this.words.length)];

		this.wordArray = [];
		// looping through our chosen word and pushing each letter into our wordArray
		// so we can check each letter individually
		for (var i = 0; i < this.word.length; i++) {
					this.wordArray.push( new Letter(this.word[i]));

				}

		// displays our wordArray, displayLetter makes it an underscore
		this.logWord = function(){
			let log = '';
			this.wordArray.forEach( (letter) => {
				log += letter.displayLetter + ' ';
			});

			console.log(log);
		};

		// called in our inquirer promise, passes the letter we receive from the user
		// takes the letter and passes it through our checkLetter function
		// also determines if the word has been completely guessed or not
		this.checkGuess = (guessedLetter) => {

			var correctGuesses = 0;
			var lettersRemaining = this.word.length;

			

			this.wordArray.forEach((letter) => {
				correctGuesses += letter.checkLetter(guessedLetter);
				lettersRemaining -= letter.revealed;
			});

			// logs the word as letters are populated
			this.logWord();

			

			if (lettersRemaining <= 0) {
				this.complete = true;
			}

			if (correctGuesses > 0) {
				return true
			}

				return false;

		}

		// displays the full word by combining letters in wordArray
		this.showWord = function() {
			let log = '';
			
			this.wordArray.forEach((letter) => {
				log += letter.character;
			});
			console.log(`The word was ${log}.`);
		}

};





