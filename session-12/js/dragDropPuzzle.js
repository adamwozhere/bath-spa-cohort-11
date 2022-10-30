const puzzlePieces = document.querySelectorAll('[data-puzzle-piece]');
const puzzleGoals = document.querySelectorAll('[data-puzzle-goal]');
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
  console.log('dragging', e.target);
  if (!e.target.classList.contains('puzzle-draggable')) {
    e.preventDefault();
  }
});

// hide puzzle piece while dragging
function dragStart(e) {
  console.log('dragging', e.target);
  // exit if not an unplaced puzzle piece
  if (!e.target.classList.contains('puzzle-draggable')) return;
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
  if (e.target.classList.contains('puzzle-placed')) return;
  if (!e.dataTransfer.types.includes('puzzle-piece-id')) return;
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

  // get element id of puzzle piece
  const id = e.dataTransfer.getData('puzzle-piece-id');
  // if not a puzzle piece then exit
  if (id === '') return;

  const puzzlePieceElement = document.getElementById(id);
  const puzzlePiece = puzzlePieceElement.getAttribute('data-puzzle-piece');
  const puzzleGoal = e.target.getAttribute('data-puzzle-goal');
  // correct puzzle piece
  if (puzzleGoal === puzzlePiece) {
    e.target.append(puzzlePieceElement);
    e.target.classList.add('puzzle-placed');
    puzzlePieceElement.classList.add('puzzle-placed');
    puzzlePieceElement.classList.remove('puzzle-draggable');
    puzzlePieceElement.setAttribute('draggable', 'false');
    success();
  }
}

// puzzle piece complete
function success() {
  successCount -= 1;
  if (successCount !== 0) return;

  // all puzzle pieces completed
  const taskElement = document.querySelector('[data-task]');
  const completeElement = document.querySelector('[data-task-complete]');
  console.log(completeElement);

  // show completed html
  taskElement.setAttribute('hidden', 'true');
  completeElement.removeAttribute('hidden');

  // set each goal to complete (used for CSS styling)
  puzzleGoals.forEach((element) => {
    element.classList.add('puzzle-complete');
  });
}
