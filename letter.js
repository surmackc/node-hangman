var inquirer = require('inquirer');
module.exports = function Letter () {
        
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
                this.wrong(response.letter);
              }
            }
             
          });
};


};

