var guessesLeft;
guesses = [];
wins = 0;
var randomWord;
wordArray = [];
var hyphenatedWord;
hyphenatedArray = [];
var tempHyphenatedWordDiv = document.getElementById("currentWord-div");
var winsDiv = document.getElementById("wins-div");
var guessesLeftDiv = document.getElementById("guessesLeft-div");
var guessesDiv = document.getElementById("guesses-div");

let Game = {
  words: [
    "BLOFELD",
    "ODDJOB",
    "SPECTRE",
    "DALTON",
    "LICENSE",
    "VESPER",
    "SKYFALL",
    "GOLDFINGER",
    "MONEYPENNY"
  ],
  resetGame: function() {
    guessesLeft = 12;
    guesses = [];
    hyphenatedArray = [];
    randomWord = Game.words[Math.floor(Math.random() * Game.words.length)];
    wordArray = randomWord.split("");
    hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, "_");
    hyphenatedArray = hyphenatedWord.split("");
    tempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");
    guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;
    guessesDiv.textContent = "Your Guesses so far: ";
    winsDiv.textContent = "Wins: " + wins;
  },
  afterInput: function(event) {
    var userGuess = event.key;
    var upUserGuess = userGuess.toUpperCase();

    // CONFIRM LETTER HAS NOT BEEN GUESSED
    var newGuess = guesses.includes(upUserGuess);
    if (newGuess === false) {
      // ADD TO GUESSES ARRAY
      guesses.push(upUserGuess);

      // DECREASE GUESSLEFT COUNTER
      guessesLeft--;
      guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

      //  DISPLAY ENTERED GUESSES
      guessesDiv.textContent = "Your Guesses so far: " + guesses.join(" ");

      // CHECK THE RANDOM WORD FOR A CHARACTER MATCH
      for (let i = 0; i < wordArray.length; i++) {
        if (upUserGuess === wordArray[i]) {
          hyphenatedArray[i] = randomWord[i];

          // DISPLAY REVEALED LETTERS
          var newtempHyphenatedWordDiv = document.getElementById(
            "currentWord-div"
          );
          newtempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");

          // IF HYPHENATED ARRAY RUNS OUT OF HYPHENS
          var hyphenCheck = hyphenatedArray.includes("_");
          if (hyphenCheck === false) {
            wins++;
            winsDiv.textContent = "Wins: " + wins;

            // document.getElementById('audiotag1').play();

            var audio = new Audio("assets/007.mp3");
            audio.play();

            // START NEW GAME
            Game.resetGame();
          }
        } else {
          // IF GUESSES LEFT = 0
          if (guessesLeft === 0) {
            Game.resetGame();
          }
        }
      }
    }
  }
};

// DISPLAY THE WINS COUNTER
// var winsDiv = document.getElementById("wins-div");
// winsDiv.textContent = "Wins: " + wins;

Game.resetGame();

// USER GUESSES LETTERS IN THE RANDOM WORD

// This function runs whenever the user presses a key.
document.onkeyup = function(event) {
    Game.afterInput(event)
}