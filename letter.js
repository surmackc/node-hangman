module.exports = function Letter (character) {
        
        this.character = character;
        this.revealed = false
        this.displayLetter = '_';


        // function which checks if the guessed letter is contained in our word
        this.checkLetter = (guessedLetter) => {
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




