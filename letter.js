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
}




