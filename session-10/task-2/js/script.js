const height = document.getElementById('height-cm');
const weight = document.getElementById('weight-kg');
const outputBmi = document.getElementById('output-bmi');
const outputMsg = document.getElementById('output-msg');

function calculateBMI() {
  // get BMI based on weight in kg and height in cm
  const result = (weight.value / height.value / height.value) * 10000;
  // convert to 1 decimal place
  const bmi = result.toFixed(1);
  let message = '';

  if (bmi < 18.5) {
    message = "Below 18.5<br/> you're in the underweight range";
    outputBmi.setAttribute('data-status', 'warning');
  } else if (bmi < 25) {
    message = "Between 18.5 and 24.9<br/> you're in the healthy weight range";
    outputBmi.setAttribute('data-status', 'ok');
  } else if (bmi < 30) {
    message = "Between 25 and 29.9<br/> you're in the overweight range";
    outputBmi.setAttribute('data-status', 'warning');
  } else if (bmi < 40) {
    message = "Between 30 and 39.9<br/> you're in the obese range";
    outputBmi.setAttribute('data-status', 'danger');
  } else {
    message = 'Not in BMI range!';
  }

  outputBmi.innerHTML = bmi;
  outputMsg.innerHTML = message;
}
