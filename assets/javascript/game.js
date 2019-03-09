guessesLeft = 12;
guesses = [];


// LIST OF POSSIBLE WORDS
var words = ["BLOFELD", "ODDJOB", "SPECTRE", "DALTON", "LICENSE", "VESPER", "SKYFALL", "GOLDFINGER", "MONEYPENNY"];

// APP RANDOMLY PICKS A WORD
var randomWord = words[Math.floor(Math.random() * words.length)];
// console.log(randomWord);

wordArray = randomWord.split('')
console.log(wordArray);

var hyphenatedWord = randomWord.replace(/[a-zA-Z]/g, '-');

//DISPLAY HYPHENATED WORD
var tempHyphenatedWordDiv = document.getElementById("currentWord-div");
tempHyphenatedWordDiv.textContent = hyphenatedWord;

hyphenatedArray = hyphenatedWord.split('');
console.log(hyphenatedArray);

// DISPLAY THE GUESSES LEFT COUNTER
var guessesLeftDiv = document.getElementById("guessesLeft-div");
guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

// DISPLAY THE CURRENT GUESSES
var guessesDiv = document.getElementById("guesses-div");
guessesDiv.textContent = "Letters Already Guessed: ";

// USER GUESSES LETTERS IN THE RANDOM WORD

    // This function runs whenever the user presses a key.
    document.onkeyup = function(event) {
    var userGuess = event.key;
    var upUserGuess = userGuess.toUpperCase();
    guesses.push(upUserGuess);

    // DECREASE GUESSLEFT COUNTER
    guessesLeft--;
    guessesLeftDiv.textContent = "Guesses Left: " + guessesLeft;

    //  DISPLAY ENTERED GUESSES
    guessesDiv.textContent = "Your Guesses so far: " + guesses;

    // CHECK THE RANDOM WORD FOR A CHARACTER MATCH
    for (let i = 0; i < wordArray.length; i++) {
        if (upUserGuess === wordArray[i]) {
            console.log("good one!");

            hyphenatedArray[i] = randomWord[i];

            console.log('update: ' + hyphenatedArray);

            // DISPLAY REVEALED LETTERS
            var newtempHyphenatedWordDiv = document.getElementById("currentWord-div");
            newtempHyphenatedWordDiv.textContent = hyphenatedArray;


        } else {
            // hyphenatedArray[i] = '-';
            
            console.log("nope");
        }
    }
}