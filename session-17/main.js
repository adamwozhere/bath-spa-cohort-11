// Basic tic-tac-toe
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
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
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

// TODO
function playerHasWon() {
  for (let condition of winConditions) {
    let conditionCount = 0;
    for (let i = 0; i < condition.length; i++) {
      if (board[condition[i]] === playerTurn) {
        conditionCount += 1;
      } else {
        break;
      }
    }
    if (conditionCount === 3) return true;
  }
  return false;
}
