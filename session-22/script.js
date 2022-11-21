const form = document.getElementById('user-form');
const itemTable = document.getElementById('item-table');
const output = document.getElementById('output');
const itemsArray = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let item = {};
  // create object from key-value pairs of the form entries
  // NOTE: could maybe do this with Array.reduce() ?
  // OR: with FormData object ?
  for (entry of form.querySelectorAll('input')) {
    item[entry.name] = entry.value;
  }

  console.log(item);

  // add item object to itemsArray
  itemsArray.push(item);

  // add item to the table tbody,
  // looping over the values in the item object with map
  itemTable.insertAdjacentHTML(
    'beforeend',
    `
    <tr class="bg-white border-b">
      ${Object.values(item)
        .map((a) => {
          return `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${a}</td>`;
        })
        .join('')}
    </tr>
    `
  );

  // reset form and set focus to first input
  form.reset();
  form.elements[0].focus();

  // show the array of objects
  output.textContent = JSON.stringify(itemsArray, null, 2);
});
