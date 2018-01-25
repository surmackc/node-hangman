var prompt = require('prompt');
var inquirer = require('inquirer');
let Word = require('./word.js');
let Letter = require('./letter.js')


var game = {
  guessed: [],
  left: 10,
  
}



  

var newWord = new Word();
var newLetter = new Letter();

console.log(newWord.word);
newWord.logWord();
newLetter.getLetter();

  	
// function newLetter(){
//   var newLetter = String.fromCharCode(event.keyCode).toLowerCase();
//   console.log(newLetter);
// };

// newLetter();

// guess




  