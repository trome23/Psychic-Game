

//3. user gets 9 tries to guess computer's randomly generated number
//4. # of tries is tallied up along with successful guesses by user and losses
//5. losses are determined by not guessing computer guess after 9 attempts
//6. The number of guesses so far is displayed

var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 

var directionsText = document.getElementById("directions-text")
var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text")
var guessesLeftText = document.getElementById("guessesLeft-text")
var guessesSoFarText = document.getElementById("guessesSoFar-text")

document.onkeyup = function (event) {
//user chooses any letter on keyboard
    var userGuess = event.key
//computer chooses random letter 
    var computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
    console.log("user guess= " + userGuess)
    console.log("computer guess= " + computerGuess);

    if (userGuess === computerGuess) {
        console.log("User wins!")
        wins++;
    } else  {
        console.log("try again")
        guessesSoFar.push(event.key);
    }

    directionsText.textContent = "Guess what letter I'm thinking of";
    winsText.textContent = "wins: " + wins; 
    lossesText.textContent = "losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " - guessesLeft;
};