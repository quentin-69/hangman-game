# Hangman - Galgenmännchen

A classic **Hangman** (Galgenmännchen) game built with HTML, CSS, and JavaScript. This game allows users to guess a word letter by letter, with a visual representation of the hangman that gets drawn as incorrect guesses are made.

## Features

- **Word Display:** The word to guess is displayed with underscores representing unknown letters.
- **Letter Guessing:** Users can input a letter to guess.
- **Wrong Guesses Tracking:** Incorrect guesses are displayed with a limit of 7 tries.
- **Hangman Drawing:** A drawing of the hangman is updated based on the number of incorrect guesses.
- **Restart Button:** Users can restart the game at any time.
- **Responsive Design:** The game is fully responsive and optimized for mobile devices.

## Prerequisites

Make sure you have the following setup:

- A browser to run the game (Chrome, Firefox, etc.)
- A basic understanding of HTML, CSS, and JavaScript.


## Setup Instructions

1. Clone the repository or download the files to your local machine.
2. Ensure you have a `word_list.txt` file in the project directory with words listed one per line.
3. Place images for the hangman stages in the `/bilder/` directory. Make sure the images are named `level1.png`, `level2.png`, ..., `level7.png`.
4. Open `index.html` in a browser to start playing the game.

## Game Description

- **Objective:** The goal is to guess the selected word before running out of tries (7 incorrect guesses).
- **Gameplay:** 
    - The player guesses one letter at a time.
    - If the letter is in the word, it is revealed in the correct position.
    - If the letter is incorrect, the number of remaining tries decreases, and a part of the hangman figure is drawn.
    - The game ends when the player either guesses the word correctly or exhausts all their tries.

## Game Controls

- **Guess a letter:** Enter a letter into the input field and click "Buchstaben raten" to submit the guess.
- **Restart the game:** Click "Neustart" to start a new round of the game.

## Game Logic

- **Word Selection:** A random word is selected from a list in the `word_list.txt` file.
- **Game Over Conditions:**
    - The player guesses all letters correctly.
    - The player runs out of tries (7 wrong guesses).

## Code Overview

### HTML

The HTML file sets up the structure of the game, including:
- A heading for the game title.
- A section to display the current word with blanks for unknown letters.
- A section to show incorrect guesses.
- A dynamic drawing of the hangman.
- A restart button to reset the game.

### CSS

The `styles.css` file provides the styling for the game, with a vibrant and visually appealing layout. It includes:
- Styling for the game container, buttons, and text.
- Responsive design to ensure the game is playable on different screen sizes.

### JavaScript

The `javascript.js` file contains the game logic:
- **Word loading:** The game fetches a list of words from a `word_list.txt` file.
- **Guess handling:** Tracks player guesses, updates the display, and manages the game's state.
- **Hangman drawing:** The hangman image is updated after each wrong guess.
- **Restart functionality:** The game can be restarted at any time by clicking the restart button.

## Credits

- **Game Idea:** The classic Hangman game.
- **Hangman Images:** Custom images for each hangman stage.



## TODO

- Improve the word list by adding more words.
- Add support for multiple difficulty levels.
- Include audio/visual effects for a more engaging experience.

