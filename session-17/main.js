/**
 * TODO: check for win conditions in playerHasWon();
 */
const buttons = document.querySelectorAll('.btn');
buttons.forEach((b) => {
  b.addEventListener('click', (e) => {
    // buttons is an array of Nodes NOT elements: convert to array first
    // then get index of the button clicked
    let index = Array.from(buttons).indexOf(e.target);
    if (!win) tryMove(index);
  });
});

const statusMsg = document.querySelector('#status-msg');

const winConditions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerTurn = 1;
let win = false;

function tryMove(index) {
  if (board[index] !== 0) {
    console.log('space occupied');
  } else {
    buttons[index].innerHTML = playerTurn === 1 ? 'O' : 'X';
    board[index] = playerTurn;
    if (playerHasWon()) {
      console.log('player has won!');
      win = true;
      statusMsg.textContent = `Player ${playerTurn} has won!
      Refresh the page to play again`;
    } else {
      swapPlayerTurn();
    }
  }
}

// try doing this with modulo?
function swapPlayerTurn() {
  if (playerTurn === 1) {
    playerTurn = 2;
  } else if (playerTurn === 2) {
    playerTurn = 1;
  }
  statusMsg.textContent = `Player ${playerTurn}'s turn`;
}

function playerHasWon() {
  winConditions.forEach((w) => {
    let win = 0;
  });
  return false;
}
