
module.exports = function Word (complete, words, word) {
		
		this.complete = false;
		
		this.words = ['Hemingway', 'Fitzgerald', 'Steinbeck', 'Kerouac'];
		
		this.word = this.words[Math.floor(Math.random() * this.words.length)];
		
		this.logWord = function (){
		 console.log(('_').repeat(this.word.length));
		};

		this.correctGuess = function (letter) {
			for (var i = 0; i < this.word.length; i++) {
				if (this.word[i] == letter) {
					var word = this.word.split('');
					word[i] = letter;
					console.log(this.word.join(''));
			// fill the empty spaces with the correct letter/s
				}
			}

			if (this.word.indexOf('_') < 0 ) {
				this.complete = true;
				console.log('You win!');
			}

		};

	

	};



