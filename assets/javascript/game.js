//Array of computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables for wins, loss, guesses left, guesses so far and computer guess
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var playerGuess = [];


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//player input key
document.onkeyup = function (event) {

    var playerGuess = event.key;

    guessesSoFar.push(playerGuess);
};

//If playerGuess matches computerGuess, adds a win and restarts, if not adds loss and restarts
if (playerGuess === computerGuess){
    wins++;
    restart();
}
else if (guessesLeft === 0) {
    losses++;
    restart();
};

//grabbing the specfic elemets of wins, losses, guessesLeft and guessesSoFar in the html
document.getElementById("wins");
document.getElementById("losses");
document.getElementById("guessesLeft");
document.getElementById("guessesSoFar");

