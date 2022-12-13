/* use a function for the exact format desired... */
const d = new Date();
const dateInput = document.getElementById('booking-date');
const todayDate = d.toISOString().substring(0, 10);
dateInput.value = todayDate;
dateInput.min = todayDate;

dateInput.max = new Date(d.setMonth(d.getMonth() + 1))
  .toISOString()
  .substring(0, 10);

console.log(testDate);

console.log(dateInput.value);
console.log(dateInput.max);

const allergyOtherCheckbox = document.getElementById('allergy-other');
const allergyOtherSpecify = document.getElementById('allergy-other-specify');

allergyOtherCheckbox.addEventListener('input', (e) => {
  allergyOtherSpecify.disabled = !e.target.checked;
});

const form = document.getElementById('booking-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  console.log(JSON.stringify(data, null, 2));
  console.log(document.forms[0].allergies.values.toString());
  console.log(document.forms[0].name.value);
  console.log(document.forms[0].location.value);
});
