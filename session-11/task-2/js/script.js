const shoppingList = document.getElementById('shopping-list');
const itemInput = document.getElementById('shopping-item');
const form = document.getElementById('shopping-form');

const shoppingListItems = ['apples', 'pears', 'stuff'];

// the element is automatically added as an argument to addItem function, but why?
shoppingListItems.forEach(addItem);

console.log(shoppingListItems);

// handler for delete buttons
form.addEventListener('click', function (e) {
  // skip if it's not a delete button
  if (!e.target.classList.contains('delete-btn')) return;
  // get the li element that has the clicked button
  let li = e.target.closest('li');
  // find index of the li in the ul list
  let index = Array.from(shoppingList.children).indexOf(li);
  // remove that index from the array
  shoppingListItems.splice(index, 1);
  // remove the li from the DOM
  li.remove();
});

// handler for adding items
form.addEventListener('submit', function (e) {
  // stop form submission
  e.preventDefault();

  const itemToAdd = itemInput.value;

  if (itemToAdd == '') return;

  if (shoppingListItems.includes(itemToAdd)) {
    alert(`You already have ${itemToAdd} on your list!`);
    refocus();
  } else {
    shoppingListItems.push(itemToAdd);
    addItem(itemToAdd);
  }
});

// adds an item to the hml list
function addItem(itemToAdd) {
  const html = `<li>${itemToAdd} <button class="delete-btn">x</button</li>`;
  shoppingList.insertAdjacentHTML('beforeend', html);
  refocus();
}

// clear input
function refocus() {
  itemInput.value = '';
  itemInput.focus();
}
