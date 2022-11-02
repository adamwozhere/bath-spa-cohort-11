/**
 * Drag and Drop Puzzles
 * puzzle pieces need to have and id attribute and a [data-puzzle-piece="rocket"] attribute.
 * a matching puzzle goal needs to have an id and matching data attribute e.g. [data-puzzle-goal="rocket"]
 * to show success message, a [data-task] and [data-task-complete] hidden div's are required.
 *
 * Note: HTML Drag and Drop API is a bit buggy:  dragOver needs to be cancelled in order from drop to work
 * and sometimes Chrome browser seems to show ghost image of dragging multiple images,
 * (or the main .media div) even though pointer events are set to none.
 * Perhaps using normal click events instead of Drag and Drop API would be better!
 */

// get puzzle elements
const puzzlePieces = document.querySelectorAll('[data-puzzle-piece]');
const puzzleGoals = document.querySelectorAll('[data-puzzle-goal]');
// successCount used to determine when whole puzzle is finished
let successCount = puzzleGoals.length;

// add event listeners and classes / attributes
puzzlePieces.forEach((el) => {
  el.setAttribute('draggable', 'true');
  el.classList.add('puzzle-draggable');
  el.addEventListener('dragstart', dragStart);
  el.addEventListener('dragend', dragEnd);
});

puzzleGoals.forEach((el) => {
  el.addEventListener('dragenter', dragEnter);
  el.addEventListener('dragover', dragOver);
  el.addEventListener('dragleave', dragLeave);
  el.addEventListener('drop', drop);
});

// stop edge cases where media box can be dragged even though no draggable attribute
document.addEventListener('dragstart', (e) => {
  // if not valid draggable puzzlepiece then preventDefault()
  if (!isValidPuzzlePiece(e)) {
    e.preventDefault();
    return;
  }
  console.log('dragging', e.target);
});

// hide puzzle piece while dragging
function dragStart(e) {
  // exit if not an unplaced puzzle piece
  if (!isValidPuzzlePiece(e)) return;

  e.dataTransfer.setData('puzzle-piece-id', e.target.id);
  // use delay of zero to stop flicker
  setTimeout(() => {
    e.target.classList.add('puzzle-hide');
  }, 0);
}

// reveal puzzle piece at end of drag
function dragEnd(e) {
  e.target.classList.remove('puzzle-hide');
}

// hover over puzzle goal
function dragEnter(e) {
  // cancel if piece has been placed in goal
  if (e.target.classList.contains('puzzle-placed')) return;
  // cancel if not a validPuzzlePiece
  if (!isValidPuzzlePiece(e)) return;

  // add hover style
  e.target.classList.add('puzzle-goal-hover');
}

function dragOver(e) {
  // needed to allow drop function to trigger !!!?!?
  e.preventDefault();
}

// remove hover
function dragLeave(e) {
  e.target.classList.remove('puzzle-goal-hover');
}

function drop(e) {
  e.preventDefault();
  // remove hover
  e.target.classList.remove('puzzle-goal-hover');

  if (isMatchingPuzzleEvent(e)) {
    placePuzzlePieceInGoal(e);
    success();
  }
}

// puzzle piece complete
function success() {
  successCount -= 1;
  if (successCount !== 0) return;

  // all puzzle pieces completed
  // show completed html div / hide task div
  const taskElement = document.querySelector('[data-task]');
  const completeElement = document.querySelector('[data-task-complete]');
  taskElement.setAttribute('hidden', 'true');
  completeElement.removeAttribute('hidden');

  // set each goal to complete (used for CSS styling animations)
  puzzleGoals.forEach((element) => {
    console.log('puzzle complete!');
    element.classList.add('puzzle-complete');
  });
}

/**
 * helper functions
 */

// checks if the puzzle piece is a valid drag target
function isValidPuzzlePiece(event) {
  const piece = event.target;
  if (
    piece.hasAttribute('data-puzzle-piece') &&
    piece.classList.contains('puzzle-draggable') &&
    !piece.classList.contains('puzzle-placed')
  ) {
    return true;
  } else if (event.dataTransfer.types.includes('puzzle-piece-id')) {
    return true;
  }

  return false;
}

// checks if the event is a correct puzzle piece dropped in the correct goal
function isMatchingPuzzleEvent(event) {
  const pieceElement = getPuzzlePieceFromEvent(event);
  const piece = pieceElement.getAttribute('data-puzzle-piece');
  const goal = event.target.getAttribute('data-puzzle-goal');
  console.log('piece', piece, 'goal', goal);
  if (piece === goal) return true;

  return false;
}

// gets the puzzle piece being dragged
function getPuzzlePieceFromEvent(event) {
  if (!event.dataTransfer.types.includes('puzzle-piece-id')) return null;

  const id = event.dataTransfer.getData('puzzle-piece-id');
  const element = document.getElementById(id);
  return element;
}

// puts the puzzle piece element in the goal
function placePuzzlePieceInGoal(event) {
  const piece = getPuzzlePieceFromEvent(event);
  const goal = event.target;
  goal.append(piece);
  goal.classList.add('puzzle-placed');
  piece.classList.add('puzzle-placed');
  piece.classList.remove('puzzle-draggable');
  piece.setAttribute('draggable', 'false');

  if (goal.hasAttribute('data-goal-img')) {
    const goalImg = event.target.getAttribute('data-goal-img');
    piece.src = `img/${goalImg}.png`;
  }
}
