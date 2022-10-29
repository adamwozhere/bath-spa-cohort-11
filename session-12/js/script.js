// dragable
/*
const suit = document.getElementById('spacesuit');
suit.addEventListener('dragstart', function (e) {
  e.dataTransfer.setData('id', e.target.id);
  setTimeout(function () {
    e.target.classList.add('hide');
  }, 0);
});

suit.addEventListener('dragend', function (e) {
  console.log('unhide');
  suit.classList.remove('hide');
});

const dragTarget = document.getElementById('drag-target');
dragTarget.addEventListener('dragenter', dragOn);
dragTarget.addEventListener('dragover', dragOn);
dragTarget.addEventListener('dragleave', dragOff);
dragTarget.addEventListener('drop', drop);

function dragOn(e) {
  e.preventDefault();
  const dragable = e.dataTransfer.getData('id');
  console.log('dragable' + '->');
  console.log(e.dataTransfer.getData('id'));
  this.classList.add('drag-over');
}

function dragOff(e) {
  // const id = e.dataTransfer.getData('text/plain');
  this.classList.remove('drag-over');
}

function drop(e) {
  e.target.classList.remove('drag-over');
  // console.log(e.target, 'drop');

  const id = e.dataTransfer.getData('id');
  console.log('drop id', id);
  const dragable = document.getElementById(id);

  // dragable.classList.remove('hide');
  if (dragable == suit) {
    // e.stopPropagation();
    dragTarget.src = 'img/you-spacesuit.png';
    success();
  }
}

function success() {
  console.log('success!');
  const msg = document.getElementById('success-msg');
  msg.innerText = 'Success!';
}
*/

const draggable = document.getElementById('spacesuit');
const droppable = document.getElementById('drag-target');

/// draggable
draggable.addEventListener('dragstart', dragStart);
// drag
// dragend

/// droppable
droppable.addEventListener('dragenter', dragEnter);
droppable.addEventListener('dragover', dragOver);
droppable.addEventListener('dragleave', dragLeave);
droppable.addEventListener('drop', drop);

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
}

function dragEnter(e) {
  // only apply drag-over class if the item has not been dropped yet
  if (!e.target.classList.contains('dropped')) {
    e.target.classList.add('drag-over');
  }
}

function dragOver(e) {
  // only allow dropping if not already dropped
  if (!e.target.classList.contains('dropped')) {
    // needed to allow drop function to run
    e.preventDefault();
  }
}

function dragLeave(e) {
  // may need to check for 'dropped' class in case of errors
  e.target.classList.remove('drag-over');
}

function drop(e) {
  // stop dragging an image from desktop etc. into browser
  e.preventDefault();
  e.target.classList.remove('drag-over');
  const draggableData = e.dataTransfer.getData('text/plain');
  console.log(draggableData);
  const droppableData = e.target.getAttribute('data-draggable-id');

  if (draggableData === droppableData) {
    // get draggable id
    // if drag id and drop id are equal,
    // add dropped class
    e.target.classList.add('dropped');
    const draggableElement = document.getElementById(draggableData);
    draggableElement.classList.add('dragged');
    draggableElement.setAttribute('draggable', 'false');
    // insert the image

    if (e.target.hasAttribute('data-drop-img')) {
      const img = e.target.getAttribute('data-drop-img');
      const html = `<img src="img/${img}.png"/>`;
      e.target.insertAdjacentHTML('beforeend', html);
    } else {
      e.target.append(draggableElement);
    }
  }
}
