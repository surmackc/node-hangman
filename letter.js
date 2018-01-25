module.exports = function Letter () {
        
        this.character = character;
        this.revealed = false
        this.displayLetter = '_';



        this.checkGuess = function(guessedLetter) {
          if (!this.revealed) {
            if (this.character === guessedLetter) {
              this.revealed = true;
              this.displayLetter = this.character;
              return true;
            }
          }
          return false;
      }


      this.getLetter = function(){

            inquirer.prompt([
              {
              type: "input",
              name: "letter",
              message: "Guess a letter!"
              }, 
            ])
          
          .then(function (response) {
          	console.log(response.letter);
            if(this.left > 0 && this.complete != true) {
              if (this.word.indexOf(response.letter) > -1 || this.guessed.indexOf(response.letter) > -1) {
                this.correctGuess(response.letter);
              } else {
                this.wrongGuess(response.letter);
              }
            }
             
          });
      };

}




