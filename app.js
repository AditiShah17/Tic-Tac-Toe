// Get all 9 cells
const cells = document.querySelectorAll('.cell');

// Get the game board
const gameBoard = document.querySelector('.game-board');

// Get the reset button
const resetButton = document.querySelector('.reset-button');

// Get the turn indicator (X turn)
const turnIndicator = document.querySelector('.turn-indicator');

// Get the score value elements
const xScoreElement = document.getElementById('x-score');
const oScoreElement = document.getElementById('o-score');
const tiesScoreElement = document.getElementById('ties-score');

console.log("JavaScript file loaded");

// Game state variables

// We'll start with 'X'
let isPlayerXTurn = true;

// This array will represent 3 X 3 board
let boardState = ['', '', '', '', '', '', '', '', ''];

// Keep track of scores
let scores = {
    x: 0,
    o: 0,
    ties: 0
};

// Variable to check if the game is active
let gameIsActive = true;

// Define the 8 winning combinations
const winningCombos = [
    [0, 1, 2], //Row 1
    [3, 4, 5], //Row 2
    [6, 7, 8], //Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6]  // Diagonal 2
]

// -----Main Game Logic Functions------

function handleCellClick(event){
    // Get the cell - clicked
    const clickedCell = event.target;

    // Get the cell's index
    const cellIndex = parseInt(clickedCell.dataset.cellIndex);

    // Check if the cell is already filled or if the game is over
    // If it is, do nothing (return)
    if (boardState[cellIndex] !== '' || !gameIsActive) {
        return;
    }

    // If the cell is empty and game is active, place a mark
    placeMark(clickedCell, cellIndex);

    // Check if this move caused a win
    if(checkWin()){
        endGame(false); //false means it's not a tie
    }
    // check if this move caused a tie
    else if(checkTie()){
        endGame(true); //true means it is a tie
    }
    // if no win and no tie, switch the turn
    else{
        switchTurn();
    }
}

// Add the event listener to every cell
cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
})

function placeMark(cellElement , index){
    // Determine the current mark(X or O)
    const currentMark = isPlayerXTurn ? 'x' : 'o';

    // update our boardstate array
    boardState[index] = currentMark;

    // update the HTML to show the mark
    cellElement.textContent = currentMark;
    cellElement.classList.add(currentMark); //Adds .x or .o for styling
}

function switchTurn()
{
    // Flip the boolean
    isPlayerXTurn = !isPlayerXTurn; // '!' means not (flips true or false)

    // Update the turn indicator text
    const nextPlayer = isPlayerXTurn ? 'x' : 'o';
    turnIndicator.textContent = `${nextPlayer} TURN`;

}

function checkWin(){
    const currentMark = isPlayerXTurn ? 'x' : 'o';

    // We use .some() to check if ANY wining combos are true
    return winningCombos.some(combo =>{
        // We use every() to check is Every cell in that combo has current Mark
        return combo.every(index =>{
            return boardState[index] === currentMark;
        })
    });
}

function checkTie(){
    // If every cell is filled (not empty string), it's a tie
    return boardState.every(cell => cell !== '');
}

function endGame(isTie){
    gameIsActive = false; //Stop the game

    if(isTie){
        // handle tie

        scores.ties++;
        tiesScoreElement.textContent = scores.ties;
        turnIndicator.textContent = "It's a TIE";
    }
    else{
        // Handle win

        if(isPlayerXTurn){
            scores.x++;
            xScoreElement.textContent = scores.x;
            turnIndicator.textContent = 'X WINS';
        }
        else {
            scores.o++;
            oScoreElement.textContent = scores.o;
            turnIndicator.textContent = 'O WINS!';
        }
    }

}

// --- Reset Button Logic ---

function resetGame() {
    // 1. Reset all state variables
    boardState = ['', '', '', '', '', '', '', '', ''];
    gameIsActive = true;
    isPlayerXTurn = true; // X always starts
    
    // 2. Reset the turn indicator
    turnIndicator.textContent = 'X TURN';

    // 3. Clear the board in the HTML
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o'); // Remove styling classes
    });
}

// Add the event listener to the reset button
resetButton.addEventListener('click', resetGame);