
const Letter = require('./letter.js');
module.exports = function Word () {

		this.complete = false;
		
		this.words = ['Hemingway', 'Fitzgerald', 'Steinbeck', 'Kerouac'];
		
		this.word = this.words[Math.floor(Math.random() * this.words.length)];
			

		this.logWord = function (word){
		 console.log(('_').repeat(this.word.length));
		};

		this.checkGuess = function (guessedLetter) {

			var correctGuesses = 0;
			var lettersRemaining = this.word.length;	

			this.word.forEach(function (letter) {
				correctGuesses += letter.check(guessedLetter);
				lettersRemaining -= letter.revealed;
			});

			this.logWord();

			if (lettersRemaining <= 0) {
				this.complete = true;
			}

			if (correctGuesses > 0) {
				return true
			}

				return false;

		}

		this.showWord = function() {
			let log = '';
			
			this.word.forEach(function (letter) {
				log += letter.character;
			});
			console.log(`The word was ${log}.`);
		}



};



