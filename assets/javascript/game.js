guessesLeft = 12;
guesses = [];
wins = 0;

function resetGame() {
    guessesLeft = 12;
    guesses = [];
    randomWord = words[Math.floor(Math.random() * words.length)];
    wordArray = randomWord.split('')
    hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, '-');
    tempHyphenatedWordDiv.textContent = hyphenatedWord;
    hyphenatedArray = hyphenatedWord.split('');
    guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;
    guessesDiv.textContent = "Your Guesses so far: ";
    console.log(randomWord);
    
}


// LIST OF POSSIBLE WORDS
var words = ["BLOFELD", "ODDJOB", "SPECTRE", "DALTON", "LICENSE", "VESPER", "SKYFALL", "GOLDFINGER", "MONEYPENNY"];

// APP RANDOMLY PICKS A WORD
var randomWord = words[Math.floor(Math.random() * words.length)];

wordArray = randomWord.split('')

var hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, '-');

//DISPLAY HYPHENATED WORD
var tempHyphenatedWordDiv = document.getElementById("currentWord-div");
tempHyphenatedWordDiv.textContent = hyphenatedWord;

hyphenatedArray = hyphenatedWord.split('');

// DISPLAY THE WINS COUNTER
var winsDiv = document.getElementById("wins-div");
winsDiv.textContent = "Wins: " + wins;

// DISPLAY THE GUESSES LEFT COUNTER
var guessesLeftDiv = document.getElementById("guessesLeft-div");
guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

// DISPLAY THE CURRENT GUESSES
var guessesDiv = document.getElementById("guesses-div");
guessesDiv.textContent = "Your Guesses so far: ";

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
            guessesDiv.textContent = "Your Guesses so far: " + guesses;
            
            // CHECK THE RANDOM WORD FOR A CHARACTER MATCH
            for (let i = 0; i < wordArray.length; i++) {
                if (upUserGuess === wordArray[i]) {
                    
                    hyphenatedArray[i] = randomWord[i];
                    
                    // DISPLAY REVEALED LETTERS
                    var newtempHyphenatedWordDiv = document.getElementById("currentWord-div");
                    newtempHyphenatedWordDiv.textContent = hyphenatedArray.join(" ");

                    // IF HYPHENATED ARRAY RUNS OUT OF HYPHENS
                    var hyphenCheck = hyphenatedArray.includes("-");
                    if (hyphenCheck === false) {
                        wins++;
                        winsDiv.textContent = "Wins: " + wins;

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