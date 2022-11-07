// DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('name');
const focus = document.getElementById('focus');

// options
const showAmPm = true;

// show time
function showTime() {
  // let today = new Date(2022, 06, 10, 20, 33, 30); // check evening
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  // set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr format
  hour = hour % 12 || 12;

  // output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background and greeting
function setBgGreet() {
  // let today = new Date(2022, 06, 10, 20, 33, 30); // check evening
  let today = new Date();
  hour = today.getHours();

  if (hour < 12) {
    // morning
    document.body.style.backgroundImage = 'url("img/morning.jpg")';
    greeting.textContent = 'Good morning';
  } else if (hour < 18) {
    // afternoon
    document.body.style.backgroundImage = 'url("img/afternoon.jpg")';
    greeting.textContent = 'Good afternoon';
  } else {
    // evening
    document.body.style.backgroundImage = 'url("img/night.jpg")';
    greeting.textContent = 'Good evening';
    document.body.style.color = 'white';
  }
}

// get name
function getName() {
  if (localStorage.getItem('name') === null) {
    userName.textContent = '[enter name]';
  } else {
    userName.textContent = localStorage.getItem('name');
  }
}

// set name
function setName(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keycode == 13 || e.key === 'Enter') {
      localStorage.setItem('name', e.target.innerText);
      userName.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// get focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[enter focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// set focus
function setFocus(e) {
  if (e.type === 'keypress') {
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

userName.addEventListener('keypress', setName);
userName.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
// run
showTime();
setBgGreet();
getName();
getFocus();
