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

// LIST OF POSSIBLE WORDS
var words = ["BLOFELD", "ODDJOB", "SPECTRE", "DALTON", "LICENSE", "VESPER", "SKYFALL", "GOLDFINGER", "MONEYPENNY"];

function resetGame() {
    guessesLeft = 12;
    guesses = [];
    hyphenatedArray = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordArray = randomWord.split('')
    hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, '_');
    hyphenatedArray = hyphenatedWord.split('');
    tempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");
    guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;
    guessesDiv.textContent = "Your Guesses so far: ";
}

// APP RANDOMLY PICKS A WORD
// var randomWord = words[Math.floor(Math.random() * words.length)];

// wordArray = randomWord.split('')

// var hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, '_');


// hyphenatedArray = hyphenatedWord.split('');

//DISPLAY HYPHENATED WORD
// var tempHyphenatedWordDiv = document.getElementById("currentWord-div");
// tempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");

// DISPLAY THE WINS COUNTER
// var winsDiv = document.getElementById("wins-div");
winsDiv.textContent = "Wins: " + wins;

// DISPLAY THE GUESSES LEFT COUNTER
// var guessesLeftDiv = document.getElementById("guessesLeft-div");
// guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

// DISPLAY THE CURRENT GUESSES
// var guessesDiv = document.getElementById("guesses-div");
// guessesDiv.textContent = "Your Guesses so far: ";

resetGame();

// USER GUESSES LETTERS IN THE RANDOM WORD

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {
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
                    var newtempHyphenatedWordDiv = document.getElementById("currentWord-div");
                    newtempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");

                    // IF HYPHENATED ARRAY RUNS OUT OF HYPHENS
                    var hyphenCheck = hyphenatedArray.includes("_");
                    if (hyphenCheck === false) {
                        wins++;
                        winsDiv.textContent = "Wins: " + wins;

                        // document.getElementById('audiotag1').play();


                        var audio = new Audio('assets/007.mp3');
                        audio.play();


                        // START NEW GAME
                        resetGame();
                    }
  
                } else {

                    // IF GUESSES LEFT = 0
                    if (guessesLeft === 0 ) {
                        resetGame();
                    }
                }
            }
        }
        }
    // }