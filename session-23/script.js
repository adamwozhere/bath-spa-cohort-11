const form = document.getElementById('user-form');
const itemTable = document.getElementById('item-table');
const filterBtn = document.getElementById('filter-btn');
const clearBtn = document.getElementById('clear-filter-btn');
const filterInput = document.getElementById('filter-input');
const output = document.getElementById('output');

// array of stock item objects
const stock = [
  {
    item: 'Hoody',
    colour: 'Navy',
    price: 30,
    quantity: 100,
  },
  {
    item: 'Hoody',
    colour: 'Black',
    price: 20,
    quantity: 80,
  },
  {
    item: 'T-shirt',
    colour: 'Green',
    price: 15,
    quantity: 20,
  },
];

/**
 * Submit handler
 * input new stock item to array and add to table
 */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let item = {};
  // create object from key-value pairs of the form inputs
  for (let entry of form.querySelectorAll('input')) {
    item[entry.name] = entry.value;
  }

  // add item object to stock array
  stock.push(item);

  // create markup for the item row and insert into tbody
  let markup = createRowFromObject(item);
  itemTable.insertAdjacentHTML('beforeend', markup);

  // reset form and set focus to first input
  form.reset();
  form.elements[0].focus();

  // show array for debug / logging
  showStockArray();
});

/**
 * Filter handler
 * filter items and show html
 */
filterBtn.addEventListener('click', (e) => {
  // if filter input is empty then show all stock items
  if (filterInput.value === '') {
    createTable(stock);
    return;
  }

  // filter anywhere:
  // look at each value in each object, comparing to filterInput
  const filtered = stock.filter((item) =>
    Object.values(item).some(
      (val) =>
        val.toString().toLowerCase() ===
        filterInput.value.toString().toLowerCase()
    )
  );

  createTable(filtered);
  // show items array for debug / logging
  showStockArray();
});

/**
 * Clear handler
 * remove filter input and show all stock
 */
clearBtn.addEventListener('click', () => {
  filterInput.value = '';
  createTable(stock);
});

/**
 * create html table of items
 * @param {Array[Object]} items array of item objects
 */
function createTable(items) {
  itemTable.innerHTML = '';
  for (let item of items) {
    const markup = createRowFromObject(item);
    itemTable.insertAdjacentHTML('beforeend', markup);
  }
}

/**
 * HELPER FUNCTIONS
 */

/**
 * Create markup for a table row
 * @param {Object} item item object
 * @returns {String} template string of html
 */
function createRowFromObject(item) {
  return `
  <tr class="bg-white border-b">
    ${Object.values(item)
      .map(
        (val) =>
          `<td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${val}</td>`
      )
      .join('')}
  </tr>
  `;
}

/**
 * Create HTML for showing the stock array of objects
 * (for debug / logging)
 */
function showStockArray() {
  output.textContent = JSON.stringify(stock, null, 2);
}

// show initial stock
createTable(stock);
showStockArray();
