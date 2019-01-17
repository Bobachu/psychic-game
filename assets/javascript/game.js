var wins = 0;
var loses = 0;
var remainGuess = 10;

var winDisplay = document.getElementById("wins");
var losesDisplay = document.getElementById("loses");
var guessesLeft = document.getElementById("remaining-guesses");
var alreadyGuessed = document.getElementById("guesses");
var compGuessDisp = document.getElementById("computer-guess")

var alphabet = "abcdefghijklmnopqrstuvwxyz"


var alreadyGuessedArr = [];


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    if (
        event.which >= 65
        && event.which <= 90
        && alreadyGuessedArr.indexOf(userGuess) === -1
    ) {
        alreadyGuessedArr.push(userGuess);
        alreadyGuessed.textContent = alreadyGuessedArr.join(",   ");

        if (userGuess === computerGuess && remainGuess > 0) {
            wins++;
            winDisplay.innerHTML = "wins: " + wins;
            alreadyGuessedArr = [];
            remainGuess = 10;
            compGuessDisp.textContent = "Computer guessed: " + computerGuess;
        }

        if (remainGuess > 0 && userGuess !== computerGuess) {
            remainGuess--;
            guessesLeft.innerHTML = "Guess left: " + remainGuess;
            compGuessDisp.textContent = "Computer guessed: " + computerGuess;
        }

        if (remainGuess === 0) {
            alreadyGuessedArr = [];
            remainGuess = 10;
            guessesLeft.innerHTML = "Guess left: " + remainGuess;
            loses++;
            losesDisplay.innerHTML = "Loses: " + loses;
            compGuessDisp.textContent = "Computer guessed: " + computerGuess;
        }
    };


    console.log(computerGuess);

}


