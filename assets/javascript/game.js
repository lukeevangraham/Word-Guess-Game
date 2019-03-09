// LIST OF POSSIBLE WORDS
var words = ["BLOFELD", "ODDJOB", "SPECTRE", "DALTON", "LICENSE", "VESPER", "SKYFALL", "GOLDFINGER", "MONEYPENNY"];

// APP RANDOMLY PICKS A WORD
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);