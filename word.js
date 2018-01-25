
const Letter = require('./letter.js');
module.exports = function Word () {
		
		this.complete = false;

		this.wordArray = [];
		
		this.words = ['Hemingway', 'Fitzgerald', 'Steinbeck', 'Kerouac'];
		
		this.word = this.words[Math.floor(Math.random() * this.words.length)];
		
		for (let i = 0; i < word.length; i++){
			this.wordArray.push(new Letter(word[i]));
		}
			this.logWord();

		this.logWord = function (){
		 console.log(('_').repeat(this.word.length));
		};

		this.check = function (guessedLetter) {

			var correctGuesses = 0;
			var lettersRemaining = this.wordArray.length;	

			this.wordArray.forEach(function (letter) {
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

		this.showWord = function {
			let log = '',
			this.wordArray.forEach(function (letter) {
				log += letter.character;
			});
			console.log(`The word was ${log}.`);
		}

};



