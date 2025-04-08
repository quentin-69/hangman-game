let selectedWord = "";
let displayedWord = [];
let wrongGuesses = [];
let maxTries = 7;
let triesLeft = maxTries;
let gameOver = false;let words = [];

const wordDisplay = document.getElementById('word-display');
const wrongGuessesDisplay = document.getElementById('wrong-guesses');
const hangmanDrawing = document.getElementById('hangman-drawing');
const messageDisplay = document.getElementById('message');
const letterInput = document.getElementById('letter-input');
const submitButton = document.getElementById('submit-letter');
const restartButton = document.getElementById('restart');

submitButton.addEventListener('click', handleGuess);

async function loadWords() {
    const response = await fetch('word_list.txt');
    const data = await response.text();
    words = data.split('\n').map(word => word.trim().toLowerCase());
    startGame();
}

function startGame() {
    if (words.length === 0) {
        alert("Keine Wörter geladen!");
        return;
    }
    selectedWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array(selectedWord.length).fill('_');
    wrongGuesses = [];
    triesLeft = maxTries;
    gameOver = false;
    updateDisplay();
}

function updateDisplay() {
    wordDisplay.textContent = displayedWord.join(' ');
    wrongGuessesDisplay.textContent = `Falsche Buchstaben: ${wrongGuesses.join(', ')}`;
    messageDisplay.textContent = gameOver ? (triesLeft === 0 ? "Verloren! Das Wort war: " + selectedWord : "Gewonnen!") : `Versuche übrig: ${triesLeft}`;
    drawHangman();
}

function handleGuess() {
    const letter = letterInput.value.toLowerCase();
    letterInput.value = '';
    if (gameOver || wrongGuesses.includes(letter) || displayedWord.includes(letter)) return;

    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                displayedWord[i] = letter;
            }
        }
    } else {
        wrongGuesses.push(letter);
        triesLeft--;
    }

    if (displayedWord.join('') === selectedWord || triesLeft === 0) {
        gameOver = true;
    }
    updateDisplay();
}

function drawHangman() {
    const hangmanImage = document.getElementById('hangman-drawing');
    const imageLevel = maxTries - triesLeft + 1;
    hangmanImage.innerHTML = `<img src="bilder/level${imageLevel}.png" alt="Hangman Level ${imageLevel}">`;
}

restartButton.addEventListener('click', startGame);
submitButton.addEventListener('click', handleGuess);

loadWords();