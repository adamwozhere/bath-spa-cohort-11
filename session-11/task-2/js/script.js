const shoppingList = document.getElementById('shopping-list');
const itemInput = document.getElementById('shopping-item');

const shoppingListItems = [];

function addItem() {
  const itemToAdd = itemInput.value;

  if (itemToAdd === '') return;

  if (shoppingListItems.includes(itemToAdd)) {
    alert(`You already have ${itemToAdd} on your list!`);
    refocus();
    return;
  }

  shoppingListItems.push(itemToAdd);
  const html = `<li>${itemToAdd} <input type="button" value="x" onclick="alert(this)"></li>`;
  shoppingList.insertAdjacentHTML('beforeend', html);
  refocus();
}

function refocus() {
  itemInput.value = '';
  itemInput.focus();
}
