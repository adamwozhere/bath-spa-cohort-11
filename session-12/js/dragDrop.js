const draggables = document.querySelectorAll('.draggable');
const dropTargets = document.querySelectorAll('.drop-target');
let successCount = dropTargets.length;
const mediaBox = document.querySelector('.media');

draggables.forEach((element) => {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragend', dragEnd);
});

dropTargets.forEach((element) => {
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', drop);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  console.log('startDrag', e.target);

  // using a timeout delay of zero stops the flickering between item being hidden and the ghost image
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
}

function dragEnd(e) {
  console.log('dragend');
  e.target.classList.remove('hide');
}

function dragEnter(e) {
  // if item has already been dropped then do not highlight box
  if (e.target.classList.contains('dropped')) return;

  // fix bug: if dragging nothing do not highlight box
  // this does not work as dataTransfer.getData does not work in dragenter!!!
  // fix by adding a boolean dragging state?
  // if (e.dataTransfer.getData('text/plain') === '') {
  //   console.log('catch dragging nothing');
  //   return;
  // }

  // highlight box
  e.target.classList.add('drag-over');
  console.log('drag-over');
}

function dragOver(e) {
  e.preventDefault(); // prevent default to all drop to trigger
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.preventDefault();
  console.log('drop');

  e.target.classList.remove('drag-over');

  const id = e.dataTransfer.getData('text/plain');
  const dropTarget = e.target.getAttribute('data-drop-target');
  console.log(id, dropTarget);

  if (id === dropTarget) {
    console.log('correct');
    const element = document.getElementById(id);
    e.target.append(element);
    element.classList.add('dropped');
    element.setAttribute('draggable', 'false');
    success();
  }
}

function success() {
  successCount--;
  if (successCount === 0) {
    console.log('completed!');
    const taskHtml = document.querySelector('[data-task]');
    const successHtml = document.querySelector('[data-success]');

    const rocketComplete = document.getElementById('rocket-target');
    rocketComplete.classList.add('rocket-complete');

    dropTargets.forEach((element) => {
      element.classList.remove('drop-target');
    });

    // setTimeout(() => {
    taskHtml.setAttribute('hidden', 'true');
    successHtml.removeAttribute('hidden');
    // }, 650);
  }
}
