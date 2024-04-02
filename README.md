# Typing Speed Test Game

This is a simple web-based typing speed test game built with HTML, CSS, and JavaScript. The game displays a predefined sentence, and the objective is to type the sentence as quickly and accurately as possible within a given time limit.

## Features

- Displays a predefined sentence to type.
- Starts a countdown timer when the game begins.
- Highlights the current character being typed.
- Disables input and stops the timer when the entire sentence is typed correctly or when time runs out.
- Allows the user to restart the game.

## How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Click the "Start" button to begin the game.
4. Type the displayed sentence into the input field as quickly and accurately as possible.
5. Hit "Enter" after typing the entire sentence to check if it matches the displayed sentence.
6. If the sentence matches, you win. If time runs out, you lose.
7. Click the "Restart" button to play again.

## Code Overview

- The predefined sentence is stored in the `sentence` variable.
- Event listeners are added to handle user input and actions such as starting the game, checking typed text, and restarting the game.
- The `updateTimer` function updates the countdown timer displayed on the screen.
- The `playcolor` function highlights the current character being typed.
- The `check` function compares the typed character with the expected character in the sentence.

## Dependencies

This project does not have any external dependencies.
